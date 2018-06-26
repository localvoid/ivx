import { VNode, VNodeFlags } from "ivx";

export const DOCTYPE = "<!doctype html>";

const enum TagId {
  A = 1,
  Abbr = 2,
  Address = 3,
  Area = 4,
  Article = 5,
  Aside = 6,
  B = 7,
  Base = 8,
  Bdo = 9,
  Blockquote = 10,
  Body = 11,
  Br = 12,
  Button = 13,
  Canvas = 14,
  Caption = 15,
  Cite = 16,
  Code = 17,
  Col = 18,
  Colgroup = 19,
  Dd = 20,
  Del = 21,
  Dfn = 22,
  Div = 23,
  Dl = 24,
  Dt = 25,
  Em = 26,
  Fieldset = 27,
  Figcaption = 28,
  Figure = 29,
  Footer = 30,
  Form = 31,
  H1 = 32,
  H2 = 33,
  H3 = 34,
  H4 = 35,
  H5 = 36,
  H6 = 37,
  Head = 38,
  Header = 39,
  Hgroup = 40,
  Hr = 41,
  Html = 42,
  I = 43,
  Iframe = 44,
  Img = 45,
  Input = 46,
  Ins = 47,
  Kbd = 48,
  Label = 49,
  Legend = 50,
  Li = 51,
  Link = 52,
  Main = 53,
  Map = 54,
  Mark = 55,
  Menu = 56,
  Meta = 57,
  Meter = 58,
  Nav = 59,
  Noscript = 60,
  Ol = 61,
  Optgroup = 62,
  Option = 63,
  P = 64,
  Picture = 65,
  Pre = 66,
  Progress = 67,
  Q = 68,
  Rt = 69,
  Ruby = 70,
  S = 71,
  Samp = 72,
  Script = 73,
  Section = 74,
  Select = 75,
  Source = 76,
  Span = 77,
  Strong = 78,
  Style = 79,
  Sub = 80,
  Sup = 81,
  Table = 82,
  Tbody = 83,
  Td = 84,
  Template = 85,
  Textarea = 86,
  Tfoot = 87,
  Th = 88,
  Thead = 89,
  Time = 90,
  Title = 91,
  Tr = 92,
  Track = 93,
  U = 94,
  Ul = 95,
  Wbr = 96,
  Audio = 97,
  Video = 98,
}

/**
 * Creates Virtual DOM HTML element <a>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <a>
 */
export function a(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.A << VNodeFlags.UniqueIdOffset),
    "<a",
    attrs,
    className,
    null,
    css,
    "</a>",
  );
}

/**
 * Creates Virtual DOM HTML element <abbr>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <abbr>
 */
export function abbr(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Abbr << VNodeFlags.UniqueIdOffset),
    "<abbr",
    attrs,
    className,
    null,
    css,
    "</abbr>",
  );
}

/**
 * Creates Virtual DOM HTML element <address>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <address>
 */
export function address(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Address << VNodeFlags.UniqueIdOffset),
    "<address",
    attrs,
    className,
    null,
    css,
    "</address>",
  );
}

/**
 * Creates Virtual DOM HTML element <article>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <article>
 */
export function article(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Article << VNodeFlags.UniqueIdOffset),
    "<article",
    attrs,
    className,
    null,
    css,
    "</article>",
  );
}

/**
 * Creates Virtual DOM HTML element <aside>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <aside>
 */
export function aside(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Aside << VNodeFlags.UniqueIdOffset),
    "<aside",
    attrs,
    className,
    null,
    css,
    "</aside>",
  );
}

/**
 * Creates Virtual DOM HTML element <b>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <b>
 */
export function b(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.B << VNodeFlags.UniqueIdOffset),
    "<b",
    attrs,
    className,
    null,
    css,
    "</b>",
  );
}

/**
 * Creates Virtual DOM HTML element <base>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <base>
 */
export function base(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Base << VNodeFlags.UniqueIdOffset),
    "<base",
    attrs,
    className,
    null,
    css,
    null,
  );
}

/**
 * Creates Virtual DOM HTML element <bdo>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <bdo>
 */
export function bdo(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Bdo << VNodeFlags.UniqueIdOffset),
    "<bdo",
    attrs,
    className,
    null,
    css,
    "</bdo>",
  );
}

/**
 * Creates Virtual DOM HTML element <blockquote>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <blockquote>
 */
