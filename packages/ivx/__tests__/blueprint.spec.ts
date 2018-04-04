import { BlueprintNode, createBlueprint } from "../src/blueprint";
import { VNode, VNodeFlags } from "../src/vnode";
import { component } from "../src/component";
import { connect, context } from "../src/vnode_factories";
import * as h from "./utils/html";

const SRC = component((child: VNode<any>) => child);

/**
 * Child from context.
 */
const cc = connect(
  function (props: { child: VNode<any> }) {
    return props.child;
  },
  function (prev, props, ctx: { child: VNode<any> }) {
    const child = ctx.child;
    if (prev && prev.child === child) {
      return prev;
    }
    return { child };
  },
);

/**
 * Child from props.
 */
const ccp = connect(
  function (props: { child: VNode<any> }) {
    return props.child;
  },
  function (prev, child: VNode<any>) {
    return { child };
  },
);

class BlueprintObserver {
  node: BlueprintNode;
  parent: BlueprintNode | undefined;
  childrenIndex: number;

  constructor(node: BlueprintNode, parent?: BlueprintNode, childrenIndex = -1) {
    this.node = node;
    this.parent = parent;
    this.childrenIndex = childrenIndex;
  }

  firstChild() {
    if (this.node.children !== null) {
      if (Array.isArray(this.node.children)) {
        return new BlueprintObserver(this.node.children[0], this.node, 0);
      } else if (typeof this.node.children !== "string") {
        return new BlueprintObserver(this.node.children as BlueprintNode, this.node);
      }
    }

    throw Error("Blueprint doesn't have any children.");
  }

  nextSibling() {
    if (this.childrenIndex > -1) {
      const nextIndex = this.childrenIndex + 1;
      return new BlueprintObserver(
        (this.parent!.children as BlueprintNode[])[nextIndex],
        this.parent,
        nextIndex,
      );
    }

    throw new Error("Blueprint node doesn't have next sibling.");
  }
}

function observeBlueprint(node: BlueprintNode) {
  return new BlueprintObserver(node);
}

function _createBlueprintIndex(index: Set<BlueprintNode>, node: BlueprintNode) {
  index.add(node);
  if (node.children !== null) {
    if (Array.isArray(node.children)) {
      for (const child of node.children) {
        _createBlueprintIndex(index, child);
      }
    } else if (typeof node.children !== "string") {
      _createBlueprintIndex(index, node.children as BlueprintNode);
    }
  }
}

function createBlueprintIndex(node: BlueprintNode) {
  const index = new Set<BlueprintNode>();
  _createBlueprintIndex(index, node);
  return index;
}

