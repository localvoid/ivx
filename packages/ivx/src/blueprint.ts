import { VNodeFlags, VNode, VNodeChildren, ComponentDescriptor, ConnectDescriptor } from "./vnode";
import { renderOpenElement } from "./render";
import { escapeText } from "./escape";
import { flattenString } from "./flatten";

export const enum BlueprintNodeFlags {
  String = 1,
  Number = 1 << 1,
  VNode = 1 << 2,
  DeepConnect = 1 << 3,
}

/**
 * Blueprint Node.
 */
export class BlueprintNode {
  /**
   * See `BlueprintNodeFlags` for details.
   */
  flags: BlueprintNodeFlags;
  /**
   * Object that were used to create this node.
   */
  src: VNode<any> | string | number;
  /**
   * Children.
   */
  children: BlueprintChildren;
  /**
   * Prerendered string.
   *
   * String => Escaped String
   * Number => Number.toString()
   * VNode  =>
   *   RawText => Flattened raw text.
   *   Element => <Open Tag with attributes>
   *   Component => Prerendered component
   *   Connect   => Prerendered connector
   */
  string: string;
  /**
   * Additional Data.
   *
   * Selector data for connectors.
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

export type BlueprintChildren = BlueprintChildrenArray | BlueprintNode | null;
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
 * createBlueprintFromVNode creates a blueprint from Virtual DOM node.
 *
 * @param vnode Virtual DOM node.
 * @param context Current context.
 * @returns Blueprint node.
 */
function createBlueprintFromVNode(vnode: VNode<any>, context: {}): CreateResult {
  const flags = vnode._flags;

  if ((flags & VNodeFlags.Element) !== 0) {
    const openString = flattenString(renderOpenElement(vnode));
    const { children, deepConnect, string } = createBlueprintFromChildren(vnode._children, context);
    return {
      children: new BlueprintNode(BlueprintNodeFlags.VNode, vnode, children, openString, null),
      deepConnect,
      string: ((flags & VNodeFlags.VoidElement) === 0) ?
        flattenString(openString + string + vnode._close) :
        openString,
    };
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
 * createBlueprint creates a blueprint that can be used to optimize rendering to string.
 *
 * @param node Virtual DOM node.
 * @param context Context.
 * @returns Blueprint.
 */
export function createBlueprint(node: VNode<any>, context: {} = {}): BlueprintNode {
  return createBlueprintFromVNode(node, context).children as BlueprintNode;
}

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
    null,
  );
}