export function blockquote(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Blockquote << VNodeFlags.UniqueIdOffset),
    "<blockquote",
    attrs,
    className,
    null,
    css,
    "</blockquote>",
  );
}

/**
 * Creates Virtual DOM HTML element <body>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <body>
 */
export function body(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Body << VNodeFlags.UniqueIdOffset),
    "<body",
    attrs,
    className,
    null,
    css,
    "</body>",
  );
}

/**
 * Creates Virtual DOM HTML element <br>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <br>
 */
export function br(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Br << VNodeFlags.UniqueIdOffset),
    "<br",
    attrs,
    className,
    null,
    css,
    null,
  );
}

/**
 * Creates Virtual DOM HTML element <button>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <button>
 */
export function button(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Button << VNodeFlags.UniqueIdOffset),
    "<button",
    attrs,
    className,
    null,
    css,
    "</button>",
  );
}

/**
 * Creates Virtual DOM HTML element <canvas>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <canvas>
 */
export function canvas(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Canvas << VNodeFlags.UniqueIdOffset),
    "<canvas",
    attrs,
    className,
    null,
    css,
    "</canvas>",
  );
}

/**
 * Creates Virtual DOM HTML element <caption>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <caption>
 */
export function caption(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Caption << VNodeFlags.UniqueIdOffset),
    "<caption",
    attrs,
    className,
    null,
    css,
    "</caption>",
  );
}

/**
 * Creates Virtual DOM HTML element <cite>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <cite>
 */
export function cite(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Cite << VNodeFlags.UniqueIdOffset),
    "<cite",
    attrs,
    className,
    null,
    css,
    "</cite>",
  );
}

/**
 * Creates Virtual DOM HTML element <code>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <code>
 */
export function code(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Code << VNodeFlags.UniqueIdOffset),
    "<code",
    attrs,
    className,
    null,
    css,
    "</code>",
  );
}

/**
 * Creates Virtual DOM HTML element <col>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <col>
 */
export function col(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Col << VNodeFlags.UniqueIdOffset),
    "<col",
    attrs,
    className,
    null,
    css,
    null,
  );
}

/**
 * Creates Virtual DOM HTML element <colgroup>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <colgroup>
 */
export function colgroup(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Colgroup << VNodeFlags.UniqueIdOffset),
    "<colgroup",
    attrs,
    className,
    null,
    css,
    "</colgroup>",
  );
}

/**
 * Creates Virtual DOM HTML element <dd>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <dd>
 */
export function dd(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Dd << VNodeFlags.UniqueIdOffset),
    "<dd",
    attrs,
    className,
    null,
    css,
    "</dd>",
  );
}

/**
 * Creates Virtual DOM HTML element <del>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <del>
 */
export function del(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Del << VNodeFlags.UniqueIdOffset),
    "<del",
    attrs,
    className,
    null,
    css,
    "</del>",
  );
}

/**
 * Creates Virtual DOM HTML element <dfn>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <dfn>
 */
export function dfn(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Dfn << VNodeFlags.UniqueIdOffset),
    "<dfn",
    attrs,
    className,
    null,
    css,
    "</dfn>",
  );
}

/**
 * Creates Virtual DOM HTML element <div>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <div>
 */
export function div(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Div << VNodeFlags.UniqueIdOffset),
    "<div",
    attrs,
    className,
    null,
    css,
    "</div>",
  );
}

/**
 * Creates Virtual DOM HTML element <dl>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <dl>
 */
export function dl(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Dl << VNodeFlags.UniqueIdOffset),
    "<dl",
    attrs,
    className,
    null,
    css,
    "</dl>",
  );
}

/**
 * Creates Virtual DOM HTML element <dt>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <dt>
 */
export function dt(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Dt << VNodeFlags.UniqueIdOffset),
    "<dt",
    attrs,
    className,
    null,
    css,
    "</dt>",
  );
}

/**
 * Creates Virtual DOM HTML element <em>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <em>
 */
export function em(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Em << VNodeFlags.UniqueIdOffset),
    "<em",
    attrs,
    className,
    null,
    css,
    "</em>",
  );
}

/**
 * Creates Virtual DOM HTML element <fieldset>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <fieldset>
 */
export function fieldset(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Fieldset << VNodeFlags.UniqueIdOffset),
    "<fieldset",
    attrs,
    className,
    null,
    css,
    "</fieldset>",
  );
}

