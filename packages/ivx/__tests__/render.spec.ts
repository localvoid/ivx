import { VNode, component, render, createBlueprint, renderWithBlueprint } from "../src";
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
    expect(render(h.t("abc"))).toBe("abc");
  });

  test("<div>", () => {
    expect(render(h.div())).toBe("<div></div>");
  });

  test("<span>", () => {
    expect(render(h.span())).toBe("<span></span>");
  });

  test("<div> (null props)", () => {
    expect(render(h.div().a(null))).toBe("<div></div>");
  });

  test("<div> ({} props)", () => {
    expect(render(h.div().a({}))).toBe("<div></div>");
  });

  test("<div tabIndex='1'>", () => {
    expect(render(h.div().a({ tabIndex: 1 }))).toBe(`<div tabIndex="1"></div>`);
  });

  test("<div tabIndex='1' title='2'>", () => {
    expect(render(h.div().a({ tabIndex: 1, title: "2" }))).toBe(`<div tabIndex="1" title="2"></div>`);
  });

  test("<div data-abc='a'", () => {
    expect(render(h.div().a({ "data-abc": "a" }))).toBe(`<div data-abc="a"></div>`);
  });

  test("<div aria-type='button'", () => {
    expect(render(h.div().a({ "aria-type": "button" }))).toBe(`<div aria-type="button"></div>`);
  });

  test("<div boolean=false", () => {
    expect(render(h.div().a({ boolean: false }))).toBe(`<div></div>`);
  });

  test("<div boolean=true", () => {
    expect(render(h.div().a({ boolean: true }))).toBe(`<div boolean></div>`);
  });

  test("<div class=''>", () => {
    expect(render(h.div(""))).toBe(`<div class=""></div>`);
  });

  test("<div class='a'>", () => {
    expect(render(h.div("a"))).toBe(`<div class="a"></div>`);
  });

  test("<div class='a b'>", () => {
    expect(render(h.div("a b"))).toBe(`<div class="a b"></div>`);
  });

  test("<div style=null>", () => {
    expect(render(h.div().s(null))).toBe(`<div></div>`);
  });

  test("<div style={}>", () => {
    expect(render(h.div().s({}))).toBe(`<div></div>`);
  });

  test("<div style={top: 10px}>", () => {
    expect(render(h.div().s({ top: "10px" }))).toBe(`<div style="top:10px"></div>`);
  });

  test("<div style={top: 10px; left: 20px}>", () => {
    expect(render(h.div().s({ top: "10px", left: "20px" })))
      .toBe(`<div style="top:10px;left:20px"></div>`);
  });

  test("<div></div> (null children)", () => {
    expect(render(h.div().c(null))).toBe(`<div></div>`);
  });

  test("<div>'abc'</div>", () => {
    expect(render(h.div().c("abc"))).toBe(`<div>abc</div>`);
  });

  test("<div>10</div>", () => {
    expect(render(h.div().c(10))).toBe(`<div>10</div>`);
  });

  test("<div><span></div>", () => {
    expect(render(h.div().c(h.span()))).toBe(`<div><span></span></div>`);
  });

  test("<div>[]</div>", () => {
    expect(render(h.div().c([]))).toBe(`<div></div>`);
  });

  test("<div><span></div>", () => {
    expect(render(h.div().c(h.span()))).toBe(`<div><span></span></div>`);
  });

  test("<div><span>, <strong></div>", () => {
    expect(render(h.div().c(h.span(), h.strong())))
      .toBe(`<div><span></span><strong></strong></div>`);
  });

  test("<div>" +
    "  <div>'hello'</div>," +
    "  <div><span>'world'</span>, <div><span></div></div>," +
    "  <div><div></div>," +
    "  <div>" +
    "</div>", () => {
      expect(render(h.div().c(
        h.div().c("hello"),
        h.div().c(h.span().c("world"), h.div().c(h.span())),
        h.div().c(h.div()),
        h.div(),
      ))).toBe(`<div><div>hello</div><div><span>world</span><div><span></span></div></div><div><div></div>` +
        `</div><div></div></div>`);
    });

  describe("svg", () => {
    test("<circle>", () => {
      expect(render(h.circle())).toBe(`<circle></circle>`);
    });

    test("<circle style={top: 10px}>", () => {
      expect(render(h.circle().s({ "top": "10px" }))).toBe(`<circle style="top:10px"></circle>`);
    });

    test("<circle xlink:href='a'>", () => {
      expect(render(h.circle().a({ "xlink:href": "a" }))).toBe(`<circle xlink:href="a"></circle>`);
    });

    test("<circle xml:text='a'>", () => {
      expect(render(h.circle().a({ "xml:text": "a" }))).toBe(`<circle xml:text="a"></circle>`);
    });
  });

  describe("children normalization", () => {
    test("<div><span>, [<strong>, <a>], <span></div>", () => {
      expect(render(h.div().c(h.span(), [h.strong().k(0), h.div().k(1)], h.span())))
        .toBe(`<div><span></span><strong></strong><div></div><span></span></div>`);
    });

    test("<div>'abc', []</div>", () => {
      expect(render(h.div().c("abc", []))).toBe(`<div>abc</div>`);
    });

    test("<div><div>, null, <span></div>", () => {
      expect(render(h.div().c(h.div(), null, h.span())))
        .toBe(`<div><div></div><span></span></div>`);
    });

    test("<div><div>, 'abc', <span></div>", () => {
      expect(render(h.div().c(h.div(), "abc", h.span())))
        .toBe(`<div><div></div>abc<span></span></div>`);
    });

    test("<div><div>, 123, <span></div>", () => {
      expect(render(h.div().c(h.div(), 123, h.span())))
        .toBe(`<div><div></div>123<span></span></div>`);
    });
  });

  describe("component", () => {
    test("<C><div></C>", () => {
      expect(render(STC({}))).toBe(`<div></div>`);
    });

    test("<C><C><C><div></C></C></C>", () => {
      expect(render(STC({ wrapDepth: 3 }))).toBe(`<div></div>`);
    });
  });

  describe("special cases", () => {
    describe("newline-eating elements", () => {
      test("no newline", () => {
        expect(render(h.textarea().c("hello"))).toBe(`<textarea>hello</textarea>`);
      });

      test("single newline", () => {
        expect(render(h.textarea().c("\n"))).toBe(`<textarea>\n\n</textarea>`);
      });

      test("double newline", () => {
        expect(render(h.textarea().c("\n\n"))).toBe(`<textarea>\n\n\n</textarea>`);
      });
    });
  });

  describe("escape", () => {
    test("attribute values", () => {
      expect(render(h.div().a({ id: `"&` }))).toBe(`<div id="&quot;&amp;"></div>`);
    });

    test("style values", () => {
      expect(render(h.div().s({ color: `"&` }))).toBe(`<div style="color:&quot;&amp;"></div>`);
    });

    test("single-child text", () => {
      expect(render(h.div().c(`<&`))).toBe(`<div>&lt;&amp;</div>`);
    });

    test("text node content", () => {
      expect(render(h.t(`<&`))).toBe(`&lt;&amp;`);
    });

    test("unsafeHTML", () => {
      expect(render(h.div().unsafeHTML(`<&`))).toBe(`<div><&</div>`);
    });
  });

  describe("diff with blueprint", () => {
    describe("class", () => {
      test(`null => "a"`, () => {
        const bp = createBlueprint(h.div());
        expect(renderWithBlueprint(h.div("a"), bp)).toBe(`<div class="a"></div>`);
      });

      test(`"a" => "a"`, () => {
        const bp = createBlueprint(h.div("a"));
        expect(renderWithBlueprint(h.div("a"), bp)).toBe(`<div class="a"></div>`);
      });

      test(`"b" => "a"`, () => {
        const bp = createBlueprint(h.div("b"));
        expect(renderWithBlueprint(h.div("a"), bp)).toBe(`<div class="a"></div>`);
      });
    });

    describe("props", () => {
      test(`null => {}`, () => {
        const bp = createBlueprint(h.div());
        expect(renderWithBlueprint(h.div().a({}), bp)).toBe(`<div></div>`);
      });

      test(`{} => null`, () => {
        const bp = createBlueprint(h.div().a({}));
        expect(renderWithBlueprint(h.div(), bp)).toBe(`<div></div>`);
      });

      test(`{} => {}`, () => {
        const bp = createBlueprint(h.div().a({}));
        expect(renderWithBlueprint(h.div().a({}), bp)).toBe(`<div></div>`);
      });

      test(`null => { title: "abc" }`, () => {
        const bp = createBlueprint(h.div());
        expect(renderWithBlueprint(h.div().a({ title: "abc" }), bp)).toBe(`<div title="abc"></div>`);
      });

      test(`{} => { title: "abc" }`, () => {
        const bp = createBlueprint(h.div().a({}));
        expect(renderWithBlueprint(h.div().a({ title: "abc" }), bp)).toBe(`<div title="abc"></div>`);
      });

      test(`{ title: "abc" } => { title: "abc" }`, () => {
        const bp = createBlueprint(h.div().a({ title: "abc" }));
        expect(renderWithBlueprint(h.div().a({ title: "abc" }), bp)).toBe(`<div title="abc"></div>`);
      });

      test(`{ title: "a" } => { title: "abc" }`, () => {
        const bp = createBlueprint(h.div().a({ title: "a" }));
        expect(renderWithBlueprint(h.div().a({ title: "abc" }), bp)).toBe(`<div title="abc"></div>`);
      });
    });

    describe("style", () => {
      test(`null => {}`, () => {
        const bp = createBlueprint(h.div());
        expect(renderWithBlueprint(h.div().s({}), bp)).toBe(`<div></div>`);
      });

      test(`{} => null`, () => {
        const bp = createBlueprint(h.div().s({}));
        expect(renderWithBlueprint(h.div(), bp)).toBe(`<div></div>`);
      });

      test(`{} => {}`, () => {
        const bp = createBlueprint(h.div().s({}));
        expect(renderWithBlueprint(h.div().s({}), bp)).toBe(`<div></div>`);
      });

      test(`null => { color: "green" }`, () => {
        const bp = createBlueprint(h.div());
        expect(renderWithBlueprint(h.div().s({ color: "green" }), bp))
          .toBe(`<div style="color:green"></div>`);
      });

      test(`{} => { color: "green" }`, () => {
        const bp = createBlueprint(h.div().s({}));
        expect(renderWithBlueprint(h.div().s({ color: "green" }), bp))
          .toBe(`<div style="color:green"></div>`);
      });

      test(`{ color: "green" } => { color: "green" }`, () => {
        const bp = createBlueprint(h.div().s({ color: "green" }));
        expect(renderWithBlueprint(h.div().s({ color: "green" }), bp))
          .toBe(`<div style="color:green"></div>`);
      });

      test(`{color: "red" } => { color: "green" }`, () => {
        const bp = createBlueprint(h.div().s({ color: "red" }));
        expect(renderWithBlueprint(h.div().s({ color: "green" }), bp))
          .toBe(`<div style="color:green"></div>`);
      });
    });

    describe("children", () => {
      describe("empty blueprint", () => {
        const bp = createBlueprint(h.div());
        test("basic text", () => {
          expect(renderWithBlueprint(h.div().c(
            "abc",
          ), bp)).toBe(`<div>abc</div>`);
        });

        test("basic number", () => {
          expect(renderWithBlueprint(h.div().c(
            123,
          ), bp)).toBe(`<div>123</div>`);
        });

        test("adjacent text nodes", () => {
          expect(renderWithBlueprint(h.div().c(
            "abc",
            "def",
          ), bp)).toBe(`<div>abcdef</div>`);
        });

        test("element", () => {
          expect(renderWithBlueprint(h.div().c(
            h.span(),
          ), bp)).toBe(`<div><span></span></div>`);
        });

        test("elements", () => {
          expect(renderWithBlueprint(h.div().c(
            h.span(),
            h.strong(),
          ), bp)).toBe(`<div><span></span><strong></strong></div>`);
        });

        test("mixed elements", () => {
          expect(renderWithBlueprint(h.div().c(
            h.span(),
            "a",
            h.strong(),
          ), bp)).toBe(`<div><span></span>a<strong></strong></div>`);
        });
      });

      describe("blueprint with basic text", () => {
        const bp = createBlueprint(h.div().c("a"));
        test("basic text", () => {
          expect(renderWithBlueprint(h.div().c("abc"), bp)).toBe(`<div>abc</div>`);
        });

        test("basic number", () => {
          expect(renderWithBlueprint(h.div().c(123), bp)).toBe(`<div>123</div>`);
        });

        test("adjacent text nodes", () => {
          expect(renderWithBlueprint(h.div().c(
            "abc",
            "def",
          ), bp)).toBe(`<div>abcdef</div>`);
        });

        test("element", () => {
          expect(renderWithBlueprint(h.div().c(
            h.span(),
          ), bp)).toBe(`<div><span></span></div>`);
        });

        test("elements", () => {
          expect(renderWithBlueprint(h.div().c(
            h.span(),
            h.strong(),
          ), bp)).toBe(`<div><span></span><strong></strong></div>`);
        });

        test("mixed elements", () => {
          expect(renderWithBlueprint(h.div().c(
            h.span(),
            "a",
            h.strong(),
          ), bp)).toBe(`<div><span></span>a<strong></strong></div>`);
        });
      });

      describe("blueprint with children element", () => {
        const bp = createBlueprint(h.div().c(h.span()));
        test("basic text", () => {
          expect(renderWithBlueprint(h.div().c(
            "abc",
          ), bp)).toBe(`<div>abc</div>`);
        });

        test("basic number", () => {
          expect(renderWithBlueprint(h.div().c(
            123,
          ), bp)).toBe(`<div>123</div>`);
        });

        test("adjacent text nodes", () => {
          expect(renderWithBlueprint(h.div().c(
            "abc",
            "def",
          ), bp)).toBe(`<div>abcdef</div>`);
        });

        test("element", () => {
          expect(renderWithBlueprint(h.div().c(
            h.span(),
          ), bp)).toBe(`<div><span></span></div>`);
        });

        test("elements", () => {
          expect(renderWithBlueprint(h.div().c(
            h.span(),
            h.strong(),
          ), bp)).toBe(`<div><span></span><strong></strong></div>`);
        });

        test("mixed elements", () => {
          expect(renderWithBlueprint(h.div().c(
            h.span(),
            "a",
            h.strong(),
          ), bp)).toBe(`<div><span></span>a<strong></strong></div>`);
        });

        test("unsafeHTML", () => {
          expect(renderWithBlueprint(h.div().unsafeHTML("<&"), bp)).toBe(`<div><&</div>`);
        });
      });

      describe("blueprint with multiple children elements", () => {
        const bp = createBlueprint(h.div().c(h.span(), h.strong()));
        test("basic text", () => {
          expect(renderWithBlueprint(h.div().c(
            "abc",
          ), bp)).toBe(`<div>abc</div>`);
        });

        test("basic number", () => {
          expect(renderWithBlueprint(h.div().c(
            123,
          ), bp)).toBe(`<div>123</div>`);
        });

        test("adjacent text nodes", () => {
          expect(renderWithBlueprint(h.div().c(
            "abc",
            "def",
          ), bp)).toBe(`<div>abcdef</div>`);
        });

        test("element", () => {
          expect(renderWithBlueprint(h.div().c(
            h.span(),
          ), bp)).toBe(`<div><span></span></div>`);
        });

        test("elements", () => {
          expect(renderWithBlueprint(h.div().c(
            h.span(),
            h.strong(),
          ), bp)).toBe(`<div><span></span><strong></strong></div>`);
        });

        test("mixed elements", () => {
          expect(renderWithBlueprint(h.div().c(
            h.span(),
            "a",
            h.strong(),
          ), bp)).toBe(`<div><span></span>a<strong></strong></div>`);
        });
      });

      describe("blueprint with multiple keyed/non-keyed children elements", () => {
        const bp = createBlueprint(h.div().c(h.span().k(0), "a", h.strong().k(1)));
        test("basic text", () => {
          expect(renderWithBlueprint(h.div().c(
            "abc",
          ), bp)).toBe(`<div>abc</div>`);
        });

        test("basic number", () => {
          expect(renderWithBlueprint(h.div().c(
            123,
          ), bp)).toBe(`<div>123</div>`);
        });

        test("adjacent text nodes", () => {
          expect(renderWithBlueprint(h.div().c(
            "abc",
            "def",
          ), bp)).toBe(`<div>abcdef</div>`);
        });

        test("element", () => {
          expect(renderWithBlueprint(h.div().c(
            h.span(),
          ), bp)).toBe(`<div><span></span></div>`);
        });

        test("elements", () => {
          expect(renderWithBlueprint(h.div().c(
            h.span(),
            h.strong(),
          ), bp)).toBe(`<div><span></span><strong></strong></div>`);
        });

        test("mixed elements", () => {
          expect(renderWithBlueprint(h.div().c(
            h.span(),
            "a",
            h.strong(),
          ), bp)).toBe(`<div><span></span>a<strong></strong></div>`);
        });

        test("reorder elements 1", () => {
          expect(renderWithBlueprint(h.div().c(
            h.strong().k(1),
            "a",
            h.span().k(0),
          ), bp)).toBe(`<div><strong></strong>a<span></span></div>`);
        });
      });
    });
  });
});
