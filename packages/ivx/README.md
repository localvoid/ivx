Component-oriented HTML string renderer.

## Features

- Immutable Virtual DOM Nodes
- Contexts
- Connectors for sideways data loading
- Diff/Patch Renderer
- Basic XSS protection

## Basic Example

```js
import { render } from "ivx";
import * as h from "ivx-html";

function Message(text) {
  return h.p().c(text);
}

function Main(text) {
  return h.div("main").c(
    Message(text),
  );
}

render(Main("Hello World"));
// => <div class="main"><p>Hello World</p></div>
```

## API
### Virtual DOM
#### HTML/SVG Elements

HTML and SVG elements are created with predefined factory functions.

- `ivx-html` package provides factories for HTML elements.
- `ivx-svg` package proived factories for SVG elements.

```ts
interface VNode {
  a(attrs: {} | null): this;
  s(style: {} | null): this;
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
interface ComponentOptions<P> {
  shouldUpdate?(prevProps: P, nextProps: P): boolean;
}
function component(render: () => VNodeChildren, options?: ComponentOptions<null>): () => VNode<null>;
function component<P>(render: (props: P) => VNodeChildren, options?: ComponentOptions<P>): (props: P) => VNode<P>;
```

`component()` function creates a factory function for components.

#### Context and Connectors

```ts
function context<T = {}>(ctx: T, children: VNodeChildren): VNode<T>;
function connect<T, C extends {}>(
  select: (prev: T | null, props: undefined, context: C) => T,
  render: (props: T) => VNodeChildren,
): () => VNode<null>;
function connect<T, P, C extends {}>(
  select: (prev: T | null, props: P, context: C) => T,
  render: (props: T) => VNodeChildren,
): (props: P) => VNode<P>;
```

Connector is a specialized `VNode` that have access to the current context. `connect()` function creates a factory
function for connectors.

`context()` function creates a `VNode` that will modify current context for its `children`.

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
import * as h from "ivx-html";

const Button = component((title: string) => h.div("Button").c(title));
const PrerenderedButton = componentWithBlueprint(Button(""));

render(PrerenderedButton("Go"));
// => <div class="Button">Go</div>
```
Component-oriented HTML string renderer.

## Features

- Immutable Virtual DOM Nodes
- Contexts
- Connectors for sideways data loading
- Diff/Patch Renderer
- Basic XSS protection

## Basic Example

```js
import { render } from "ivx";
import * as h from "ivx-html";

function Message(text) {
  return h.p().c(text);
}

function Main(text) {
  return h.div("main").c(
    Message(text),
  );
}

render(Main("Hello World"));
// => <div class="main"><p>Hello World</p></div>
```

## API
### Virtual DOM
#### HTML/SVG Elements

HTML and SVG elements are created with predefined factory functions.

- `ivx-html` package provides factories for HTML elements.
- `ivx-svg` package proived factories for SVG elements.

```ts
interface VNode {
  a(attrs: {} | null): this;
  s(style: {} | null): this;
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
interface ComponentOptions<P> {
  shouldUpdate?(prevProps: P, nextProps: P): boolean;
}
function component(render: () => VNodeChildren, options?: ComponentOptions<null>): () => VNode<null>;
function component<P>(render: (props: P) => VNodeChildren, options?: ComponentOptions<P>): (props: P) => VNode<P>;
```

`component()` function creates a factory function for components.

#### Context and Connectors

```ts
function context<T = {}>(ctx: T, children: VNodeChildren): VNode<T>;
function connect<T, C extends {}>(
  select: (prev: T | null, props: undefined, context: C) => T,
  render: (props: T) => VNodeChildren,
): () => VNode<null>;
function connect<T, P, C extends {}>(
  select: (prev: T | null, props: P, context: C) => T,
  render: (props: T) => VNodeChildren,
): (props: P) => VNode<P>;
```

Connector is a specialized `VNode` that have access to the current context. `connect()` function creates a factory
function for connectors.

`context()` function creates a `VNode` that will modify current context for its `children`.

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
import * as h from "ivx-html";

const Button = component((title: string) => h.div("Button").c(title));
const PrerenderedButton = componentWithBlueprint(Button(""));

render(PrerenderedButton("Go"));
// => <div class="Button">Go</div>
```
