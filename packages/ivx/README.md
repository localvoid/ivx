`ivx` package provides a string renderer for component-oriented HTML.

## Features

- Immutable Virtual DOM Nodes
- Contexts
- Connectors for sideways data loading
- Prerendered blueprints

## Render to string

```ts
function renderToString(
  node: VNode<any>,
  context: Context = {},
  blueprint?: BlueprintNode,
): string;
```

`renderToString()` function renders Virtual DOM into a string. When `blueprint` parameter is specified, instead of
rendering string from scratch, it will apply diff/patch algorithm on blueprint.

## Blueprints

```ts
function createBlueprint(
  node: VNode<any>,
  context: {} = {},
  blueprint?: BlueprintNode,
): BlueprintNode;
```

`createBlueprint()` function creates a blueprint that can be used to optimize rendering. When `blueprint`
parameter is specified, it will try to reuse existing blueprint nodes from the specified blueprint to reduce memory
usage.

### Blueprints linked to Components

```ts
function componentWithBlueprint<P>(
  node: VNode<P>,
  context?: {},
): (props: P) => VNode<P>;
```

Example:

```ts
import { component, componentWithBlueprint } from "ivx";
import * as h from "ivx-html";

const Button = component((title: string) => h.div("Button").c(title));
const GoButton = componentWithBlueprint(Button("Go"));

renderToString(GoButton("Go"));
// => <div class="Button">Go</div>
```
