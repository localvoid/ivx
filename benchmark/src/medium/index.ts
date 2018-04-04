import { createBlueprint, renderToString } from "ivx";
import { MediumApp } from "./ui";

const MediumBlueprint = createBlueprint(
  MediumApp(),
  {
    title: "",
    saved: false,
    content: "",
  },
);

export function runMedium() {
  return renderToString(
    MediumApp(),
    {
      title: "Draft",
      saved: true,
      content: "Hello World",
    },
    MediumBlueprint,
  );
}
