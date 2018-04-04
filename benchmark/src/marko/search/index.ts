import { renderToString, createBlueprint } from "ivx";
import { MarkoSearchApp } from "./ui";

/* tslint:disable:no-var-requires */
const Data = require("./data.json");

function performSearch(input: any): any {
  const pIndex = input.pageIndex || 0;
  const pageSize = 100;
  const start = pIndex * pageSize;

  const items = [];

  for (let i = start; i < start + pageSize; i++) {
    items.push(Data.items[i % Data.items.length]);
  }

  return {
    pageIndex: pIndex,
    totalMatches: Data.items.length,
    items: items,
  };
}

let pageIndex = 0;

function getNextSearchResults(): any {
  return performSearch({ pageIndex: pageIndex++ });
}

const MarkoSearchBlueprint = createBlueprint(MarkoSearchApp({ items: [] }));

export function runMarkoSearch() {
  return renderToString(
    MarkoSearchApp(getNextSearchResults()),
    undefined,
    MarkoSearchBlueprint,
  );
}
