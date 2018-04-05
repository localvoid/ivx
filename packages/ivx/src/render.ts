import { VNodeFlags, VNode, VNodeChildren, ComponentDescriptor, ConnectDescriptor } from "./vnode";
import { BlueprintNodeFlags, BlueprintNode, BlueprintChildren } from "./blueprint";
import { escapeAttributeValue, escapeText } from "./escape";

/**
 * renderElementAttrs renders element attributes to string.
 *
 * @param attrs Element attributes.
 * @returns Element attributes in string format.
 */
function renderElementAttrs(attrs: { [key: string]: string }): string {
  let result = "";

  for (const key in attrs) {
    const value = attrs[key];
    if (typeof value !== "boolean") {
      if (value !== null) {
        result += ` ${key}="${escapeAttributeValue(value)}"`;
      }
    } else {
      if (value === true) {
        result += ` ${key}`;
      }
    }
  }

  return result;
}

/**
 * renderElementStyle renders element styles to string.
 *
 * @param style Element styles.
 * @returns Element styles in string format.
 */
function renderElementStyle(style: { [key: string]: any }): string {
  let result = ` style="`;
  let semicolon = false;
  for (const key in style) {
    const value = style[key];
    if (semicolon === true) {
      result += ";";
    } else {
      semicolon = true;
    }
    result += `${key}:${escapeAttributeValue(value)}`;
  }

  if (semicolon === false) {
    return "";
  }

  return `${result}"`;
}

/**
 * renderOpenElement renders open tag for an element.
 *
 * @param node Virtual DOM node.
 * @returns Open tag in a string format.
 */
export function renderOpenElement(node: VNode<any>): string {
  let result = node._tag as string;

  if (node._className !== null) {
    result += ` class="${node._className}"`;
  }
  if (node._props !== null) {
    result += renderElementAttrs(node._props);
  }
  if (node._style !== null) {
    result += renderElementStyle(node._style);
  }
  result += ">";

  return result;
}

function renderChildren(children: VNodeChildren, context: {}): string {
  if (typeof children === "object") {
    if (children === null) {
      return "";
    }
    if (Array.isArray(children)) {
      let childrenString = "";
      for (let i = 0; i < children.length; ++i) {
        childrenString += renderChildren(children[i], context);
      }
      return childrenString;
    }
    return renderVNode(children, context);
  }
  if (typeof children === "string") {
    return escapeText(children);
  }
  return children.toString();
}

/**
 * renderVNode renders Virtual DOM node to string format.
 *
 * @param node Virtual DOM node.
 * @param context Current context.
 * @returns Virtual DOM node in string format.
 */
function renderVNode(node: VNode<any>, context: {}): string {
  const flags = node._flags;
  if ((flags & (VNodeFlags.RawText | VNodeFlags.Element)) !== 0) {
    if ((flags & VNodeFlags.RawText) !== 0) {
      return node._children as string;
    } else {
      let result = renderOpenElement(node);
      if ((flags & VNodeFlags.VoidElement) === 0) {
        const children = node._children;
        if (children !== null) {
          let childrenString;
          if (typeof children === "string") {
            childrenString = escapeText(children);
          } else {
            childrenString = renderChildren(children, context);
          }
          if ((flags & VNodeFlags.NewLineEatingElement) !== 0) {
            if (childrenString.length > 0 && childrenString.charCodeAt(0) === 10) { // "\n"
              result += "\n";
            }
          }
          result += childrenString;
        }
        result += node._close;
      }
      return result;
    }
  } else {
    if ((flags & VNodeFlags.LinkedBlueprint) === 0) {
      let root;
      if ((flags & (VNodeFlags.Connect | VNodeFlags.UpdateContext)) !== 0) {
        if ((flags & VNodeFlags.Connect) !== 0) {
          const connect = node._tag as ConnectDescriptor<any, any, any>;
          const selectData = connect.select(null, node._props, context);
          root = connect.render(selectData);
        } else {
          context = Object.assign({}, context, node._props);
          root = node._children;
        }
      } else {
        root = (node._tag as ComponentDescriptor<any>).render(node._props);
      }
      return renderChildren(root, context);
    } else {
      return patch(node._className as BlueprintNode, node, context);
    }
  }
}

