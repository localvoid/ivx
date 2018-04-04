import { renderToString } from "ivx";
import { MarkoColorApp } from "./ui";

/* tslint:disable:no-var-requires */
const Colors = require("./colors.json");

export function runMarkoColor() {
  return renderToString(
    MarkoColorApp(),
    {
      colors: Colors,
      selectedColor: {
        id: 0,
        name: Colors[0].name,
      },
    },
  );
}
