import { createBlueprint, renderWithBlueprint } from "ivx";
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
  return renderWithBlueprint(
    MediumApp(),
    MediumBlueprint,
    {
      title: "Draft",
      saved: true,
      content: "Hello World",
    },
  );
}