function patchDirtyCheck(children: BlueprintChildren, context: {}): string {
  if (children === null) {
    return "";
  }
  if (Array.isArray(children)) {
    let result = "";
    for (let i = 0; i < children.length; i++) {
      result += patchDirtyCheck(children[i], context);
    }
    return result;
  }

  const flags = children.flags;
  if ((flags & (BlueprintNodeFlags.Number | BlueprintNodeFlags.String)) !== 0) {
    return children.string;
  }

  const src = children.src as VNode;
  const srcFlags = src._flags;
  if ((srcFlags & (VNodeFlags.RawText | VNodeFlags.Element)) !== 0) {
    if ((srcFlags & (VNodeFlags.RawText | VNodeFlags.VoidElement)) !== 0) {
      return children.string;
    } else {
      return children.string + patchDirtyCheck(children.children, context) + src._close;
    }
  } else {
    if ((srcFlags & (VNodeFlags.Connect | VNodeFlags.Component)) !== 0) {
      if ((srcFlags & VNodeFlags.Connect) !== 0) {
        const connect = src._tag as ConnectDescriptor<any, any, any>;
        const prevData = children.data;
        const nextData = connect.select(prevData, src._props, context);
        if (prevData !== nextData) {
          return patchChildren(children.children, connect.render(nextData), context);
        }
      }
      if ((flags & BlueprintNodeFlags.DeepConnect) === 0) {
        return children.string;
      }
    } else { // UpdateContext
      context = Object.assign({}, context, src._props);
    }
    return patchDirtyCheck(children.children, context);
  }
}

function patchChildren(a: BlueprintChildren, b: VNodeChildren, context: {}): string {
  if (b === null) {
    return "";
  }
  if (a === null) {
    return renderChildren(b, context);
  }
  if (Array.isArray(a)) {
    if (Array.isArray(b) && (a.length === b.length)) {
      let result = "";
      for (let i = 0; i < a.length; i++) {
        result += patchChildren(a[i], b[i], context);
      }
      return result;
    }
    return renderChildren(b, context);
  }
  if (Array.isArray(b)) {
    return renderChildren(b, context);
  }

  return patch(a, b, context);
}

/**
 * patch performs a diff/patch on blueprint node.
 *
 * @param a Blueprint node.
 * @param b Virtual DOM node.
 * @param context Current context.
 * @returns Patched string.
 */
function patch(a: BlueprintNode, b: VNode<any> | string | number, context: {}): string {
  const bpFlags = a.flags;
  const aSrc = a.src;
  if (aSrc === b) {
    if ((bpFlags & BlueprintNodeFlags.DeepConnect) === 0) {
      return a.string;
    }
    return patchDirtyCheck(a.children, context);
  }

  if ((bpFlags & BlueprintNodeFlags.VNode) !== 0) {
    if (typeof b === "object") {
      const aVNode = aSrc as VNode<any>;
      const aFlags = aVNode._flags;
      const bFlags = b._flags;
      if (((aFlags ^ bFlags) & VNodeFlags.Syncable) === 0) {
        if ((aFlags & (VNodeFlags.RawText | VNodeFlags.Element)) !== 0) {
          if ((aFlags & VNodeFlags.RawText) !== 0) {
            return b._children as string;
          } else {
            const openString = (
              (aVNode._props === b._props) &&
              (aVNode._style === b._style) &&
              (aVNode._className === b._className)
            ) ? a.string
              : renderOpenElement(b);

            if ((aFlags & VNodeFlags.VoidElement) === 0) {
              return openString + patchChildren(a.children, b._children, context) + aVNode._close;
            }
            return openString;
          }
        } else {
          if ((bFlags & (VNodeFlags.Component | VNodeFlags.Connect)) !== 0) {
            const nextProps = b._props;
            if ((bFlags & VNodeFlags.Connect) !== 0) {
              const connect = b._tag as ConnectDescriptor<any, any, any>;
              const prevData = a.data;
              const nextData = connect.select(prevData, nextProps, context);
              if (prevData !== nextData) {
                return patchChildren(a.children, connect.render(nextData), context);
              }
            } else { // Component
              const component = b._tag as ComponentDescriptor;
              if (component.shouldUpdate(aVNode._props, nextProps) === true) {
                return patchChildren(a.children, component.render(nextProps), context);
              }
            }
            if ((bpFlags & BlueprintNodeFlags.DeepConnect) === 0) {
              return a.string;
            }
            return patchDirtyCheck(a.children, context);
          } else { // UpdateContext
            return patchChildren(a.children, b._children, Object.assign({}, context, b._props));
          }
        }
      } else {
        return renderVNode(b, context);
      }
    }
  }

  return renderChildren(b, context);
}

/**
 * render renders Virtual DOM to string.
 *
 * @param node Virtual DOM.
 * @param context Current context.
 * @returns Virtual DOM in string format.
 */
export function render(
  node: VNode<any>,
  context: {} = {},
): string {
  return renderVNode(node, context);
}

/**
 * renderWithBlueprint renders Virtual DOM to string by diffing with specified blueprint.
 *
 * @param node Virtual DOM.
 * @param blueprint Perform diff/patch on blueprint.
 * @param context Current context.
 * @returns Virtual DOM in string format.
 */
export function renderWithBlueprint(
  node: VNode<any>,
  blueprint: BlueprintNode,
  context: {} = {},
): string {
  return patch(blueprint, node, context);
}