/**
 * Creates Virtual DOM HTML element <figcaption>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <figcaption>
 */
export function figcaption(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Figcaption << VNodeFlags.UniqueIdOffset),
    "<figcaption",
    attrs,
    className,
    null,
    css,
    "</figcaption>",
  );
}

/**
 * Creates Virtual DOM HTML element <figure>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <figure>
 */
export function figure(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Figure << VNodeFlags.UniqueIdOffset),
    "<figure",
    attrs,
    className,
    null,
    css,
    "</figure>",
  );
}

/**
 * Creates Virtual DOM HTML element <footer>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <footer>
 */
export function footer(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Footer << VNodeFlags.UniqueIdOffset),
    "<footer",
    attrs,
    className,
    null,
    css,
    "</footer>",
  );
}

/**
 * Creates Virtual DOM HTML element <h1>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <h1>
 */
export function h1(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.H1 << VNodeFlags.UniqueIdOffset),
    "<h1",
    attrs,
    className,
    null,
    css,
    "</h1>",
  );
}

/**
 * Creates Virtual DOM HTML element <h2>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h2}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <h2>
 */
export function h2(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.H2 << VNodeFlags.UniqueIdOffset),
    "<h2",
    attrs,
    className,
    null,
    css,
    "</h2>",
  );
}

/**
 * Creates Virtual DOM HTML element <h3>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h3}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <h3>
 */
export function h3(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.H3 << VNodeFlags.UniqueIdOffset),
    "<h3",
    attrs,
    className,
    null,
    css,
    "</h3>",
  );
}

/**
 * Creates Virtual DOM HTML element <h4>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h4}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <h4>
 */
export function h4(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.H4 << VNodeFlags.UniqueIdOffset),
    "<h4",
    attrs,
    className,
    null,
    css,
    "</h4>",
  );
}

/**
 * Creates Virtual DOM HTML element <h5>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h5}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <h5>
 */
export function h5(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.H5 << VNodeFlags.UniqueIdOffset),
    "<h5",
    attrs,
    className,
    null,
    css,
    "</h5>",
  );
}

/**
 * Creates Virtual DOM HTML element <h6>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h6}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <h6>
 */
export function h6(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.H6 << VNodeFlags.UniqueIdOffset),
    "<h6",
    attrs,
    className,
    null,
    css,
    "</h6>",
  );
}

/**
 * Creates Virtual DOM HTML element <head>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <head>
 */
export function head(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Head << VNodeFlags.UniqueIdOffset),
    "<head",
    attrs,
    className,
    null,
    css,
    "</head>",
  );
}

/**
 * Creates Virtual DOM HTML element <header>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <header>
 */
export function header(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Header << VNodeFlags.UniqueIdOffset),
    "<header",
    attrs,
    className,
    null,
    css,
    "</header>",
  );
}

/**
 * Creates Virtual DOM HTML element <hgroup>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <hgroup>
 */
export function hgroup(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Hgroup << VNodeFlags.UniqueIdOffset),
    "<hgroup",
    attrs,
    className,
    null,
    css,
    "</hgroup>",
  );
}

/**
 * Creates Virtual DOM HTML element <hr>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <hr>
 */
export function hr(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Hr << VNodeFlags.UniqueIdOffset),
    "<hr",
    attrs,
    className,
    null,
    css,
    null,
  );
}

/**
 * Creates Virtual DOM HTML element <html>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <html>
 */
export function html(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Html << VNodeFlags.UniqueIdOffset),
    "<html",
    attrs,
    className,
    null,
    css,
    "</html>",
  );
}

/**
 * Creates Virtual DOM HTML element <i>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <i>
 */
export function i(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.I << VNodeFlags.UniqueIdOffset),
    "<i",
    attrs,

    className,
    null,
    css,
    "</i>",
  );
}

/**
 * Creates Virtual DOM HTML element <iframe>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <iframe>
 */
export function iframe(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Iframe << VNodeFlags.UniqueIdOffset),
    "<iframe",
    attrs,
    className,
    null,
    css,
    "</iframe>",
  );
}

/**
 * Creates Virtual DOM HTML element <img>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <img>
 */
export function img(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Img << VNodeFlags.UniqueIdOffset),
    "<img",
    attrs,
    className,
    null,
    css,
    null,
  );
}

/**
 * Creates Virtual DOM HTML element <area>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <area>
 */
