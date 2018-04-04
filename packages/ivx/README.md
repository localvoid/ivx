`ivx` package provides a renderer for component-oriented HTML.

## Render to string

```ts
function renderToString(
  node: VNode<any>,
  context: Context = {},
  blueprint?: BlueprintNode,
): string;
```

`renderToString()` function renders Virtual DOM into string. When `blueprint` parameter is specified, instead of
rendering string from scratch, it will apply diff/patch algorithm on blueprint.

## Blueprints

```ts
function createBlueprint(
  node: VNode<any>,
  context: Context = {},
  blueprint?: BlueprintNode,
): BlueprintNode;
```

`createBlueprint()` function creates a blueprint that can be used to optimize rendering. When `blueprint`
parameter is specified, it will try to reuse existing blueprint nodes from the specified blueprint to reduce memory
usage.
