import { VNode } from "./vnode";

export interface ConnectDescriptor<T, P, C extends {}> {
  select: (prev: T | null, props: P, context: C) => T;
  render: (props: T) => VNode<any>;
}