export function imgArea(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Area << VNodeFlags.UniqueIdOffset),
    "<area",
    attrs,
    className,
    null,
    css,
    null,
  );
}

/**
 * Creates Virtual DOM HTML element <map>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <map>
 */
export function imgMap(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Map << VNodeFlags.UniqueIdOffset),
    "<map",
    attrs,

    className,
    null,
    css,
    "</map>",
  );
}

/**
 * Creates Virtual DOM HTML element <ins>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <ins>
 */
export function ins(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Ins << VNodeFlags.UniqueIdOffset),
    "<ins",
    attrs,
    className,
    null,
    css,
    "</ins>",
  );
}

/**
 * Creates Virtual DOM HTML element <kbd>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <kbd>
 */
export function kbd(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Kbd << VNodeFlags.UniqueIdOffset),
    "<kbd",
    attrs,
    className,
    null,
    css,
    "</kbd>",
  );
}

/**
 * Creates Virtual DOM HTML element <label>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <label>
 */
export function label(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Label << VNodeFlags.UniqueIdOffset),
    "<label",
    attrs,
    className,
    null,
    css,
    "</label>",
  );
}

/**
 * Creates Virtual DOM HTML element <legend>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <legend>
 */
export function legend(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Legend << VNodeFlags.UniqueIdOffset),
    "<legend",
    attrs,

    className,
    null,
    css,
    "</legend>",
  );
}

/**
 * Creates Virtual DOM HTML element <li>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <li>
 */
export function li(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Li << VNodeFlags.UniqueIdOffset),
    "<li",
    attrs,
    className,
    null,
    css,
    "</li>",
  );
}

/**
 * Creates Virtual DOM HTML element <link>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <link>
 */
export function link(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Link << VNodeFlags.UniqueIdOffset),
    "<link",
    attrs,
    className,
    null,
    css,
    null,
  );
}

/**
 * Creates Virtual DOM HTML element <main>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <main>
 */
export function main(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Main << VNodeFlags.UniqueIdOffset),
    "<main",
    attrs,
    className,
    null,
    css,
    "</main>",
  );
}

/**
 * Creates Virtual DOM HTML element <mark>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <mark>
 */
export function mark(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Mark << VNodeFlags.UniqueIdOffset),
    "<mark",
    attrs,

    className,
    null,
    css,
    "</mark>",
  );
}

/**
 * Creates Virtual DOM HTML element <menu>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <menu>
 */
export function menu(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Menu << VNodeFlags.UniqueIdOffset),
    "<menu",
    attrs,
    className,
    null,
    css,
    "</menu>",
  );
}

/**
 * Creates Virtual DOM HTML element <meta>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <meta>
 */
export function meta(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Meta << VNodeFlags.UniqueIdOffset),
    "<meta",
    attrs,
    className,
    null,
    css,
    null,
  );
}

/**
 * Creates Virtual DOM HTML element <meter>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <meter>
 */
export function meter(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Meter << VNodeFlags.UniqueIdOffset),
    "<meter",
    attrs,
    className,
    null,
    css,
    "</meter>",
  );
}

/**
 * Creates Virtual DOM HTML element <nav>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <nav>
 */
export function nav(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Nav << VNodeFlags.UniqueIdOffset),
    "<nav",
    attrs,

    className,
    null,
    css,
    "</nav>",
  );
}

/**
 * Creates Virtual DOM HTML element <noscript>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <noscript>
 */
export function noscript(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Noscript << VNodeFlags.UniqueIdOffset),
    "<noscript",
    attrs,
    className,
    null,
    css,
    "</noscript>",
  );
}

/**
 * Creates Virtual DOM HTML element <ol>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <ol>
 */
export function ol(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Ol << VNodeFlags.UniqueIdOffset),
    "<ol",
    attrs,
    className,
    null,
    css,
    "</ol>",
  );
}

/**
 * Creates Virtual DOM HTML element <optgroup>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <optgroup>
 */
export function optgroup(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Optgroup << VNodeFlags.UniqueIdOffset),
    "<optgroup",
    attrs,
    className,
    null,
    css,
    "</optgroup>",
  );
}
/**
 * Creates Virtual DOM HTML element <option>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <option>
 */
export function option(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Option << VNodeFlags.UniqueIdOffset),
    "<option",
    attrs,

    className,
    null,
    css,
    "</option>",
  );
}

/**
 * Creates Virtual DOM HTML element <p>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <p>
 */