describe("blueprint", () => {
  describe("create", () => {
    test(`abc`, () => {
      const bp = observeBlueprint(createBlueprint(h.t("abc")));

      expect(bp.node.string).toBe(`abc`);
      expect((bp.node.flags & VNodeFlags.Text) !== 0).toBeTruthy();
      expect(bp.node.vnode._children).toBe(`abc`);

    });

    test(`<div>`, () => {
      const bp = createBlueprint(h.div());
      expect(bp.string).toBe(`<div>`);
    });

    test(`<div class="abc">`, () => {
      const bp = createBlueprint(h.div("abc"));
      expect(bp.string).toBe(`<div class="abc">`);
    });

    test(`<div id="123">`, () => {
      const bp = createBlueprint(h.div().a({ id: "123" }));
      expect(bp.string).toBe(`<div id="123">`);
    });

    test(`<div id="123" title="qwe">`, () => {
      const bp = createBlueprint(h.div().a({ id: "123", title: "qwe" }));
      expect(bp.string).toBe(`<div id="123" title="qwe">`);
    });

    test(`<div class="abc" id="123">`, () => {
      const bp = createBlueprint(h.div("abc").a({ id: "123" }));
      expect(bp.string).toBe(`<div class="abc" id="123">`);
    });

    test(`<div style="color:green">`, () => {
      const bp = createBlueprint(h.div().s({ color: "green" }));
      expect(bp.string).toBe(`<div style="color:green">`);
    });

    test(`<div style="color:green;font-size:1">`, () => {
      const bp = createBlueprint(h.div().s({ color: "green", "font-size": 1 }));
      expect(bp.string).toBe(`<div style="color:green;font-size:1">`);
    });

    test(`<div class="abc" style="color:green">`, () => {
      const bp = createBlueprint(h.div("abc").s({ color: "green" }));
      expect(bp.string).toBe(`<div class="abc" style="color:green">`);
    });

    test(`<div id="123" style="color:green">`, () => {
      const bp = createBlueprint(h.div().a({ id: "123" }).s({ color: "green" }));
      expect(bp.string).toBe(`<div id="123" style="color:green">`);
    });

    test(`<div class="abc" id="123" style="color:green">`, () => {
      const bp = createBlueprint(h.div("abc").a({ id: "123" }).s({ color: "green" }));
      expect(bp.string).toBe(`<div class="abc" id="123" style="color:green">`);
    });

    test(`<C><div><C>`, () => {
      const bp = createBlueprint(SRC(h.div()));
      expect(bp.string).toBe(`<div></div>`);
    });

    test(`<C><C><div></C><C>`, () => {
      const bp = observeBlueprint(createBlueprint(SRC(SRC(h.div()))));
      expect(bp.node.string).toBe(`<div></div>`);
      expect(bp.firstChild().node.string).toBe(`<div></div>`);
    });

    test(`<C><div><C><span></C></div><C>`, () => {
      const bp = observeBlueprint(createBlueprint(SRC(h.div().c(SRC(h.span())))));
      expect(bp.node.string).toBe(`<div><span></span></div>`);

      expect(bp.firstChild().firstChild().node.string).toBe(`<span></span>`);
    });

    test(`<ctx><div></ctx>`, () => {
      const bp = observeBlueprint(createBlueprint(context({}, h.div())));
      expect(bp.firstChild().node.string).toBe(`<div>`);
    });

    test(`<span><cc></span>`, () => {
      const ctx = { child: h.strong() };
      const bp = observeBlueprint(createBlueprint(h.div().c(
        context(ctx, h.span().c(cc())),
      )));
      expect(bp.node.string).toBe(`<div>`);

      expect(bp.firstChild().firstChild().node.string).toBe(`<span>`);
      expect(bp.firstChild().firstChild().firstChild().firstChild().node.string).toBe(`<strong>`);
    });

    test(`<span><ccp></span>`, () => {
      const bp = observeBlueprint(createBlueprint(h.div().c(
        h.span().c(ccp(h.strong())),
      )));
      expect(bp.node.string).toBe(`<div>`);

      expect(bp.firstChild().node.string).toBe(`<span>`);
      expect(bp.firstChild().firstChild().firstChild().node.string).toBe(`<strong>`);
    });

    test(`unsafeHTML shouldn't be escaped`, () => {
      const bp = createBlueprint(h.div().unsafeHTML("<&"));
      expect(bp.children).toBe("<&");
    });
  });

  describe("reuse nodes", () => {
    describe("basics", () => {
      test(`identical`, () => {
        const n = h.div();
        const a = createBlueprint(n);
        const b = createBlueprint(n, undefined, a);
        expect(a).toBe(b);
        const bp = observeBlueprint(b);
        expect((bp.node.flags & VNodeFlags.DeepConnect) !== 0).toBeFalsy();
      });

      test(`div`, () => {
        const a = createBlueprint(h.div());
        const b = createBlueprint(h.div(), undefined, a);
        expect(a).toBe(b);
        expect((b.flags & VNodeFlags.DeepConnect) !== 0).toBeFalsy();
      });

      test(`div with same class`, () => {
        const a = createBlueprint(h.div("abc"));
        const b = createBlueprint(h.div("abc"), undefined, a);
        expect(a).toBe(b);
      });

      test(`div with diff class`, () => {
        const a = createBlueprint(h.div("abc"));
        const b = createBlueprint(h.div("def"), undefined, a);
        expect(a).not.toBe(b);
      });

      test(`div with same props`, () => {
        const a = createBlueprint(h.div().a({ a: "123" }));
        const b = createBlueprint(h.div().a({ a: "123" }), undefined, a);
        expect(a).toBe(b);
      });

      test(`div with diff props`, () => {
        const a = createBlueprint(h.div().a({ a: "123" }));
        const b = createBlueprint(h.div().a({ a: "456" }), undefined, a);
        expect(a).not.toBe(b);
      });

      test(`div with same style`, () => {
        const a = createBlueprint(h.div().s({ color: "green" }));
        const b = createBlueprint(h.div().s({ color: "green" }), undefined, a);
        expect(a).toBe(b);
      });

      test(`div with diff style`, () => {
        const a = createBlueprint(h.div().s({ color: "green" }));
        const b = createBlueprint(h.div().s({ color: "red" }), undefined, a);
        expect(a).not.toBe(b);
      });

      test(`div with same class/props diff style`, () => {
        const a = createBlueprint(h.div("abc").a({ a: "123" }).s({ color: "green" }));
        const b = createBlueprint(h.div("abc").a({ a: "123" }).s({ color: "red" }), undefined, a);
        expect(a).not.toBe(b);
      });

      test(`div with same class/style diff props`, () => {
        const a = createBlueprint(h.div("abc").a({ a: "123" }).s({ color: "green" }));
        const b = createBlueprint(h.div("abc").a({ a: "456" }).s({ color: "green" }), undefined, a);
        expect(a).not.toBe(b);
      });

      test(`div with same props/style diff class`, () => {
        const a = createBlueprint(h.div("abc").a({ a: "123" }).s({ color: "green" }));
        const b = createBlueprint(h.div("def").a({ a: "123" }).s({ color: "green" }), undefined, a);
        expect(a).not.toBe(b);
      });

      test(`same children`, () => {
        const a = createBlueprint(h.div().c(h.span()));
        const b = createBlueprint(h.div().c(h.span()), undefined, a);
        expect(a).toBe(b);
        expect((observeBlueprint(b).node.flags & VNodeFlags.DeepConnect) !== 0).toBeFalsy();
      });

      test(`same multiple children`, () => {
        const a = createBlueprint(h.div().c(h.span(), h.div(), h.span()));
        const b = createBlueprint(h.div().c(h.span(), h.div(), h.span()), undefined, a);
        expect(a).toBe(b);
        expect((observeBlueprint(b).node.flags & VNodeFlags.DeepConnect) !== 0).toBeFalsy();
      });

      test(`diff children`, () => {
        const a = createBlueprint(h.div().c(h.span()));
        const b = createBlueprint(h.div().c(h.div()), undefined, a);
        expect(a).not.toBe(b);
        expect((observeBlueprint(b).node.flags & VNodeFlags.DeepConnect) !== 0).toBeFalsy();
      });

      test(`diff multiple children`, () => {
        const a = createBlueprint(h.div().c(h.span(), h.div(), h.span()));
        const b = createBlueprint(h.div().c(h.span(), h.span(), h.span()), undefined, a);
        expect(a).not.toBe(b);
        expect((observeBlueprint(b).node.flags & VNodeFlags.DeepConnect) !== 0).toBeFalsy();
      });
    });

    describe("deep reuse", () => {
      test(`1`, () => {
        const a = createBlueprint(h.div().c(h.span(), h.div(), h.span()));
        const b = createBlueprint(h.div().c(h.span(), h.span(), h.span()), undefined, a);
        const index = createBlueprintIndex(a);
        const o = observeBlueprint(b);
        const c1 = o.firstChild();
        const c2 = c1.nextSibling();
        const c3 = c2.nextSibling();

        expect(index.has(c1.node)).toBeTruthy();
        expect(index.has(c2.node)).toBeFalsy();
        expect(index.has(c3.node)).toBeTruthy();
      });

      test(`children keys`, () => {
        const a = createBlueprint(h.div().c(h.span().k("a"), h.div().k("b"), h.span().k("c")));
        const b = createBlueprint(
          h.div().c(h.span().k("c"), h.span().k("a"), h.div().k("b")),
          undefined,
          a,
        );
        const index = createBlueprintIndex(a);
        const o = observeBlueprint(b);
        const c1 = o.firstChild();
        const c2 = c1.nextSibling();
        const c3 = c2.nextSibling();

        expect(index.has(c1.node)).toBeTruthy();
        expect(index.has(c2.node)).toBeTruthy();
        expect(index.has(c3.node)).toBeTruthy();
      });
    });
  });

  describe("deep connect", () => {
    test(`abc`, () => {
      const bp = createBlueprint(h.t("abc"));
      expect((bp.flags & VNodeFlags.DeepConnect) !== 0).toBeFalsy();
    });

    test(`<div>`, () => {
      const bp = createBlueprint(h.div());
      expect((bp.flags & VNodeFlags.DeepConnect) !== 0).toBeFalsy();
    });

    test(`<C><div></C>`, () => {
      const bp = createBlueprint(SRC(h.div()));
      expect((bp.flags & VNodeFlags.DeepConnect) !== 0).toBeFalsy();
    });

    test(`<ctx><div></ctx>`, () => {
      const bp = observeBlueprint(createBlueprint(context({}, h.div())));
      expect((bp.node.flags & VNodeFlags.DeepConnect) !== 0).toBeFalsy();

      const firstChild = bp.firstChild();
      expect((firstChild.node.flags & VNodeFlags.DeepConnect) !== 0).toBeFalsy();
    });

    test(`<div><cc></div>`, () => {
      const ctx = { child: h.div() };
      const bp = observeBlueprint(createBlueprint(h.div().c(
        context(ctx, h.div().c(cc())),
      )));

      expect((bp.node.flags & VNodeFlags.DeepConnect) !== 0).toBeTruthy();
      expect((bp.firstChild().node.flags & VNodeFlags.DeepConnect) !== 0).toBeTruthy();
      expect((bp.firstChild().firstChild().node.flags & VNodeFlags.DeepConnect) !== 0).toBeTruthy();
      expect((bp.firstChild().firstChild().firstChild().node.flags & VNodeFlags.DeepConnect) !== 0).toBeTruthy();
      expect((bp.firstChild().firstChild().firstChild().firstChild().node.flags & VNodeFlags.DeepConnect) !== 0)
        .toBeFalsy();
    });

    test(`<div><div></div><cc></div>`, () => {
      const ctx = { child: h.div() };
      const bp = createBlueprint(h.div().c(
        context(ctx, h.div().c(h.div(), cc())),
      ));

      expect((bp.flags & VNodeFlags.DeepConnect) !== 0).toBeTruthy();
    });
  });
});
