import { VNodeFlags, VNode } from "./vnode";

/**
 * Create an update context VNode.
 *
 * @param ctx Context.
 * @param child Child VNode.
 * @returns VNodeBuilder object.
 */
export function context<T = {}>(ctx: T, child: VNode<any>): VNode<T> {
  return new VNode<T>(
    VNodeFlags.UpdateContext,
    null,
    ctx,
    null,
    child,
    null,
  );
}

export function connect<T, C extends {}>(
  render: (props: T) => VNode<any>,
  select: (prev: T | null, props: undefined, context: C) => T,
): () => VNode<null>;
export function connect<T, P, C extends {}>(
  render: (props: T) => VNode<any>,
  select: (prev: T | null, props: P, context: C) => T,
): (props: P) => VNode<P>;
export function connect<T>(
  render: (props: T) => VNode<any>,
  select: (prev: T | null, props: undefined) => T,
): () => VNode<null>;
export function connect<T, P>(
  render: (props: T) => VNode<any>,
  select: (prev: T | null, props: P) => T,
): (props: P) => VNode<P>;
export function connect<T>(
  render: (props: T) => VNode<any>,
  select: (prev: T | null) => T,
): () => VNode<null>;
export function connect<T, P, C extends {}>(
  render: (props: T) => VNode<any>,
  select: (prev: T | null, props: P, context: C) => T,
): (props: P) => VNode<P> {
  const descriptor = { select, render };
  return function (props: P): VNode<P> {
    return new VNode<P>(
      VNodeFlags.Connect,
      descriptor,
      props,
      null,
      null,
      null,
    );
  };
}
