import { VNode, VNodeFlags } from "ivx";
import * as h from "ivx-html";

const ELEMENTS: { [name: string]: (className?: string, attrs?: {}, style?: {}) => VNode<any> } = {
  "a": h.a,
  "abbr": h.abbr,
  "address": h.address,
  "area": h.imgArea,
  "article": h.article,
  "aside": h.aside,
  "b": h.b,
  "base": h.base,
  "bdo": h.bdo,
  "blockquote": h.blockquote,
  "body": h.body,
  "br": h.br,
  "button": h.button,
  "canvas": h.canvas,
  "caption": h.caption,
  "cite": h.cite,
  "code": h.code,
  "col": h.col,
  "colgroup": h.colgroup,
  "dd": h.dd,
  "del": h.del,
  "dfn": h.dfn,
  "div": h.div,
  "dl": h.dl,
  "dt": h.dt,
  "em": h.em,
  "fieldset": h.fieldset,
  "figcaption": h.figcaption,
  "figure": h.figure,
  "footer": h.footer,
  "h1": h.h1,
  "h2": h.h2,
  "h3": h.h3,
  "h4": h.h4,
  "h5": h.h5,
  "h6": h.h6,
  "head": h.head,
  "header": h.header,
  "hgroup": h.hgroup,
  "hr": h.hr,
  "html": h.html,
  "i": h.i,
  "iframe": h.iframe,
  "img": h.img,
  "ins": h.ins,
  "input": h.input,
  "kbd": h.kbd,
  "label": h.label,
  "legend": h.legend,
  "li": h.li,
  "link": h.link,
  "main": h.main,
  "map": h.imgMap,
  "mark": h.mark,
  "menu": h.menu,
  "meta": h.meta,
  "meter": h.meter,
  "nav": h.nav,
  "noscript": h.noscript,
  "ol": h.ol,
  "optgroup": h.optgroup,
  "option": h.option,
  "p": h.p,
  "picture": h.picture,
  "pre": h.pre,
  "progress": h.progress,
  "q": h.q,
  "rt": h.rt,
  "ruby": h.ruby,
  "s": h.s,
  "samp": h.samp,
  "script": h.script,
  "section": h.section,
  "select": h.select,
  "source": h.source,
  "span": h.span,
  "strong": h.strong,
  "style": h.style,
  "sub": h.sub,
  "sup": h.sup,
  "table": h.table,
  "tbody": h.tbody,
  "td": h.td,
  "template": h.template,
  "textarea": h.textarea,
  "tfoot": h.tfoot,
  "th": h.th,
  "thead": h.thead,
  "time": h.time,
  "title": h.title,
  "tr": h.tr,
  "track": h.track,
  "u": h.u,
  "ul": h.ul,
  "wbr": h.wbr,
  "audio": h.audio,
  "video": h.video,
};

const VOID_ELEMENTS = {
  "area": 1,
  "base": 1,
  "br": 1,
  "col": 1,
  "embed": 1,
  "hr": 1,
  "img": 1,
  "link": 1,
  "meta": 1,
  "param": 1,
  "source": 1,
  "track": 1,
  "wbr": 1,
};

describe("HTML Elements", () => {
  describe("tag name", () => {
    for (const name of Object.keys(ELEMENTS)) {
      const factory = ELEMENTS[name];
      test(`${name}`, () => {
        const n = factory();
        expect(n._tag).toBe(`<${name}`);
      });
    }
  });

  describe("class name", () => {
    for (const name of Object.keys(ELEMENTS)) {
      const factory = ELEMENTS[name];
      test(`${name}`, () => {
        const n = factory("abc");
        expect(n._className).toBe("abc");
      });
    }
  });

  describe("attributes", () => {
    for (const name of Object.keys(ELEMENTS)) {
      const factory = ELEMENTS[name];
      const ATTRS = {};
      test(`${name}`, () => {
        const n = factory("", ATTRS);
        expect(n._props).toBe(ATTRS);
      });
    }
  });

  describe("styles", () => {
    for (const name of Object.keys(ELEMENTS)) {
      const factory = ELEMENTS[name];
      const STYLES = {};
      test(`${name}`, () => {
        const n = factory("", void 0, STYLES);
        expect(n._style).toBe(STYLES);
      });
    }
  });

  describe("void elements", () => {
    for (const name of Object.keys(ELEMENTS)) {
      const factory = ELEMENTS[name];
      test(`${name}`, () => {
        const n = factory();
        if (name in VOID_ELEMENTS) {
          expect((n._flags & VNodeFlags.VoidElement) !== 0).toBe(true);
        }
      });
    }
  });
});
