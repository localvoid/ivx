import { component, connect } from "ivx";
import { div, h2, a, img, p, span } from "ivx-html";

const BannerStyles = {
  container: {
    width: "900px",
    margin: "30px auto",
    border: "1px solid #eee",
    padding: "20px",
  },
  list: {
    overflow: "hidden",
  },
  item: {
    float: "left",
    width: "175px",
    marginRight: "20px",
  },
  itemImg: {
    width: "100%",
    height: "100px",
    marginBottom: "10px",
  },
};

const ListStyles = {
  container: {
    width: "900px",
    margin: "30px auto",
    border: "1px solid #eee",
    padding: "20px",
  },
  list: {
    overflow: "hidden",
  },
  item: {
    float: "left",
    width: "175px",
    marginRight: "20px",
  },
  itemImg: {
    width: "100%",
    height: "100px",
  },
  itemTitle: {
    height: "30px",
    lineHeight: "30px",
  },
  itemPrice: {
    height: "30px",
    lineHeight: "30px",
  },
};

const BannerItem = component<string>((imageSrc) => {
  return div("", void 0, BannerStyles.item)
    .c(img("", { src: imageSrc }, BannerStyles.itemImg));
});

const Banner = connect<any[], undefined, { bannerData: any[] }>(
  (prev, props, context) => {
    const bannerData = context.bannerData;
    if (prev !== null && prev === bannerData) {
      return prev;
    }
    return bannerData;
  },
  (data) => {
    return div("", void 0, BannerStyles.container).c([
      h2().c("ivi Banner: "),
      div("", void 0, BannerStyles.list)
        .c(data.map((item: any, idx: number) => BannerItem(item.img)))]);
  },
);

const ListItem = component<{ href: string, img: string, title: string, price: number }>(
  (item) => {
    return a("", { href: item.href }, ListStyles.item).c([
      img("", void 0, ListStyles.itemImg),
      p("", void 0, ListStyles.itemTitle).c(item.title),
      p("", void 0, ListStyles.itemPrice).c(
        span().c(`price: ${item.price}`),
      ),
    ]);
  },
);

const List = connect<any[], undefined, { listData: any[] }>(
  (prev, props, context) => {
    const listData = context.listData;
    if (prev !== null && prev === listData) {
      return prev;
    }
    return listData;
  },
  (data) => {
    return div("", void 0, ListStyles.container).c([
      h2().c("iviList "),
      div("", void 0, ListStyles.list).c(
        data.map((item: any, idx: number) => ListItem(item)),
      ),
    ]);
  },
);

export const raxApp = component(() => {
  return div("app")
    .c([Banner(), List()]);
});
