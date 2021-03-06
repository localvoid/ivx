# [ivx](https://github.com/localvoid/ivx) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/localvoid/ivx/blob/master/LICENSE) [![codecov](https://codecov.io/gh/localvoid/ivx/branch/master/graph/badge.svg)](https://codecov.io/gh/localvoid/ivx) [![CircleCI Status](https://circleci.com/gh/localvoid/ivx.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/localvoid/ivx) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/localvoid/ivx)

ivx is an extremely fast functional HTML string renderer.

|packages|NPM version                                                                                        |
|--------|---------------------------------------------------------------------------------------------------|
|ivx     |[![npm version](https://img.shields.io/npm/v/ivx.svg)](https://www.npmjs.com/package/ivx)          |
|ivx-html|[![npm version](https://img.shields.io/npm/v/ivx-html.svg)](https://www.npmjs.com/package/ivx-html)|
|ivx-svg |[![npm version](https://img.shields.io/npm/v/ivx-svg.svg)](https://www.npmjs.com/package/ivx-svg)  |

## Features

- Immutable Virtual DOM Nodes
- Implicit data propagation with contexts
- Connectors for sideways data loading
- Diff/Patch renderer

## Basic Example

```js
import { render } from "ivx";
import { div } from "ivx-html";

render(div("message").c("Hello World!"));
// => <div class="message">Hello World</div>
```

## API

### Virtual DOM

#### HTML/SVG Elements

HTML and SVG elements are created with predefined factory functions.

- `ivx-html` package provides factories for HTML elements.
- `ivx-svg` package proived factories for SVG elements.

```ts
interface VNode {
  a(attrs: { [key: string]: any } | null): this;
  s(style: { [key: string]: any } | null): this;
  c(children: VNodeChildren): this;
}

type VNodeChildren = VNodeChildrenArray | VNode<any> | string | number | null;
interface VNodeChildrenArray extends Array<VNodeChildren> { }
```

HTML and SVG elements have three methods:

`a()` method is used to assign attributes.

`s()` method is used to assign styles.

`c()` method is used to assign children nodes.

#### Raw Text

Raw text is used to inject any text into the document without any escaping.

```ts
function raw(text: string): VNode<null>;
```

#### Custom Elements

```ts
interface ElementOptions {
  readonly void?: boolean;
  readonly attrs?: {};
}
function element<T>(tagName: string, options?: ElementOptions): (className?: string) => VNode<T>;
```

`element()` function creates a factory function for custom elements.

#### Components

```ts
function component(render: () => VNodeChildren): () => VNode<undefined>;
function component<P>(
  render: undefined extends P ? (props?: P) => VNodeChildren : (props: P) => VNodeChildren,
): undefined extends P ? (props?: P) => VNode<P> : (props: P) => VNode<P>;
```

`component()` function creates a factory function for components.

```ts
const A = component<{ text: string }>(
  (props) => div().c(props.text),
);

render(
  A({ text: "Hello" }),
);
// => <div>Hello</div>
```

##### Should Update hint

```ts
function withShouldUpdate<P>(
  shouldUpdate: (prev: P, next: P) => boolean,
  c: (props: P) => VNode<P>,
): (props: P) => VNode<P>;
```

`withShouldUpdate()` function creates a factory function for components with should update hint.

```ts
const A = withShouldUpdate<{ text: string }>(
  (prev, next) => prev.text !== next.text,
  component(
    (props) => h.div().c(props.text),
  ),
);
```

#### Context and Connectors

```ts
function context<T>(ctx: T, children: VNodeChildren): VNode<T>;

function connect<T>(
  select: (prev: T | null) => T,
  render: (props: T) => VNodeChildren,
): () => VNode<undefined>;
function connect<T, P>(
  select: undefined extends P ? (prev: T | null, props?: P) => T : (prev: T | null, props: P) => T,
  render: (props: T) => VNodeChildren,
): undefined extends P ? () => VNode<P> : (props: P) => VNode<P>;
function connect<T, P, C>(
  select: (prev: T | null, props: P, context: C) => T,
  render: (props: T) => VNodeChildren,
): undefined extends P ? () => VNode<P> : (props: P) => VNode<P>;
```

Connector is a specialized `VNode` that have access to the current context. `connect()` function creates a factory
function for connectors.

`context()` function creates a `VNode` that will modify current context for its `children`.

```ts
const Connector = connect<string, undefined, { result: string }>(
  (prev, props, context) => {
    const result = context.result;

    return (prev !== null && prev === result) ? prev :
      result;
  },
  (text) => div().c(text),
);

render(
  context({ result: "Hello World!" },
    Connector(),
  ),
);
// => <div>Hello World!</div>
```

### Render to String

```ts
function render(
  node: VNode<any>,
  context: {} = {},
): string;
```

`render()` function renders Virtual DOM into a string.

### Blueprints

```ts
function createBlueprint(
  node: VNode<any>,
  context: {} = {},
): BlueprintNode;
```

`createBlueprint()` function creates a blueprint that can be used to optimize rendering.

```ts
function renderWithBlueprint(
  node: VNode<any>,
  blueprint: BlueprintNode,
  context: {} = {},
): string;
```

`renderWithBlueprint()` function renders Virtual DOM into a string. When `blueprint` parameter is specified, instead of
rendering string from scratch, it will apply diff/patch algorithm on blueprint.

#### Blueprints linked to Components

```ts
function componentWithBlueprint<P>(
  node: VNode<P>,
  context?: {},
): (props: P) => VNodeChildren;
```

Example:

```ts
import { component, componentWithBlueprint } from "ivx";
import { div } from "ivx-html";

const Button = component((title: string) => div("Button").c(title));
const PrerenderedButton = componentWithBlueprint(Button(""));

render(PrerenderedButton("Go"));
// => <div class="Button">Go</div>
```
