import { BlueprintNode, createBlueprint, BlueprintNodeFlags } from "../src/blueprint";
import { VNode, component, connect, context } from "../src/vnode";
import * as h from "./utils/html";

const SRC = component((child: VNode<any>) => child);

/**
 * Child from context.
 */
const CC = connect<{ child: VNode<any> }, { child: VNode<any> }>(
  (prev, props, ctx) => {
    const child = ctx.child;
    if (prev && prev.child === child) {
      return prev;
    }
    return { child };
  },
  (props) => props.child,
);

/**
 * Child from props.
 */
const CCP = connect<{ child: VNode<any> }, VNode<any>, {}>(
  (prev, child, ctx) => ({ child }),
  (props) => props.child,
);

describe("blueprint", () => {
  describe("create", () => {
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
      expect(bp.flags).toBe(BlueprintNodeFlags.VNode);
      expect(bp.children).toBeInstanceOf(BlueprintNode);
      expect((bp.children as BlueprintNode).string).toBe(`<div>`);
      expect((bp.children as BlueprintNode).flags).toBe(BlueprintNodeFlags.VNode);
    });

    test(`<C><C><div></C><C>`, () => {
      const bp = createBlueprint(SRC(SRC(h.div())));
      expect(bp.string).toBe(`<div></div>`);
      expect(bp.children).toBeInstanceOf(BlueprintNode);
      expect((bp.children as BlueprintNode).string).toBe(`<div></div>`);
    });

    test(`<C><div><C><span></C></div><C>`, () => {
      const bp = createBlueprint(SRC(h.div().c(SRC(h.span()))));
      expect(bp.string).toBe(`<div><span></span></div>`);
    });

    test(`<ctx><div></ctx>`, () => {
      const bp = createBlueprint(context({}, h.div()));
      expect(bp.string).toBe(`<div></div>`);
    });

    test(`<span><cc></span>`, () => {
      const ctx = { child: h.strong() };
      const bp = createBlueprint(h.div().c(context(ctx, h.span().c(CC()))));
      expect((bp as any).children.children.children.children.string).toBe(`<strong>`);
    });

    test(`<span><ccp></span>`, () => {
      const bp = createBlueprint(h.div().c(h.span().c(CCP(h.strong()))));
      expect((bp as any).children.children.children.string).toBe(`<strong>`);
    });
  });

  describe("deep connect", () => {
    test(`<div>`, () => {
      const bp = createBlueprint(h.div());
      expect((bp.flags & BlueprintNodeFlags.DeepConnect) !== 0).toBeFalsy();
    });

    test(`<C><div></C>`, () => {
      const bp = createBlueprint(SRC(h.div()));
      expect((bp.flags & BlueprintNodeFlags.DeepConnect) !== 0).toBeFalsy();
    });

    test(`<ctx><div></ctx>`, () => {
      const bp = createBlueprint(context({}, h.div()));
      expect((bp.flags & BlueprintNodeFlags.DeepConnect) !== 0).toBeFalsy();
    });

    test(`<div><div></div><cc></div>`, () => {
      const ctx = { child: h.div() };
      const bp = createBlueprint(SRC(h.div().c(context(ctx, h.div().c([h.div(), CC()])))));
      expect((bp.flags & BlueprintNodeFlags.DeepConnect) !== 0).toBeTruthy();
    });
  });
});
