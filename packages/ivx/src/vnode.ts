import { BlueprintNode } from "./blueprint";
import { flattenString } from "./flatten";

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

export interface ElementOptions {
  readonly void?: boolean;
}

let nextElementId = 1;

export function element<T>(tagName: string, options?: ElementOptions): () => VNode<T> {
  let flags = VNodeFlags.Element | (nextElementId++ << VNodeFlags.UniqueIdOffset);
  const openString = flattenString(`<${tagName}`);
  let voidElement = false;
  if (options !== void 0) {
    if (options.void === true) {
      flags |= VNodeFlags.VoidElement;
      voidElement = true;
    }
  }
  const closeString = voidElement ? "" : flattenString(`</${tagName}>`);

  return function (className?: string) {
    return new VNode<T>(
      flags,
      openString,
      null,
      className === void 0 ? null : className,
      null,
      closeString,
    );
  };
}

/**
 * Component descriptor.
 */
export interface ComponentDescriptor<P = void> {
  render(props: P): VNodeChildren;
  shouldUpdate(prevProps: P, nextProps: P): boolean;
}

export interface ComponentOptions<P> {
  shouldUpdate?(prevProps: P, nextProps: P): boolean;
}

function checkPropsIdentity(prevProps: any, nextProps: any): boolean {
  return prevProps !== nextProps;
}

let nextComponentId = 1;

export function component(render: () => VNodeChildren, options?: ComponentOptions<null>): () => VNode<null>;
export function component<P>(
  render: (props: P) => VNodeChildren,
  options?: ComponentOptions<P>,
): (props: P) => VNode<P>;
export function component<P>(
  render: (props?: P) => VNodeChildren,
  options?: ComponentOptions<P>,
): (props: P) => VNode<P> {
  let shouldUpdate = checkPropsIdentity;
  if (options !== void 0) {
    if (options.shouldUpdate !== void 0) {
      shouldUpdate = options.shouldUpdate;
    }
  }

  const flags = VNodeFlags.Component | (nextComponentId++ << VNodeFlags.UniqueIdOffset);
  const d = { render, shouldUpdate, blueprint: null };
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

export interface ConnectDescriptor<T, P, C extends {}> {
  select: (prev: T | null, props: P, context: C) => T;
  render: (props: T) => VNodeChildren;
}

let nextConnectId = 1;

export function connect<T, C extends {}>(
  select: (prev: T | null, props: undefined, context: C) => T,
  render: (props: T) => VNodeChildren,
): () => VNode<null>;
export function connect<T, P, C extends {}>(
  select: (prev: T | null, props: P, context: C) => T,
  render: (props: T) => VNodeChildren,
): (props: P) => VNode<P>;
/**
 * connect creates a factory function for connector nodes.
 *
 * @param select Data selector.
 * @param render Render function.
 * @returns factory function for connector nodes.
 */
export function connect<T, P, C extends {}>(
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
