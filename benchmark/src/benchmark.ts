import * as benchmark from "benchmark";
import { runMarkoSearch } from "./marko/search";
import { runMarkoColor } from "./marko/color";
import { runMedium } from "./medium";
import { runRax } from "./rax";

const suite = new benchmark.Suite();

suite.add("marko:search", function () {
  runMarkoSearch();
});

suite.add("marko:color", function () {
  runMarkoColor();
});

suite.add("medium", function () {
  runMedium();
});

suite.add("rax", function () {
  runRax();
});

suite.on("complete", function (this: any) {
  for (let i = 0; i < this.length; i++) {
    console.log(this[i].toString());
  }
});

suite.run();