export function p(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.P << VNodeFlags.UniqueIdOffset),
    "<p",
    attrs,
    className,
    null,
    css,
    "</p>",
  );
}

/**
 * Creates Virtual DOM HTML element <picture>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <picture>
 */
export function picture(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Picture << VNodeFlags.UniqueIdOffset),
    "<picture",
    attrs,
    className,
    null,
    css,
    "</picture>",
  );
}

/**
 * Creates Virtual DOM HTML element <pre>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <pre>
 */
export function pre(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.NewLineEatingElement | (TagId.Pre << VNodeFlags.UniqueIdOffset),
    "<pre",
    attrs,
    className,
    null,
    css,
    "</pre>",
  );
}

/**
 * Creates Virtual DOM HTML element <progress>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <progress>
 */
export function progress(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Progress << VNodeFlags.UniqueIdOffset),
    "<progress",
    attrs,

    className,
    null,
    css,
    "</progress>",
  );
}

/**
 * Creates Virtual DOM HTML element <q>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <q>
 */
export function q(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Q << VNodeFlags.UniqueIdOffset),
    "<q",
    attrs,
    className,
    null,
    css,
    "</q>",
  );
}

/**
 * Creates Virtual DOM HTML element <rt>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <rt>
 */
export function rt(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Rt << VNodeFlags.UniqueIdOffset),
    "<rt",
    attrs,
    className,
    null,
    css,
    "</rt>",
  );
}

/**
 * Creates Virtual DOM HTML element <ruby>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <ruby>
 */
export function ruby(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Ruby << VNodeFlags.UniqueIdOffset),
    "<ruby",
    attrs,
    className,
    null,
    css,
    "</ruby>",
  );
}

/**
 * Creates Virtual DOM HTML element <s>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <s>
 */
export function s(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.S << VNodeFlags.UniqueIdOffset),
    "<s",
    attrs,

    className,
    null,
    css,
    "</s>",
  );
}

/**
 * Creates Virtual DOM HTML element <samp>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <samp>
 */
export function samp(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Samp << VNodeFlags.UniqueIdOffset),
    "<samp",
    attrs,
    className,
    null,
    css,
    "</samp>",
  );
}

/**
 * Creates Virtual DOM HTML element <script>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <script>
 */
export function script(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Script << VNodeFlags.UniqueIdOffset),
    "<script",
    attrs,
    className,
    null,
    css,
    "</script>",
  );
}

/**
 * Creates Virtual DOM HTML element <section>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <section>
 */
export function section(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Section << VNodeFlags.UniqueIdOffset),
    "<section",
    attrs,
    className,
    null,
    css,
    "</section>",
  );
}

/**
 * Creates Virtual DOM HTML element <select>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <select>
 */
export function select(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Select << VNodeFlags.UniqueIdOffset),
    "<select",
    attrs,

    className,
    null,
    css,
    "</select>",
  );
}

/**
 * Creates Virtual DOM HTML element <source>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <source>
 */
export function source(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Source << VNodeFlags.UniqueIdOffset),
    "<source",
    attrs,
    className,
    null,
    css,
    null,
  );
}

/**
 * Creates Virtual DOM HTML element <span>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <span>
 */
export function span(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Span << VNodeFlags.UniqueIdOffset),
    "<span",
    attrs,
    className,
    null,
    css,
    "</span>",
  );
}

/**
 * Creates Virtual DOM HTML element <strong>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <strong>
 */
export function strong(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Strong << VNodeFlags.UniqueIdOffset),
    "<strong",
    attrs,
    className,
    null,
    css,
    "</strong>",
  );
}
/**
 * Creates Virtual DOM HTML element <style>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <style>
 */
export function style(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Style << VNodeFlags.UniqueIdOffset),
    "<style",
    attrs,

    className,
    null,
    css,
    "</style>",
  );
}

/**
 * Creates Virtual DOM HTML element <sub>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <sub>
 */
export function sub(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Sub << VNodeFlags.UniqueIdOffset),
    "<sub",
    attrs,
    className,
    null,
    css,
    "</sub>",
  );
}

/**
 * Creates Virtual DOM HTML element <sup>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <sup>
 */
export function sup(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Sup << VNodeFlags.UniqueIdOffset),
    "<sup",
    attrs,
    className,
    null,
    css,
    "</sup>",
  );
}

/**
 * Creates Virtual DOM HTML element <table>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <table>
 */
