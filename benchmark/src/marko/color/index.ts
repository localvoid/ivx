import { render } from "ivx";
import { MarkoColorApp } from "./ui";

/* tslint:disable:no-var-requires */
const Colors = require("../../../data/colors.json");

export function runMarkoColor() {
  return render(
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
