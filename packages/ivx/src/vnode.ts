import { BlueprintNode } from "./blueprint";

/**
 * VNode flags.
 */
export const enum VNodeFlags {
  /**
   * Raw Text VNode.
   */
  RawText = 1,
  /**
   * Element VNode.
   */
  Element = 1 << 1,
  /**
   * Component VNode.
   */
  Component = 1 << 2,
  /**
   * Connector VNode.
   */
  Connect = 1 << 3,
  /**
   * Context VNode.
   */
  UpdateContext = 1 << 4,
  /**
   * Custom Element.
   */
  CustomElement = 1 << 5,
  /**
   * SVG Element.
   */
  SvgElement = 1 << 6,
  /**
   * VNode element cannot contain any children.
   */
  VoidElement = 1 << 7,
  /**
   * http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody
   * http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre
   */
  NewLineEatingElement = 1 << 8,
  /**
   * Component has a linked blueprint.
   */
  LinkedBlueprint = 1 << 9,

  /**
   * Unique ID.
   */
  UniqueIdOffset = 10,

  /**
   * Flags that should match to be compatible for syncing.
   */
  Syncable = ~LinkedBlueprint,
}

/**
 * Virtual DOM Node.
 *
 *     const vnode = h.div("div-class-name")
 *         .a({ id: "div-id" })
 *         .c("Hello");
 *
 * @final
 */
export class VNode<P = any> {
  /**
   * Flags, see `VNodeFlags` for details.
   */
  _flags: VNodeFlags;
  /**
   * Children.
   */
  _children: VNodeChildren;
  /**
   * Tag property contains details about the type of the element.
   */
  _tag: string | ComponentDescriptor<any> | ConnectDescriptor<any, any, any> | null;
  /**
   * Properties.
   */
  _props: P | null;
  /**
   * Style.
   */
  _style: {} | null;
  /**
   * Class name.
   */
  _className: BlueprintNode | string | null;
  /**
   * Close element string.
   */
  _close: string | null;

  constructor(
    flags: number,
    tag: string | ComponentDescriptor<P> | ConnectDescriptor<any, any, any> | null,
    props: P | null,
    className: BlueprintNode | string | null,
    children: VNodeChildren,
    close: string | null,
  ) {
    this._flags = flags;
    this._children = children;
    this._tag = tag;
    this._props = props;
    this._style = null;
    this._className = className;
    this._close = close;
  }

  /**
   * s assigns style for an Element node.
   *
   * @param style Style.
   * @returns VNode
   */
  s<U extends {}>(style: U | null): this {
    this._style = style;
    return this;
  }

  /**
   * a assigns DOM attributes for an Element node.
   *
   * @param attrs DOM attributes.
   * @returns VNode
   */
  a(attrs: { [key: string]: any } | null): this {
    this._props = attrs as P;
    return this;
  }

  /**
   * c assigns children for an Element node.
   *
   * @param children Children can be a simple string, single VNode or recursive list of VNodes with strings and null
   *   values.
   * @returns VNode
   */
  c(children: VNodeChildren): this {
    this._children = children;
    return this;
  }
}

export type VNodeChildren = VNodeChildrenArray | VNode<any> | string | number | null;
export interface VNodeChildrenArray extends Array<VNodeChildren> { }

/**
 * raw creates a VNode with a raw text.
 *
 * @param text raw text.
 * @returns raw text VNode.
 */
export function raw(text: string): VNode<null> {
  return new VNode<null>(
    VNodeFlags.RawText,
    null,
    null,
    null,
    text,
    null,
  );
}

/**
 * Component descriptor.
 */
export interface ComponentDescriptor<P = void> {
  render(props: P): VNodeChildren;
  shouldUpdate(prevProps: P, nextProps: P): boolean;
}

/**
 * Checks props with a strict equality operator.
 *
 * @param prev - Previous props.
 * @param next - Next props.
 * @returns `true` when props are strictly equal.
 */
function checkPropsIdentity<P>(prev: P, next: P): boolean {
  return prev !== next;
}

let nextComponentId = 1;

/**
 * Creates a virtual DOM node factory function that produces nodes for components.
 *
 * @example
 *     const A = component<{ text: string }>(
 *       (props) => div().c(props.text),
 *     );
 *
 *     render(
 *       A({ text: "Hello" }),
 *     );
 *     // => <div>Hello</div>
 *
 * @param render - Render function.
 * @returns Factory function that produces component nodes.
 */
export function component(render: () => VNodeChildren): () => VNode<undefined>;
/**
 * Creates a virtual DOM node factory function that produces nodes for components.
 *
 * @example
 *     const A = component<{ text: string }>(
 *       (props) => div().c(props.text),
 *     );
 *
 *     render(
 *       A({ text: "Hello" }),
 *     );
 *     // => <div>Hello</div>
 *
 * @param render - Render function.
 * @returns Factory function that produces component nodes.
 */
export function component<P>(
  render: undefined extends P ? (props?: P) => VNodeChildren : (props: P) => VNodeChildren,
): undefined extends P ? (props?: P) => VNode<P> : (props: P) => VNode<P>;
/**
 * Creates a virtual DOM node factory function that produces nodes for components.
 *
 * @example
 *     const A = component<{ text: string }>(
 *       (props) => div().c(props.text),
 *     );
 *
 *     render(
 *       A({ text: "Hello" }),
 *     );
 *     // => <div>Hello</div>
 *
 * @param render - Render function.
 * @returns Factory function that produces component nodes.
 */