export function table(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Table << VNodeFlags.UniqueIdOffset),
    "<table",
    attrs,
    className,
    null,
    css,
    "</table>",
  );
}

/**
 * Creates Virtual DOM HTML element <tbody>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <tbody>
 */
export function tbody(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Tbody << VNodeFlags.UniqueIdOffset),
    "<tbody",
    attrs,

    className,
    null,
    css,
    "</tbody>",
  );
}

/**
 * Creates Virtual DOM HTML element <td>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <td>
 */
export function td(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Td << VNodeFlags.UniqueIdOffset),
    "<td",
    attrs,
    className,
    null,
    css,
    "</td>",
  );
}

/**
 * Creates Virtual DOM HTML element <template>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <template>
 */
export function template(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Template << VNodeFlags.UniqueIdOffset),
    "<template",
    attrs,
    className,
    null,
    css,
    "</template>",
  );
}

/**
 * Creates Virtual DOM HTML element <tfoot>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <tfoot>
 */
export function tfoot(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Tfoot << VNodeFlags.UniqueIdOffset),
    "<tfoot",
    attrs,
    className,
    null,
    css,
    "</tfoot>",
  );
}

/**
 * Creates Virtual DOM HTML element <th>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <th>
 */
export function th(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Th << VNodeFlags.UniqueIdOffset),
    "<th",
    attrs,
    className,
    null,
    css,
    "</th>",
  );
}

/**
 * Creates Virtual DOM HTML element <thead>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <thead>
 */
export function thead(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Thead << VNodeFlags.UniqueIdOffset),
    "<thead",
    attrs,
    className,
    null,
    css,
    "</thead>",
  );
}

/**
 * Creates Virtual DOM HTML element <time>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <time>
 */
export function time(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Time << VNodeFlags.UniqueIdOffset),
    "<time",
    attrs,
    className,
    null,
    css,
    "</time>",
  );
}

/**
 * Creates Virtual DOM HTML element <title>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <title>
 */
export function title(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Title << VNodeFlags.UniqueIdOffset),
    "<title",
    attrs,
    className,
    null,
    css,
    "</title>",
  );
}

/**
 * Creates Virtual DOM HTML element <tr>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <tr>
 */
export function tr(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Tr << VNodeFlags.UniqueIdOffset),
    "<tr",
    attrs,
    className,
    null,
    css,
    "</tr>",
  );
}

/**
 * Creates Virtual DOM HTML element <track>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <track>
 */
export function track(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Track << VNodeFlags.UniqueIdOffset),
    "<track",
    attrs,
    className,
    null,
    css,
    null,
  );
}

/**
 * Creates Virtual DOM HTML element <u>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <u>
 */
export function u(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.U << VNodeFlags.UniqueIdOffset),
    "<u",
    attrs,
    className,
    null,
    css,
    "</u>",
  );
}

/**
 * Creates Virtual DOM HTML element <ul>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <ul>
 */
export function ul(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Ul << VNodeFlags.UniqueIdOffset),
    "<ul",
    attrs,
    className,
    null,
    css,
    "</ul>",
  );
}

/**
 * Creates Virtual DOM HTML element <wbr>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <wbr>
 */
export function wbr(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Wbr << VNodeFlags.UniqueIdOffset),
    "<wbr",
    attrs,
    className,
    null,
    css,
    null,
  );
}

/**
 * Creates Virtual DOM HTML element <textarea>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <textarea>
 */
export function textarea(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.NewLineEatingElement | (TagId.Textarea << VNodeFlags.UniqueIdOffset),
    "<textarea",
    attrs,
    className,
    null,
    css,
    "</textarea>",
  );
}

/**
 * Creates Virtual DOM HTML element <input>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <input>
 */
export function input(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Input << VNodeFlags.UniqueIdOffset),
    "<input",
    attrs,
    className,
    null,
    css,
    null,
  );
}

/**
 * Creates Virtual DOM HTML element <audio>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <audio>
 */
export function audio(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Audio << VNodeFlags.UniqueIdOffset),
    "<audio",
    attrs,
    className,
    null,
    css,
    "</audio>",
  );
}

/**
 * Creates Virtual DOM HTML element <video>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM HTML element <video>
 */
export function video(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Video << VNodeFlags.UniqueIdOffset),
    "<video",
    attrs,
    className,
    null,
    css,
    "</video>",
  );
}
