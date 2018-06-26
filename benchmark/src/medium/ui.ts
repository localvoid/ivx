/* tslint:disable:max-line-length */
import { connect, component } from "ivx";
import * as h from "ivx-html";
import * as s from "ivx-svg";

const MetabarMessage = connect<{ title: string, saved: boolean }, undefined, any>(
  (prev, props, context) => {
    const title = context.title;
    const saved = context.saved;
    if (prev && prev.title === title && prev.saved === saved) {
      return prev;
    }
    return { title, saved };
  },
  (props) => h.span("js-metabarMessage u-textColorDarker").c([
    props.title,
    props.saved ? h.span("u-textColorNormal u-marginLeft18").c("Saved") : null,
  ]),
);

const MetabarButton = component<string>((text) => {
  return h.div(
    "u-alignMiddle u-inlineBlock u-verticalAlignTop u-height65 u-xs-height56 u-paddingLeft8 u-paddingRight8",
  ).c(
    h.div("u-alignBlock").c(
      h.button("button button--chromeless u-baseColor--buttonNormal js-buttonRequiresPostId")
        .c(text),
    ),
  );
});

const MetabarButtonSet = component(() => {
  return h.div("buttonSet").c(
    h.button(
      "button button--small button--circle button--chromeless is-touchIconBlackPulse is-inSiteNavBar u-baseColor--buttonNormal button--withIcon button--withSvgIcon button--activity js-notificationsButton u-marginRight10",
    ).c(
      h.span("svgIcon svgIcon--bell svgIcon--25px").c(
        s.svg("svgIcon-use", {
          width: 25,
          height: 25,
          viewBox: "-293 409 25 25",
        }).c(
          s.path("", {
            d: "M-273.327 423.67l-1.673-1.52v-3.646a5.5 5.5 0 0 0-6.04-5.474c-2.86.273-4.96 2.838-4.96 5.71v3.41l-1.68 1.553c-.204.19-.32.456-.32.734V427a1 1 0 0 0 1 1h3.49a3.079 3.079 0 0 0 3.01 2.45 3.08 3.08 0 0 0 3.01-2.45h3.49a1 1 0 0 0 1-1v-2.59c0-.28-.12-.55-.327-.74zm-7.173 5.63c-.842 0-1.55-.546-1.812-1.3h3.624a1.92 1.92 0 0 1-1.812 1.3zm6.35-2.45h-12.7v-2.347l1.63-1.51c.236-.216.37-.522.37-.843v-3.41c0-2.35 1.72-4.356 3.92-4.565a4.353 4.353 0 0 1 4.78 4.33v3.645c0 .324.137.633.376.85l1.624 1.477v2.373z",
          }),
        ),
      ),
    ),
  );
});

const MetabarBlock = component(() => {
  return h.div(
    "metabar-block u-floatRight u-xs-absolute u-xs-textAlignRight u-xs-right0 u-xs-marginRight20 u-height65 u-xs-height56",
  ).c([
    MetabarButton("Share"),
    MetabarButton("Publish"),
    MetabarButtonSet(),
  ]);
});

const Metabar = component(() => {
  return h.div("metabar-inner u-marginAuto u-maxWidth1000 u-paddingLeft20 u-paddingRight20 js-metabarMiddle")
    .c(
      h.div("metabar-block metabar-block--left u-floatLeft u-height65 u-xs-height56")
        .c([
          h.a("siteNav-logo", {
            href: "https:/medium.com",
            "data-log-event": "home",
          }),
          h.span("svgIcon svgIcon--logoNew svgIcon--45px is-flushLeft")
            .c([
              s.svg("svgIcon-use", {
                width: "45",
                height: "45",
                viewBox: "-17 18 45 45",
                "data-multipart": "true",
              }).c([
                s.path("", {
                  d: "M11.525 28.078c-.472-.225-.858.002-.858.506v20.044l8.616 4.113c.948.46 1.717.14 1.717-.7v-19.3a.22.22 0 0 0-.124-.19l-9.35-4.46v-.01z",
                }),
                s.path("", {
                  d: "22 0 0 0-.124-.19l-9.35-4.46v-.01z",
                }),
                s.path("", {
                  d: "M.333 43.696l9.83-15.247c.278-.43.89-.6 1.36-.38l9.364 4.47c.06.03.082.1.047.15L10.666 48.63.333 43.698v-.002z",
                }),
                s.path("", {
                  d: "M-8.57 28.35c-.786-.375-1.053-.096-.592.62L.333 43.696l10.333 4.932L.356 32.635a.156.156 0 0 0-.06-.054l-8.866-4.23z",
                }),
                s.path("", {
                  d: "M.333 52.033c0 .84-.643 1.22-1.43.844l-8.045-3.84c-.472-.224-.858-.82-.858-1.325V28.89c0-.672.515-.976 1.145-.675l9.133 4.36a.092.092 0 0 1 .055.084v19.37z",
                }),
              ]),
              h.span("u-textScreenReader").c("Homepage"),
            ]),
          h.div("u-alignMiddle u-inlineBlock u-verticalAlignTop u-height65 u-xs-height56")
            .c(h.div("u-alignBlock").c([MetabarMessage(), MetabarBlock()])),
        ]),
  );
});

const Post = connect<any, undefined, any>(
  (prev, props, context) => {
    const content = context.content;
    if (prev && prev === content) {
      return prev;
    }
    return content;
  },
  (props) => h.div().c(props),
);

const Main = component(() => {
  return h.main("", { role: "main" })
    .c(
      h.article("u-sizeViewHeightMin100 u-overflowHidden postArticle postArticle--full", {
        lang: "en",
        "data-scroll": "native",
      }).c(Post()),
  );
});

export const MediumApp = component(() => {
  return h.div("site-main surface-container", { id: "container" })
    .c(
      h.div("surface", { id: "_obv.shell._surface_1497626198690" }, {
        display: "block",
        visibility: "visible",
      }).c(
        h.div("screenContent surface-content is-supplementalPostContentLoaded", {
          "data-used": "true",
          "data-action-scope": "_actionscop_2",
        }).c([
          Metabar(),
          h.div("metabar metabar--spacer js-metabarSpacer u-height65 u-xs-height56"),
          Main(),
        ]),
      ),
  );
});
