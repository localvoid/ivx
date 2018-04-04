import { VNode, VNodeFlags } from "./vnode";

/**
 * Component descriptor.
 */
export interface Component<P = void> {
  render(props: P): VNode<any>;
  isPropsChanged(oldProps: P, newProps: P): boolean;
}

export interface ComponentOptions<P> {
  isPropsChanged?(oldProps: P, newProps: P): boolean;
}

function checkPropsIdentity(oldProps: any, newProps: any): boolean {
  return oldProps !== newProps;
}

export function component(render: () => VNode<any>, options?: ComponentOptions<null>): () => VNode<null>;
export function component<P>(render: (props: P) => VNode<any>, options?: ComponentOptions<P>): (props: P) => VNode<P>;
export function component<P>(render: (props?: P) => VNode<any>, options?: ComponentOptions<P>): (props: P) => VNode<P> {
  let isPropsChanged = checkPropsIdentity;
  if (options !== void 0) {
    if (options.isPropsChanged !== void 0) {
      isPropsChanged = options.isPropsChanged;
    }
  }

  const d = {
    render,
    isPropsChanged,
    blueprint: null,
  };
  return (props: P) => new VNode<P>(
    VNodeFlags.Component,
    d,
    props,
    null,
    null,
    null,
  );
}
