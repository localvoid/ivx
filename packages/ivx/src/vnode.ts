import { BlueprintNode } from "./blueprint";
import { Component } from "./component";
import { ConnectDescriptor } from "./connect_descriptor";

const _Array = Array;

/**
 * VNode flags.
 */
export const enum VNodeFlags {
  /**
   * VNode represents a Text node.
   */
  Text = 1,
  /**
   * VNode represents an Element node.
   */
  Element = 1 << 1,
  /**
   * VNode represents a simple "function" component.
   *
   * It can also represent specialized components like "UpdateContext" component.
   */
  Component = 1 << 2,
  /**
   * Children property contains a child with a basic type (number/string/boolean).
   */
  ChildrenBasic = 1 << 3,
  /**
   * Children property contains a child VNode.
   */
  ChildrenVNode = 1 << 4,
  /**
   * Children property contains an Array type.
   */
  ChildrenArray = 1 << 5,
  /**
   * Children property contains unsafe HTML.
   */
  UnsafeHTML = 1 << 6,
  /**
   * VNode is using a non-artificial key.
   */
  Key = 1 << 7,
  /**
   * VNode represents an HTMLInputElement element.
   */
  InputElement = 1 << 8,
  /**
   * VNode represents a HTMLTextAreaElement.
   */
  TextAreaElement = 1 << 9,
  /**
   * VNode represents a HTMLButtonElement.
   */
  ButtonElement = 1 << 10,
  /**
   * VNode represents a HTMLMediaElement.
   */
  MediaElement = 1 << 11,
  /**
   * VNode is an SVGElement.
   */
  SvgElement = 1 << 12,
  /**
   * Specialized VNode with connect functionality.
   */
  Connect = 1 << 13,
  /**
   * Specialized VNode with an update context functionality.
   */
  UpdateContext = 1 << 14,
  /**
   * VNode element cannot contain any children.
   */
  VoidElement = 1 << 15,
  /**
   * http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody
   * http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre
   */
  NewLineEatingElement = 1 << 16,
  /**
   * Component VNode has a linked blueprint.
   */
  LinkedBlueprint = 1 << 17,

  // Blueprint specific flags:
  /**
   * Blueprint Node contains connect node.
   */
  DeepConnect = 1 << 19,
  BlueprintFrozen = 1 << 20,

  /**
   * Unique ID.
   */
  ElementIdMask = 255 << 21,
  ElementIdOffset = 21,

  /**
   * Flags that should match to be compatible for syncing.
   */
  Syncable = Text
  | Element
  | Component
  // | Key (Keys shouldn't be checked for blueprint nodes)
  | InputElement
  | TextAreaElement
  | ButtonElement
  | MediaElement
  | SvgElement
  | Connect
  | UpdateContext
  | VoidElement
  | ElementIdMask,
}

/**
 * Virtual DOM Node.
 *
 *     const vnode = html.div("div-class-name")
 *         .props({ id: "div-id" })
 *         .events(Events.onClick((e) => console.log("click event", e)))
 *         .children("Hello");
 *
 * @final
 */
