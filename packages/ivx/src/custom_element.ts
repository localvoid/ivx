import { VNodeFlags, VNode } from "./vnode";
import { flattenString } from "./flatten";
import { renderElementAttrs } from "./render";

/**
 * Options for an {@link element} function.
 */
export interface ElementOptions {
  /**
   * Void element. Element can't contain any children.
   */
  readonly void?: boolean;
  /**
   * Prerendered attributes.
   */
  readonly attrs?: {};
}

let nextElementId = 1;

/**
 * Creates a factory function for a custom element.
 *
 * @param tagName - Element tag name
 * @param options - {@link ElementOptions}
 * @returns Factory function for a custom element
 */
export function element<T>(tagName: string, options?: ElementOptions): (className?: string) => VNode<T> {
  let flags = VNodeFlags.Element | (nextElementId++ << VNodeFlags.UniqueIdOffset);
  let openString = `<${tagName}`;
  let voidElement = false;
  if (options !== void 0) {
    if (options.void === true) {
      flags |= VNodeFlags.VoidElement;
      voidElement = true;
    }
    if (options.attrs !== void 0) {
      const attrs = renderElementAttrs(options.attrs);
      if (attrs !== "") {
        openString += " " + attrs;
      }
    }
  }
  openString = flattenString(openString);
  const closeString = voidElement ? "" : flattenString(`</${tagName}>`);

  return (className?: string, attrs?: T, css?: {}) => {
    return new VNode<T>(
      flags,
      openString,
      attrs,
      className,
      null,
      css,
      closeString,
    );
  };
}
