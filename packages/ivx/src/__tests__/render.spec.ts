import { VNode, component, render, createBlueprint, renderWithBlueprint } from "ivx";
import { div, span, strong, textarea } from "ivx-html";

interface TestComponentOptions {
  wrapDepth?: number;
}

const STC = component((props: TestComponentOptions): VNode<any> => {
  const { wrapDepth } = props;

  if (wrapDepth) {
    return STC({ wrapDepth: wrapDepth - 1 });
  }

  return div();
});

describe("render", () => {
  test("<div>", () => {
    expect(render(div())).toBe("<div></div>");
  });

  test("<span>", () => {
    expect(render(span())).toBe("<span></span>");
  });

  test("<div> (null props)", () => {
    expect(render(div().a(null))).toBe("<div></div>");
  });

  test("<div> ({} props)", () => {
    expect(render(div().a({}))).toBe("<div></div>");
  });

  test("<div tabIndex='1'>", () => {
    expect(render(div().a({ tabIndex: 1 }))).toBe(`<div tabIndex="1"></div>`);
  });

  test("<div tabIndex='1' title='2'>", () => {
    expect(render(div().a({ tabIndex: 1, title: "2" }))).toBe(`<div tabIndex="1" title="2"></div>`);
  });

  test("<div data-abc='a'", () => {
    expect(render(div().a({ "data-abc": "a" }))).toBe(`<div data-abc="a"></div>`);
  });

  test("<div aria-type='button'", () => {
    expect(render(div().a({ "aria-type": "button" }))).toBe(`<div aria-type="button"></div>`);
  });

  test("<div boolean=false", () => {
    expect(render(div().a({ boolean: false }))).toBe(`<div></div>`);
  });

  test("<div boolean=true", () => {
    expect(render(div().a({ boolean: true }))).toBe(`<div boolean></div>`);
  });

  test("<div class=''>", () => {
    expect(render(div(""))).toBe(`<div class=""></div>`);
  });

  test("<div class='a'>", () => {
    expect(render(div("a"))).toBe(`<div class="a"></div>`);
  });

  test("<div class='a b'>", () => {
    expect(render(div("a b"))).toBe(`<div class="a b"></div>`);
  });

  test("<div style=null>", () => {
    expect(render(div().s(null))).toBe(`<div></div>`);
  });

  test("<div style={}>", () => {
    expect(render(div().s({}))).toBe(`<div></div>`);
  });

  test("<div style={top: 10px}>", () => {
    expect(render(div().s({ top: "10px" }))).toBe(`<div style="top:10px"></div>`);
  });

  test("<div style={top: 10px; left: 20px}>", () => {
    expect(render(div().s({ top: "10px", left: "20px" })))
      .toBe(`<div style="top:10px;left:20px"></div>`);
  });

  test("<div></div> (null children)", () => {
    expect(render(div().c(null))).toBe(`<div></div>`);
  });

  test("<div>'abc'</div>", () => {
    expect(render(div().c("abc"))).toBe(`<div>abc</div>`);
  });

  test("<div>10</div>", () => {
    expect(render(div().c(10))).toBe(`<div>10</div>`);
  });

  test("<div><span></div>", () => {
    expect(render(div().c(span()))).toBe(`<div><span></span></div>`);
  });

  test("<div>[]</div>", () => {
    expect(render(div().c([]))).toBe(`<div></div>`);
  });

  test("<div><span></div>", () => {
    expect(render(div().c(span()))).toBe(`<div><span></span></div>`);
  });

  test("<div><span>, <strong></div>", () => {
    expect(render(div().c([span(), strong()])))
      .toBe(`<div><span></span><strong></strong></div>`);
  });

  test("<div>" +
    "  <div>'hello'</div>," +
    "  <div><span>'world'</span>, <div><span></div></div>," +
    "  <div><div></div>," +
    "  <div>" +
    "</div>", () => {
      expect(render(div().c([
        div().c("hello"),
        div().c([span().c("world"), div().c(span())]),
        div().c(div()),
        div(),
      ]))).toBe(`<div><div>hello</div><div><span>world</span><div><span></span></div></div><div><div></div>` +
        `</div><div></div></div>`);
    });

  describe("children normalization", () => {
    test("<div><span>, [<strong>, <a>], <span></div>", () => {
      expect(render(div().c([span(), [strong(), div()], span()])))
        .toBe(`<div><span></span><strong></strong><div></div><span></span></div>`);
    });

    test("<div>'abc', []</div>", () => {
      expect(render(div().c(["abc", []]))).toBe(`<div>abc</div>`);
    });

    test("<div><div>, null, <span></div>", () => {
      expect(render(div().c([div(), null, span()])))
        .toBe(`<div><div></div><span></span></div>`);
    });

    test("<div><div>, 'abc', <span></div>", () => {
      expect(render(div().c([div(), "abc", span()])))
        .toBe(`<div><div></div>abc<span></span></div>`);
    });

    test("<div><div>, 123, <span></div>", () => {
      expect(render(div().c([div(), 123, span()])))
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
        expect(render(textarea().c("hello"))).toBe(`<textarea>hello</textarea>`);
      });

      test("single newline", () => {
        expect(render(textarea().c("\n"))).toBe(`<textarea>\n\n</textarea>`);
      });

      test("double newline", () => {
        expect(render(textarea().c("\n\n"))).toBe(`<textarea>\n\n\n</textarea>`);
      });
    });
  });

  describe("escape", () => {
    test("attribute values", () => {
      expect(render(div().a({ id: `"&` }))).toBe(`<div id="&quot;&amp;"></div>`);
    });

    test("style values", () => {
      expect(render(div().s({ color: `"&` }))).toBe(`<div style="color:&quot;&amp;"></div>`);
    });

    test("single-child text", () => {
      expect(render(div().c(`<&`))).toBe(`<div>&lt;&amp;</div>`);
    });
  });

  describe("diff with blueprint", () => {
    describe("class", () => {
      test(`null => "a"`, () => {
        const bp = createBlueprint(div());
        expect(renderWithBlueprint(div("a"), bp)).toBe(`<div class="a"></div>`);
      });

      test(`"a" => "a"`, () => {
        const bp = createBlueprint(div("a"));
        expect(renderWithBlueprint(div("a"), bp)).toBe(`<div class="a"></div>`);
      });

      test(`"b" => "a"`, () => {
        const bp = createBlueprint(div("b"));
        expect(renderWithBlueprint(div("a"), bp)).toBe(`<div class="a"></div>`);
      });
    });

    describe("props", () => {
      test(`null => {}`, () => {
        const bp = createBlueprint(div());
        expect(renderWithBlueprint(div().a({}), bp)).toBe(`<div></div>`);
      });

      test(`{} => null`, () => {
        const bp = createBlueprint(div().a({}));
        expect(renderWithBlueprint(div(), bp)).toBe(`<div></div>`);
      });

      test(`{} => {}`, () => {
        const bp = createBlueprint(div().a({}));
        expect(renderWithBlueprint(div().a({}), bp)).toBe(`<div></div>`);
      });

      test(`null => { title: "abc" }`, () => {
        const bp = createBlueprint(div());
        expect(renderWithBlueprint(div().a({ title: "abc" }), bp)).toBe(`<div title="abc"></div>`);
      });

      test(`{} => { title: "abc" }`, () => {
        const bp = createBlueprint(div().a({}));
        expect(renderWithBlueprint(div().a({ title: "abc" }), bp)).toBe(`<div title="abc"></div>`);
      });

      test(`{ title: "abc" } => { title: "abc" }`, () => {
        const bp = createBlueprint(div().a({ title: "abc" }));
        expect(renderWithBlueprint(div().a({ title: "abc" }), bp)).toBe(`<div title="abc"></div>`);
      });

      test(`{ title: "a" } => { title: "abc" }`, () => {
        const bp = createBlueprint(div().a({ title: "a" }));
        expect(renderWithBlueprint(div().a({ title: "abc" }), bp)).toBe(`<div title="abc"></div>`);
      });
    });

    describe("style", () => {
      test(`null => {}`, () => {
        const bp = createBlueprint(div());
        expect(renderWithBlueprint(div().s({}), bp)).toBe(`<div></div>`);
      });

      test(`{} => null`, () => {
        const bp = createBlueprint(div().s({}));
        expect(renderWithBlueprint(div(), bp)).toBe(`<div></div>`);
      });

      test(`{} => {}`, () => {
        const bp = createBlueprint(div().s({}));
        expect(renderWithBlueprint(div().s({}), bp)).toBe(`<div></div>`);
      });

      test(`null => { color: "green" }`, () => {
        const bp = createBlueprint(div());
        expect(renderWithBlueprint(div().s({ color: "green" }), bp))
          .toBe(`<div style="color:green"></div>`);
      });

      test(`{} => { color: "green" }`, () => {
        const bp = createBlueprint(div().s({}));
        expect(renderWithBlueprint(div().s({ color: "green" }), bp))
          .toBe(`<div style="color:green"></div>`);
      });

      test(`{ color: "green" } => { color: "green" }`, () => {
        const bp = createBlueprint(div().s({ color: "green" }));
        expect(renderWithBlueprint(div().s({ color: "green" }), bp))
          .toBe(`<div style="color:green"></div>`);
      });

      test(`{color: "red" } => { color: "green" }`, () => {
        const bp = createBlueprint(div().s({ color: "red" }));
        expect(renderWithBlueprint(div().s({ color: "green" }), bp))
          .toBe(`<div style="color:green"></div>`);
      });
    });

    describe("children", () => {
      describe("empty blueprint", () => {
        const bp = createBlueprint(div());
        test("basic text", () => {
          expect(renderWithBlueprint(div().c(
            "abc",
          ), bp)).toBe(`<div>abc</div>`);
        });

        test("basic number", () => {
          expect(renderWithBlueprint(div().c(
            123,
          ), bp)).toBe(`<div>123</div>`);
        });

        test("adjacent text nodes", () => {
          expect(renderWithBlueprint(div().c(["abc", "def"]), bp)).toBe(`<div>abcdef</div>`);
        });

        test("element", () => {
          expect(renderWithBlueprint(div().c(span()), bp)).toBe(`<div><span></span></div>`);
        });

        test("elements", () => {
          expect(renderWithBlueprint(div().c([span(), strong()]), bp))
            .toBe(`<div><span></span><strong></strong></div>`);
        });

        test("mixed elements", () => {
          expect(renderWithBlueprint(div().c([span(), "a", strong()]), bp))
            .toBe(`<div><span></span>a<strong></strong></div>`);
        });
      });

      describe("blueprint with basic text", () => {
        const bp = createBlueprint(div().c("a"));
        test("basic text", () => {
          expect(renderWithBlueprint(div().c("abc"), bp)).toBe(`<div>abc</div>`);
        });

        test("basic number", () => {
          expect(renderWithBlueprint(div().c(123), bp)).toBe(`<div>123</div>`);
        });

        test("adjacent text nodes", () => {
          expect(renderWithBlueprint(div().c(["abc", "def"]), bp)).toBe(`<div>abcdef</div>`);
        });

        test("element", () => {
          expect(renderWithBlueprint(div().c(span()), bp)).toBe(`<div><span></span></div>`);
        });

        test("elements", () => {
          expect(renderWithBlueprint(div().c([span(), strong()]), bp))
            .toBe(`<div><span></span><strong></strong></div>`);
        });

        test("mixed elements", () => {
          expect(renderWithBlueprint(div().c([span(), "a", strong()]), bp))
            .toBe(`<div><span></span>a<strong></strong></div>`);
        });
      });

      describe("blueprint with children element", () => {
        const bp = createBlueprint(div().c(span()));
        test("basic text", () => {
          expect(renderWithBlueprint(div().c("abc"), bp)).toBe(`<div>abc</div>`);
        });

        test("basic number", () => {
          expect(renderWithBlueprint(div().c(123), bp)).toBe(`<div>123</div>`);
        });

        test("adjacent text nodes", () => {
          expect(renderWithBlueprint(div().c(["abc", "def"]), bp)).toBe(`<div>abcdef</div>`);
        });

        test("element", () => {
          expect(renderWithBlueprint(div().c(span()), bp)).toBe(`<div><span></span></div>`);
        });

        test("elements", () => {
          expect(renderWithBlueprint(div().c([span(), strong()]), bp))
            .toBe(`<div><span></span><strong></strong></div>`);
        });

        test("mixed elements", () => {
          expect(renderWithBlueprint(div().c([span(), "a", strong()]), bp))
            .toBe(`<div><span></span>a<strong></strong></div>`);
        });
      });

      describe("blueprint with multiple children elements", () => {
        const bp = createBlueprint(div().c([span(), strong()]));
        test("basic text", () => {
          expect(renderWithBlueprint(div().c("abc"), bp)).toBe(`<div>abc</div>`);
        });

        test("basic number", () => {
          expect(renderWithBlueprint(div().c(123), bp)).toBe(`<div>123</div>`);
        });

        test("adjacent text nodes", () => {
          expect(renderWithBlueprint(div().c(["abc", "def"]), bp)).toBe(`<div>abcdef</div>`);
        });

        test("element", () => {
          expect(renderWithBlueprint(div().c(span()), bp)).toBe(`<div><span></span></div>`);
        });

        test("elements", () => {
          expect(renderWithBlueprint(div().c([span(), strong()]), bp))
            .toBe(`<div><span></span><strong></strong></div>`);
        });

        test("mixed elements", () => {
          expect(renderWithBlueprint(div().c([span(), "a", strong()]), bp))
            .toBe(`<div><span></span>a<strong></strong></div>`);
        });
      });

    });
  });
});
