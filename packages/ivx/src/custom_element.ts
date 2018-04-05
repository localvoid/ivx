import { VNodeFlags, VNode } from "./vnode";
import { flattenString } from "./flatten";
import { renderElementAttrs } from "./render";

export interface ElementOptions {
  readonly void?: boolean;
  readonly attrs?: {};
}

let nextElementId = 1;

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
