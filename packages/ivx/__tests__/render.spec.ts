import { VNode, component, renderToString, createBlueprint } from "../src";
import * as h from "./utils/html";

interface TestComponentOptions {
  wrapDepth?: number;
}

const STC = component((props: TestComponentOptions): VNode<any> => {
  const { wrapDepth } = props;

  if (wrapDepth) {
    return STC({ wrapDepth: wrapDepth - 1 });
  }

  return h.div();
});

describe("renderToString", () => {
  test("'abc'", () => {
    expect(renderToString(h.t("abc"))).toBe("abc");
  });

  test("<div>", () => {
    expect(renderToString(h.div())).toBe("<div></div>");
  });

  test("<span>", () => {
    expect(renderToString(h.span())).toBe("<span></span>");
  });

  test("<div> (null props)", () => {
    expect(renderToString(h.div().a(null))).toBe("<div></div>");
  });

  test("<div> ({} props)", () => {
    expect(renderToString(h.div().a({}))).toBe("<div></div>");
  });

  test("<div tabIndex='1'>", () => {
    expect(renderToString(h.div().a({ tabIndex: 1 }))).toBe(`<div tabIndex="1"></div>`);
  });

  test("<div tabIndex='1' title='2'>", () => {
    expect(renderToString(h.div().a({ tabIndex: 1, title: "2" }))).toBe(`<div tabIndex="1" title="2"></div>`);
  });

  test("<div data-abc='a'", () => {
    expect(renderToString(h.div().a({ "data-abc": "a" }))).toBe(`<div data-abc="a"></div>`);
  });

  test("<div aria-type='button'", () => {
    expect(renderToString(h.div().a({ "aria-type": "button" }))).toBe(`<div aria-type="button"></div>`);
  });

  test("<div boolean=false", () => {
    expect(renderToString(h.div().a({ boolean: false }))).toBe(`<div></div>`);
  });

  test("<div boolean=true", () => {
    expect(renderToString(h.div().a({ boolean: true }))).toBe(`<div boolean></div>`);
  });

  test("<div class=''>", () => {
    expect(renderToString(h.div(""))).toBe(`<div class=""></div>`);
  });

  test("<div class='a'>", () => {
    expect(renderToString(h.div("a"))).toBe(`<div class="a"></div>`);
  });

  test("<div class='a b'>", () => {
    expect(renderToString(h.div("a b"))).toBe(`<div class="a b"></div>`);
  });

  test("<div style=null>", () => {
    expect(renderToString(h.div().s(null))).toBe(`<div></div>`);
  });

  test("<div style={}>", () => {
    expect(renderToString(h.div().s({}))).toBe(`<div></div>`);
  });

  test("<div style={top: 10px}>", () => {
    expect(renderToString(h.div().s({ top: "10px" }))).toBe(`<div style="top:10px"></div>`);
  });

  test("<div style={top: 10px; left: 20px}>", () => {
    expect(renderToString(h.div().s({ top: "10px", left: "20px" })))
      .toBe(`<div style="top:10px;left:20px"></div>`);
  });

  test("<div></div> (null children)", () => {
    expect(renderToString(h.div().c(null))).toBe(`<div></div>`);
  });

  test("<div>'abc'</div>", () => {
    expect(renderToString(h.div().c("abc"))).toBe(`<div>abc</div>`);
  });

  test("<div>10</div>", () => {
    expect(renderToString(h.div().c(10))).toBe(`<div>10</div>`);
  });

  test("<div><span></div>", () => {
    expect(renderToString(h.div().c(h.span()))).toBe(`<div><span></span></div>`);
  });

  test("<div>[]</div>", () => {
    expect(renderToString(h.div().c([]))).toBe(`<div></div>`);
  });

  test("<div><span></div>", () => {
    expect(renderToString(h.div().c(h.span()))).toBe(`<div><span></span></div>`);
  });

  test("<div><span>, <strong></div>", () => {
    expect(renderToString(h.div().c(h.span(), h.strong())))
      .toBe(`<div><span></span><strong></strong></div>`);
  });

  test("<div>" +
    "  <div>'hello'</div>," +
    "  <div><span>'world'</span>, <div><span></div></div>," +
    "  <div><div></div>," +
    "  <div>" +
    "</div>", () => {
      expect(renderToString(h.div().c(
        h.div().c("hello"),
        h.div().c(h.span().c("world"), h.div().c(h.span())),
        h.div().c(h.div()),
        h.div(),
      ))).toBe(`<div><div>hello</div><div><span>world</span><div><span></span></div></div><div><div></div>` +
        `</div><div></div></div>`);
    });

  describe("svg", () => {
    test("<circle>", () => {
      expect(renderToString(h.circle())).toBe(`<circle></circle>`);
    });

    test("<circle style={top: 10px}>", () => {
      expect(renderToString(h.circle().s({ "top": "10px" }))).toBe(`<circle style="top:10px"></circle>`);
    });

    test("<circle xlink:href='a'>", () => {
      expect(renderToString(h.circle().a({ "xlink:href": "a" }))).toBe(`<circle xlink:href="a"></circle>`);
    });

    test("<circle xml:text='a'>", () => {
      expect(renderToString(h.circle().a({ "xml:text": "a" }))).toBe(`<circle xml:text="a"></circle>`);
    });
  });

  describe("children normalization", () => {
    test("<div><span>, [<strong>, <a>], <span></div>", () => {
      expect(renderToString(h.div().c(h.span(), [h.strong().k(0), h.div().k(1)], h.span())))
        .toBe(`<div><span></span><strong></strong><div></div><span></span></div>`);
    });

    test("<div>'abc', []</div>", () => {
      expect(renderToString(h.div().c("abc", []))).toBe(`<div>abc</div>`);
    });

    test("<div><div>, null, <span></div>", () => {
      expect(renderToString(h.div().c(h.div(), null, h.span())))
        .toBe(`<div><div></div><span></span></div>`);
    });

    test("<div><div>, 'abc', <span></div>", () => {
      expect(renderToString(h.div().c(h.div(), "abc", h.span())))
        .toBe(`<div><div></div>abc<span></span></div>`);
    });

    test("<div><div>, 123, <span></div>", () => {
      expect(renderToString(h.div().c(h.div(), 123, h.span())))
        .toBe(`<div><div></div>123<span></span></div>`);
    });
  });

  describe("component", () => {
    test("<C><div></C>", () => {
      expect(renderToString(STC({}))).toBe(`<div></div>`);
    });

    test("<C><C><C><div></C></C></C>", () => {
      expect(renderToString(STC({ wrapDepth: 3 }))).toBe(`<div></div>`);
    });
  });

  describe("special cases", () => {
    describe("newline-eating elements", () => {
      test("no newline", () => {
        expect(renderToString(h.textarea().c("hello"))).toBe(`<textarea>hello</textarea>`);
      });

      test("single newline", () => {
        expect(renderToString(h.textarea().c("\n"))).toBe(`<textarea>\n\n</textarea>`);
      });

      test("double newline", () => {
        expect(renderToString(h.textarea().c("\n\n"))).toBe(`<textarea>\n\n\n</textarea>`);
      });
    });
  });

  describe("escape", () => {
    test("attribute values", () => {
      expect(renderToString(h.div().a({ id: `"&` }))).toBe(`<div id="&quot;&amp;"></div>`);
    });

    test("style values", () => {
      expect(renderToString(h.div().s({ color: `"&` }))).toBe(`<div style="color:&quot;&amp;"></div>`);
    });

    test("single-child text", () => {
      expect(renderToString(h.div().c(`<&`))).toBe(`<div>&lt;&amp;</div>`);
    });

    test("text node content", () => {
      expect(renderToString(h.t(`<&`))).toBe(`&lt;&amp;`);
    });

    test("unsafeHTML", () => {
      expect(renderToString(h.div().unsafeHTML(`<&`))).toBe(`<div><&</div>`);
    });
  });

  describe("diff with blueprint", () => {
    describe("class", () => {
      test(`null => "a"`, () => {
        const bp = createBlueprint(h.div());
        expect(renderToString(h.div("a"), undefined, bp)).toBe(`<div class="a"></div>`);
      });

      test(`"a" => "a"`, () => {
        const bp = createBlueprint(h.div("a"));
        expect(renderToString(h.div("a"), undefined, bp)).toBe(`<div class="a"></div>`);
      });

      test(`"b" => "a"`, () => {
        const bp = createBlueprint(h.div("b"));
        expect(renderToString(h.div("a"), undefined, bp)).toBe(`<div class="a"></div>`);
      });
    });

    describe("props", () => {
      test(`null => {}`, () => {
        const bp = createBlueprint(h.div());
        expect(renderToString(h.div().a({}), undefined, bp)).toBe(`<div></div>`);
      });

      test(`{} => null`, () => {
        const bp = createBlueprint(h.div().a({}));
        expect(renderToString(h.div(), undefined, bp)).toBe(`<div></div>`);
      });

      test(`{} => {}`, () => {
        const bp = createBlueprint(h.div().a({}));
        expect(renderToString(h.div().a({}), undefined, bp)).toBe(`<div></div>`);
      });

      test(`null => { title: "abc" }`, () => {
        const bp = createBlueprint(h.div());
        expect(renderToString(h.div().a({ title: "abc" }), undefined, bp)).toBe(`<div title="abc"></div>`);
      });

      test(`{} => { title: "abc" }`, () => {
        const bp = createBlueprint(h.div().a({}));
        expect(renderToString(h.div().a({ title: "abc" }), undefined, bp)).toBe(`<div title="abc"></div>`);
      });

      test(`{ title: "abc" } => { title: "abc" }`, () => {
        const bp = createBlueprint(h.div().a({ title: "abc" }));
        expect(renderToString(h.div().a({ title: "abc" }), undefined, bp)).toBe(`<div title="abc"></div>`);
      });

      test(`{ title: "a" } => { title: "abc" }`, () => {
        const bp = createBlueprint(h.div().a({ title: "a" }));
        expect(renderToString(h.div().a({ title: "abc" }), undefined, bp)).toBe(`<div title="abc"></div>`);
      });
    });

    describe("style", () => {
      test(`null => {}`, () => {
        const bp = createBlueprint(h.div());
        expect(renderToString(h.div().s({}), undefined, bp)).toBe(`<div></div>`);
      });

      test(`{} => null`, () => {
        const bp = createBlueprint(h.div().s({}));
        expect(renderToString(h.div(), undefined, bp)).toBe(`<div></div>`);
      });

      test(`{} => {}`, () => {
        const bp = createBlueprint(h.div().s({}));
        expect(renderToString(h.div().s({}), undefined, bp)).toBe(`<div></div>`);
      });

      test(`null => { color: "green" }`, () => {
        const bp = createBlueprint(h.div());
        expect(renderToString(h.div().s({ color: "green" }), undefined, bp))
          .toBe(`<div style="color:green"></div>`);
      });

      test(`{} => { color: "green" }`, () => {
        const bp = createBlueprint(h.div().s({}));
        expect(renderToString(h.div().s({ color: "green" }), undefined, bp))
          .toBe(`<div style="color:green"></div>`);
      });

      test(`{ color: "green" } => { color: "green" }`, () => {
        const bp = createBlueprint(h.div().s({ color: "green" }));
        expect(renderToString(h.div().s({ color: "green" }), undefined, bp))
          .toBe(`<div style="color:green"></div>`);
      });

      test(`{color: "red" } => { color: "green" }`, () => {
        const bp = createBlueprint(h.div().s({ color: "red" }));
        expect(renderToString(h.div().s({ color: "green" }), undefined, bp))
          .toBe(`<div style="color:green"></div>`);
      });
    });

    describe("children", () => {
      describe("empty blueprint", () => {
        const bp = createBlueprint(h.div());
        test("basic text", () => {
          expect(renderToString(h.div().c(
            "abc",
          ), undefined, bp)).toBe(`<div>abc</div>`);
        });

        test("basic number", () => {
          expect(renderToString(h.div().c(
            123,
          ), undefined, bp)).toBe(`<div>123</div>`);
        });

        test("adjacent text nodes", () => {
          expect(renderToString(h.div().c(
            "abc",
            "def",
          ), undefined, bp)).toBe(`<div>abcdef</div>`);
        });

        test("element", () => {
          expect(renderToString(h.div().c(
            h.span(),
          ), undefined, bp)).toBe(`<div><span></span></div>`);
        });

        test("elements", () => {
          expect(renderToString(h.div().c(
            h.span(),
            h.strong(),
          ), undefined, bp)).toBe(`<div><span></span><strong></strong></div>`);
        });

        test("mixed elements", () => {
          expect(renderToString(h.div().c(
            h.span(),
            "a",
            h.strong(),
          ), undefined, bp)).toBe(`<div><span></span>a<strong></strong></div>`);
        });
      });

      describe("blueprint with basic text", () => {
        const bp = createBlueprint(h.div().c("a"));
        test("basic text", () => {
          expect(renderToString(h.div().c(
            "abc",
          ), undefined, bp)).toBe(`<div>abc</div>`);
        });

        test("basic number", () => {
          expect(renderToString(h.div().c(
            123,
          ), undefined, bp)).toBe(`<div>123</div>`);
        });

        test("adjacent text nodes", () => {
          expect(renderToString(h.div().c(
            "abc",
            "def",
          ), undefined, bp)).toBe(`<div>abcdef</div>`);
        });

        test("element", () => {
          expect(renderToString(h.div().c(
            h.span(),
          ), undefined, bp)).toBe(`<div><span></span></div>`);
        });

        test("elements", () => {
          expect(renderToString(h.div().c(
            h.span(),
            h.strong(),
          ), undefined, bp)).toBe(`<div><span></span><strong></strong></div>`);
        });

        test("mixed elements", () => {
          expect(renderToString(h.div().c(
            h.span(),
            "a",
            h.strong(),
          ), undefined, bp)).toBe(`<div><span></span>a<strong></strong></div>`);
        });
      });

      describe("blueprint with children element", () => {
        const bp = createBlueprint(h.div().c(h.span()));
        test("basic text", () => {
          expect(renderToString(h.div().c(
            "abc",
          ), undefined, bp)).toBe(`<div>abc</div>`);
        });

        test("basic number", () => {
          expect(renderToString(h.div().c(
            123,
          ), undefined, bp)).toBe(`<div>123</div>`);
        });

        test("adjacent text nodes", () => {
          expect(renderToString(h.div().c(
            "abc",
            "def",
          ), undefined, bp)).toBe(`<div>abcdef</div>`);
        });

        test("element", () => {
          expect(renderToString(h.div().c(
            h.span(),
          ), undefined, bp)).toBe(`<div><span></span></div>`);
        });

        test("elements", () => {
          expect(renderToString(h.div().c(
            h.span(),
            h.strong(),
          ), undefined, bp)).toBe(`<div><span></span><strong></strong></div>`);
        });

        test("mixed elements", () => {
          expect(renderToString(h.div().c(
            h.span(),
            "a",
            h.strong(),
          ), undefined, bp)).toBe(`<div><span></span>a<strong></strong></div>`);
        });

        test("unsafeHTML", () => {
          expect(renderToString(h.div().unsafeHTML("<&"), undefined, bp)).toBe(`<div><&</div>`);
        });
      });

      describe("blueprint with multiple children elements", () => {
        const bp = createBlueprint(h.div().c(h.span(), h.strong()));
        test("basic text", () => {
          expect(renderToString(h.div().c(
            "abc",
          ), undefined, bp)).toBe(`<div>abc</div>`);
        });

        test("basic number", () => {
          expect(renderToString(h.div().c(
            123,
          ), undefined, bp)).toBe(`<div>123</div>`);
        });

        test("adjacent text nodes", () => {
          expect(renderToString(h.div().c(
            "abc",
            "def",
          ), undefined, bp)).toBe(`<div>abcdef</div>`);
        });

        test("element", () => {
          expect(renderToString(h.div().c(
            h.span(),
          ), undefined, bp)).toBe(`<div><span></span></div>`);
        });

        test("elements", () => {
          expect(renderToString(h.div().c(
            h.span(),
            h.strong(),
          ), undefined, bp)).toBe(`<div><span></span><strong></strong></div>`);
        });

        test("mixed elements", () => {
          expect(renderToString(h.div().c(
            h.span(),
            "a",
            h.strong(),
          ), undefined, bp)).toBe(`<div><span></span>a<strong></strong></div>`);
        });
      });

      describe("blueprint with multiple keyed/non-keyed children elements", () => {
        const bp = createBlueprint(h.div().c(h.span().k(0), "a", h.strong().k(1)));
        test("basic text", () => {
          expect(renderToString(h.div().c(
            "abc",
          ), undefined, bp)).toBe(`<div>abc</div>`);
        });

        test("basic number", () => {
          expect(renderToString(h.div().c(
            123,
          ), undefined, bp)).toBe(`<div>123</div>`);
        });

        test("adjacent text nodes", () => {
          expect(renderToString(h.div().c(
            "abc",
            "def",
          ), undefined, bp)).toBe(`<div>abcdef</div>`);
        });

        test("element", () => {
          expect(renderToString(h.div().c(
            h.span(),
          ), undefined, bp)).toBe(`<div><span></span></div>`);
        });

        test("elements", () => {
          expect(renderToString(h.div().c(
            h.span(),
            h.strong(),
          ), undefined, bp)).toBe(`<div><span></span><strong></strong></div>`);
        });

        test("mixed elements", () => {
          expect(renderToString(h.div().c(
            h.span(),
            "a",
            h.strong(),
          ), undefined, bp)).toBe(`<div><span></span>a<strong></strong></div>`);
        });

        test("reorder elements 1", () => {
          expect(renderToString(h.div().c(
            h.strong().k(1),
            "a",
            h.span().k(0),
          ), undefined, bp)).toBe(`<div><strong></strong>a<span></span></div>`);
        });
      });
    });
  });
});