export class VNode<P = null> {
  /**
   * Flags, see `VNodeFlags` for details.
   */
  _flags: VNodeFlags;
  /**
   * Children property has a dynamic type that depends on the node kind.
   *
   * Element Nodes should contain children virtual nodes in a flat array, singular virtual node or a simple text.
   *
   * Input Element Nodes should contain input value (value or checked).
   *
   * Components should contain virtual root nodes.
   */
  _children: VNode<any>[] | VNode<any> | string | number | boolean | null;
  /**
   * Tag property contains details about the type of the element.
   *
   * Simple elements has a string type values, components can be a simple functions, constructor, or special
   * descriptors for nodes that change syncing algorithm behavior.
   */
  _tag: string | Component<any> | ConnectDescriptor<any, any, any> | null;
  /**
   * Children syncing algorithm is using key property to find the same node in the previous children array. Key
   * should be unique among its siblings.
   */
  _key: any;
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
    tag: string | Component<P> | ConnectDescriptor<any, any, any> | null,
    props: P | null,
    className: BlueprintNode | string | null,
    children: VNode<any>[] | VNode<any> | string | number | boolean | null,
    close: string | null,
  ) {
    this._flags = flags;
    this._children = children;
    this._tag = tag;
    this._key = 0;
    this._props = props;
    this._style = null;
    this._className = className;
    this._close = close;
  }

  /**
   * k assigns a key.
   *
   * Children reconciliation algorithm is using key property to find the same node in the previous children array. Key
   * should be unique among its siblings.
   *
   * @param key Any object that should be unique among its siblings.
   * @returns VNode
   */
  k(key: any): this {
    this._flags |= VNodeFlags.Key;
    this._key = key;
    return this;
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
   *   values. It will automatically normalize recursive lists by flattening, filtering out null values and replacing
   *   strings with text nodes.
   * @returns VNode
   */
  c(...children: Array<VNode<any>[] | VNode<any> | string | number | null>): this;
  c(): VNode<P> {
    const children = arguments;
    let f = 0;
    let r = null;
    if (children.length === 1) {
      r = children[0] as VNode<any>[] | VNode<any> | string | number | null;
      if (typeof r === "object") {
        if (r !== null) {
          if (r.constructor === _Array) {
            r = r as VNode<any>[];
            if (r.length > 1) {
              f = VNodeFlags.ChildrenArray;
            } else if (r.length === 1) {
              f = VNodeFlags.ChildrenVNode;
              r = r[0];
            } else {
              r = null;
            }
          } else {
            f = VNodeFlags.ChildrenVNode;
          }
        }
      } else {
        f = VNodeFlags.ChildrenBasic;
      }
    } else {
      let i;
      let j = 0;
      let k = 0;
      let c;
      for (i = 0; i < children.length; ++i) {
        c = children[i];
        if (c !== null) {
          if (c.constructor === _Array) {
            if (c.length > 0) {
              k += c.length;
              ++j;
              r = c;
            }
          } else {
            ++k;
            ++j;
            r = c;
          }
        }
      }
      if (j > 0) {
        if ((j | k) === 1) {
          if (typeof r === "object") {
            if (r.constructor === _Array) {
              if (k > 1) {
                f = VNodeFlags.ChildrenArray;
              } else {
                f = VNodeFlags.ChildrenVNode;
                r = r[0];
              }
            } else {
              f = VNodeFlags.ChildrenVNode;
            }
          } else {
            f = VNodeFlags.ChildrenBasic;
          }
        } else {
          f = VNodeFlags.ChildrenArray;
          r = new Array(k);
          k = 0;
          for (i = 0; i < children.length; ++i) {
            c = children[i];
            if (typeof c === "object") {
              if (c !== null) {
                if (c.constructor === _Array) {
                  for (j = 0; j < c.length; ++j) {
                    r[k++] = c[j] as VNode<any>;
                  }
                } else {
                  r[k++] = c as VNode<any>;
                  if ((c._flags & VNodeFlags.Key) === 0) {
                    c._key = i;
                  }
                }
              }
            } else {
              c = r[k++] = new VNode<null>(VNodeFlags.Text, null, null, null, c as string | number, null);
              c._key = i;
            }
          }
        }
      }
    }
    this._flags |= f;
    this._children = r;
    return this;
  }

  /**
   * unsafeHTML assigns children as an innerHTML string. It is potentially vulnerable to XSS attacks.
   *
   * @param html innerHTML in a string format.
   * @returns VNode
   */
  unsafeHTML(html: string | null): this {
    this._flags |= VNodeFlags.UnsafeHTML;
    this._children = html;
    return this;
  }
}

export type Children = Array<VNode<any>[] | VNode<any> | string | number | null>;

export function vNodeEqualKeys(a: VNode, b: VNode): boolean {
  return a._key === b._key && ((a._flags ^ b._flags) & VNodeFlags.Key) === 0;
}

/**
 * isTextVNode returns `true` when VNode is a Text node.
 *
 * @param node VNode.
 * @returns `true` when VNode is a Text node.
 */
export function isTextVNode(node: VNode<any>): boolean {
  return (node._flags & VNodeFlags.Text) !== 0;
}

/**
 * isElementVNode returns `true` when VNode is an Element node.
 *
 * @param node VNode.
 * @returns `true` when VNode is an Element node.
 */
export function isElementVNode(node: VNode<any>): boolean {
  return (node._flags & VNodeFlags.Element) !== 0;
}

/**
 * isComponentVNode returns `true` when VNode is a Component node.
 *
 * @param node VNode.
 * @returns `true` when VNode is a Component node.
 */
export function isComponentVNode(node: VNode<any>): boolean {
  return (node._flags & VNodeFlags.Component) !== 0;
}

/**
 * disableDirtyChecking disables dirty checking for all descendants.
 *
 * @param node VNode.
 * @returns VNode.
 */
export function disableDirtyChecking<N extends VNode<any>>(node: N): N {
  return node;
}
