import { runMarkoSearch } from "./marko/search";
import { runMarkoColor } from "./marko/color";
import { runRax } from "./rax";
import { runMedium } from "./medium";

console.log("\n=== marko:search ===");
console.log(runMarkoSearch());

console.log("\n=== marko:color ===");
console.log(runMarkoColor());

console.log("\n=== rax ===");
console.log(runRax());

console.log("\n=== medium ===");
console.log(runMedium());
