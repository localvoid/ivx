import { component, connect } from "ivx";
import * as h from "ivx-html";

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

const BannerItem = component<string>((img) => {
  return h.div().s(BannerStyles.item)
    .c(h.img().s(BannerStyles.itemImg).a({ src: img }));
});

const Banner = connect<any[], { bannerData: any[] }>(
  (prev, props, context) => {
    const bannerData = context.bannerData;
    if (prev !== null && prev === bannerData) {
      return prev;
    }
    return bannerData;
  },
  (data) => {
    return h.div().s(BannerStyles.container).c([
      h.h2().c("ivi Banner: "),
      h.div().s(BannerStyles.list)
        .c(data.map((item: any, idx: number) => BannerItem(item.img)))]);
  },
);

const ListItem = component<{ href: string, img: string, title: string, price: number }>(
  (item) => {
    return h.a().s(ListStyles.item).a({ href: item.href }).c([
      h.img().s(ListStyles.itemImg),
      h.p().s(ListStyles.itemTitle).c(item.title),
      h.p().s(ListStyles.itemPrice).c(
        h.span().c(`price: ${item.price}`),
      ),
    ]);
  },
);

const List = connect<any[], { listData: any[] }>(
  (prev, props, context) => {
    const listData = context.listData;
    if (prev !== null && prev === listData) {
      return prev;
    }
    return listData;
  },
  (data) => {
    return h.div().s(ListStyles.container).c([
      h.h2().c("iviList "),
      h.div().s(ListStyles.list).c(
        data.map((item: any, idx: number) => ListItem(item)),
      ),
    ]);
  },
);

export const raxApp = component(() => {
  return h.div("app")
    .c([Banner(), List()]);
});
