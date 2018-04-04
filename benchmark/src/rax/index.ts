import { createBlueprint, renderWithBlueprint } from "ivx";
import { raxApp } from "./ui";

const RaxBlueprint = createBlueprint(raxApp(), { bannerData: [], listData: [] });

const listData = Array.from({ length: 100 })
  .map((undef, i) => {
    return {
      title: "Product title " + i,
      img: "https://img.alicdn.com/tps/TB13keMLXXXXXbmXVXXXXXXXXXX-900-500.jpg",
      href: "https://github.com",
      price: 20,
    };
  });

const bannerData = Array.from({ length: 6 })
  .map((undef, i) => {
    return {
      title: "banner " + i,
      img: "https://img.alicdn.com/tps/TB13keMLXXXXXbmXVXXXXXXXXXX-900-500.jpg",
    };
  });

export function runRax() {
  return renderWithBlueprint(
    raxApp(),
    RaxBlueprint,
    { bannerData, listData },
  );
}
