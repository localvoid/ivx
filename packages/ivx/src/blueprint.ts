import { VNodeFlags, VNode, VNodeChildren, ComponentDescriptor, ConnectDescriptor } from "./vnode";
import { renderOpenElement } from "./render";
import { escapeText } from "./escape";
import { flattenString } from "./flatten";

/**
 * Blueprint node flags.
 */
export const enum BlueprintNodeFlags {
  /**
   * Blueprint node were instantiated from a `string`.
   */
  String = 1,
  /**
   * Blueprint node were instantiated from a `number`.
   */
  Number = 1 << 1,
  /**
   * Blueprint node were instantiated from a {@link VNode} object.
   */
  VNode = 1 << 2,
  /**
   * Blueprint contains a {@link VNode} with a {@link VNodeFlags.Connect} flag.
   */
  DeepConnect = 1 << 3,
}

/**
 * Blueprint node.
 */
export class BlueprintNode {
  /**
   * Flags. See the {@link BlueprintNodeFlags} for details.
   */
  flags: BlueprintNodeFlags;
  /**
   * Source object. Object that were used as a prototype for this node.
   */
  src: VNode<any> | string | number;
  /**
   * Children.
   */
  children: BlueprintChildren;
  /**
   * Prerendered string.
   *
   * Depending on the source object, it may contain different prerendered strings:
   *
   * - strings will be converted to escaped strings
   * - numbers will be converted to strings with `toString()` method
   * - {@link VNode} with a {@link VNodeFlags.RawText} flag will be converted to a flattened string
   * - {@link VNode} with a {@link VNodeFlags.Element} flag will be prerendered as an open tag with attributes
   * - {@link VNode} with a {@link VNodeFlags.Component} flag will be fully prerendered
   * - {@link VNode} with a {@link VNodeFlags.Connect} flag will be fully prerendered
   */
  string: string;
  /**
   * Additional data.
   *
   * {@link VNode} with a {@link VNodeFlags.Connect} flag is using this property to store internal state produced by
   * selector function.
   */
  data: {} | null;

  constructor(
    flags: BlueprintNodeFlags,
    src: VNode<any> | string | number,
    children: BlueprintChildren,
    string: string,
    data: {} | null,
  ) {
    this.flags = flags;
    this.src = src;
    this.children = children;
    this.string = string;
    this.data = data;
  }
}

/**
 * Blueprint children.
 */
export type BlueprintChildren = BlueprintChildrenArray | BlueprintNode | null;
/**
 * Recursive bluprint children array.
 */
export interface BlueprintChildrenArray extends Array<BlueprintChildren> { }

interface CreateResult {
  children: BlueprintChildren;
  deepConnect: boolean;
  string: string;
}

const NULL_RESULT = {
  children: null,
  deepConnect: false,
  string: "",
};

function createBlueprintFromChildren(children: VNodeChildren, context: {}): CreateResult {
  if (typeof children === "object") {
    if (children === null) {
      return NULL_RESULT;
    }
    if (Array.isArray(children)) {
      const blueprintChildren = [];
      let deepConnect = false;
      let string = "";

      for (const c of children) {
        const r = createBlueprintFromChildren(c, context);
        blueprintChildren.push(r.children);
        if (r.deepConnect) {
          deepConnect = true;
        }
        string += r.string;
      }
      return {
        children: blueprintChildren,
        deepConnect,
        string,
      };
    }
    return createBlueprintFromVNode(children, context);
  } else if (typeof children === "string") {
    const string = escapeText(children);
    return {
      children: new BlueprintNode(BlueprintNodeFlags.String, children, null, string, null),
      deepConnect: false,
      string,
    };
  } else {
    const string = children.toString();
    return {
      children: new BlueprintNode(BlueprintNodeFlags.Number, children, null, string, null),
      deepConnect: false,
      string,
    };
  }
}

/**
 * Creates a blueprint from a virtual DOM node.
 *
 * @param vnode - Virtual DOM node.
 * @param context - Current context.
 * @returns Blueprint node.
 */
function createBlueprintFromVNode(vnode: VNode<any>, context: {}): CreateResult {
  const flags = vnode._flags;

  if ((flags & (VNodeFlags.RawText | VNodeFlags.Element)) !== 0) {
    if ((flags & VNodeFlags.RawText) !== 0) {
      const text = vnode._children as string;
      return {
        children: new BlueprintNode(BlueprintNodeFlags.VNode, vnode, null, text, null),
        deepConnect: false,
        string: text,
      };
    } else {
      const openString = flattenString(renderOpenElement(vnode));
      const { children, deepConnect, string } = createBlueprintFromChildren(vnode._children, context);
      return {
        children: new BlueprintNode(BlueprintNodeFlags.VNode, vnode, children, openString, null),
        deepConnect,
        string: ((flags & VNodeFlags.VoidElement) === 0) ?
          flattenString(openString + string + vnode._close) :
          openString,
      };
    }
  } else { // Component | Connect | UpdateContext
    const props = vnode._props;
    if ((flags & (VNodeFlags.Connect | VNodeFlags.UpdateContext)) !== 0) {
      if ((flags & VNodeFlags.Connect) !== 0) {
        const connect = vnode._tag as ConnectDescriptor<any, any, any>;
        const selectData = connect.select(null, props, context);
        const { children, deepConnect, string } = createBlueprintFromChildren(connect.render(selectData), context);
        return {
          children: new BlueprintNode(
            deepConnect
              ? (BlueprintNodeFlags.VNode | BlueprintNodeFlags.DeepConnect)
              : BlueprintNodeFlags.VNode,
            vnode,
            children,
            string,
            selectData,
          ),
          deepConnect: true,
          string,
        };
      } else { // UpdateContext
        const { children, deepConnect, string } =
          createBlueprintFromChildren(vnode._children, Object.assign({}, context, props));
        return {
          children: new BlueprintNode(BlueprintNodeFlags.VNode, vnode, children, string, null),
          deepConnect,
          string,
        };
      }
    } else { // Component
      const { children, deepConnect, string } =
        createBlueprintFromChildren((vnode._tag as ComponentDescriptor<any>).render(props), context);
      return {
        children: new BlueprintNode(
          deepConnect
            ? (BlueprintNodeFlags.VNode | BlueprintNodeFlags.DeepConnect)
            : BlueprintNodeFlags.VNode,
          vnode,
          children,
          string,
          null,
        ),
        deepConnect,
        string,
      };
    }
  }
}

/**
 * Creates a blueprint that can be used to optimize rendering.
 *
 * @param node - Virtual DOM node
 * @param context - Context
 * @returns {@link BlueprintNode}
 */
export function createBlueprint(node: VNode<any>, context: {} = {}): BlueprintNode {
  return createBlueprintFromVNode(node, context).children as BlueprintNode;
}

/**
 * Creates a factory function with a linked blueprint.
 *
 * @param node - Virtual DOM node
 * @param context - Context
 * @returns Factory function with a linked blueprint
 */
export function componentWithBlueprint(node: VNode<null>, context?: {}): () => VNode<null>;
export function componentWithBlueprint<P>(node: VNode<P>, context?: {}): (props: P) => VNode<P>;
export function componentWithBlueprint<P>(node: VNode<P>, context?: {}): (props: P) => VNode<P> {
  const prev = node._tag as ComponentDescriptor<P>;
  const flags = node._flags | VNodeFlags.LinkedBlueprint;
  const blueprint = createBlueprint(node, context);
  return (props: P) => new VNode<P>(
    flags,
    prev,
    props,
    blueprint,
    null,
    void 0,
    null,
  );
}
