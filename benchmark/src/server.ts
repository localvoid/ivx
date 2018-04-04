import * as express from "express";
import { flattenString } from "ivx";
import { runMarkoSearch } from "./marko/search";
import { runMarkoColor } from "./marko/color";
import { runRax } from "./rax";
import { runMedium } from "./medium";

const app = express();
app.get("/marko-search", (req, res) => {
  res.send(flattenString(runMarkoSearch()));
});
app.get("/marko-color", (req, res) => {
  res.send(flattenString(runMarkoColor()));
});
app.get("/rax", (req, res) => {
  res.send(flattenString(runRax()));
});
app.get("/medium", (req, res) => {
  res.send(flattenString(runMedium()));
});
app.listen(3000, function () {
  console.log("SSR benchmark server is running on port 3000");
});