export function component<P>(render: (props: P) => VNodeChildren): (props: P) => VNode<P> {
  const flags = VNodeFlags.Component | (nextComponentId++ << VNodeFlags.UniqueIdOffset);
  const d = { render, shouldUpdate: checkPropsIdentity, blueprint: null };
  return (props: P) => new VNode<P>(flags, d, props, null, null, null);
}

/**
 * Creates a virtual DOM node factory function that produces nodes for components with custom `shouldUpdate` hook
 * function to prevent unnecessary updates.
 *
 * @example
 *     const A = withShouldUpdate<{ text: string }>(
 *       (prev, next) => prev.text !== next.text,
 *       component(
 *         (props) => h.div().c(props.text),
 *       ),
 *     );
 *
 * @param shouldUpdate - Function that performs an early check that prevent unnecessary updates.
 * @param factory - Component factory function.
 * @returns Factory that produces component nodes with custom `shouldUpdate` hook.
 */
export function withShouldUpdate<P>(
  shouldUpdate: (prev: P, next: P) => boolean,
  c: (props: P) => VNode<P>,
): (props: P) => VNode<P> {
  const flags = VNodeFlags.Component | (nextComponentId++ << VNodeFlags.UniqueIdOffset);
  const v = c(undefined as any)._tag as ComponentDescriptor<P>;
  const d = { render: v.render, shouldUpdate, blueprint: null };
  return (props: P) => new VNode<P>(flags, d, props, null, null, null);
}

/**
 * Create a context VNode.
 *
 * @param ctx Context.
 * @param children Children.
 * @returns Context VNode.
 */
export function context<T = {}>(ctx: T, children: VNodeChildren): VNode<T> {
  return new VNode<T>(
    VNodeFlags.UpdateContext,
    null,
    ctx,
    null,
    children,
    null,
  );
}

/**
 * Descriptor for connector objects.
 */
export interface ConnectDescriptor<T, P, C> {
  select: (prev: T | null, props: P, context: C) => T;
  render: (props: T) => VNodeChildren;
}

let nextConnectId = 1;

/**
 * Creates a virtual DOM node factory function that produces connector nodes.
 *
 * @example
 *     const Connector = connect<string, undefined, { result: string }>(
 *       (prev, props, context) => {
 *         const result = context.result;
 *
 *         return (prev !== null && prev === result) ? prev :
 *           result;
 *       },
 *       (text) => div().c(text),
 *     );
 *
 * @param select - Selector function.
 * @param render - Render function.
 * @returns Factory function that produces connector nodes.
 */
export function connect<T>(
  select: (prev: T | null) => T,
  render: (props: T) => VNodeChildren,
): () => VNode<undefined>;

/**
 * Creates a virtual DOM node factory function that produces connector nodes.
 *
 * @example
 *     const Connector = connect<string, undefined, { result: string }>(
 *       (prev, props, context) => {
 *         const result = context.result;
 *
 *         return (prev !== null && prev === result) ? prev :
 *           result;
 *       },
 *       (text) => div().c(text),
 *     );
 *
 * @param select - Selector function.
 * @param render - Render function.
 * @returns Factory function that produces connector nodes.
 */
export function connect<T, P>(
  select: undefined extends P ? (prev: T | null, props?: P) => T : (prev: T | null, props: P) => T,
  render: (props: T) => VNodeChildren,
): undefined extends P ? () => VNode<P> : (props: P) => VNode<P>;

/**
 * Creates a virtual DOM node factory function that produces connector nodes.
 *
 * @example
 *     const Connector = connect<string, undefined, { result: string }>(
 *       (prev, props, context) => {
 *         const result = context.result;
 *
 *         return (prev !== null && prev === result) ? prev :
 *           result;
 *       },
 *       (text) => div().c(text),
 *     );
 *
 * @param select - Selector function.
 * @param render - Render function.
 * @returns Factory function that produces connector nodes.
 */
export function connect<T, P, C>(
  select: (prev: T | null, props: P, context: C) => T,
  render: (props: T) => VNodeChildren,
): undefined extends P ? () => VNode<P> : (props: P) => VNode<P>;

/**
 * Creates a virtual DOM node factory function that produces connector nodes.
 *
 * @example
 *     const Connector = connect<string, undefined, { result: string }>(
 *       (prev, props, context) => {
 *         const result = context.result;
 *
 *         return (prev !== null && prev === result) ? prev :
 *           result;
 *       },
 *       (text) => div().c(text),
 *     );
 *
 * @param select - Selector function.
 * @param render - Render function.
 * @returns Factory function that produces connector nodes.
 */
export function connect<T, P, C>(
  select: (prev: T | null, props: P, context: C) => T,
  render: (props: T) => VNodeChildren,
): (props: P) => VNode<P> {
  const flags = VNodeFlags.Connect | (nextConnectId++ << VNodeFlags.UniqueIdOffset);
  const descriptor = { select, render };

  return function (props: P): VNode<P> {
    return new VNode<P>(
      flags,
      descriptor,
      props,
      null,
      null,
      null,
    );
  };
}
