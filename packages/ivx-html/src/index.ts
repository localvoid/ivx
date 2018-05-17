import { VNode, VNodeFlags } from "ivx";

export const DOCTYPE = "<!doctype html>";

const enum TagId {
  A = 1,
  Abbr = 2,
  Acronym = 3,
  Address = 4,
  Area = 5,
  Article = 6,
  Aside = 7,
  B = 8,
  Base = 9,
  Basefont = 10,
  Bdo = 11,
  Big = 12,
  Blockquote = 13,
  Body = 14,
  Br = 15,
  Button = 16,
  Canvas = 17,
  Caption = 18,
  Center = 19,
  Cite = 20,
  Code = 21,
  Col = 22,
  Colgroup = 23,
  Data = 24,
  Datalist = 25,
  Dd = 26,
  Del = 27,
  Dfn = 28,
  Dir = 29,
  Div = 30,
  Dl = 31,
  Dt = 32,
  Em = 33,
  Embed = 34,
  Fieldset = 35,
  Figcaption = 36,
  Figure = 37,
  Font = 38,
  Footer = 39,
  Form = 40,
  Frame = 41,
  Frameset = 42,
  H1 = 43,
  H2 = 44,
  H3 = 45,
  H4 = 46,
  H5 = 47,
  H6 = 48,
  Head = 49,
  Header = 50,
  Hgroup = 51,
  Hr = 52,
  Html = 53,
  I = 54,
  Iframe = 55,
  Img = 56,
  Input = 57,
  Ins = 58,
  Kbd = 59,
  Label = 60,
  Legend = 61,
  Li = 62,
  Link = 63,
  Listing = 64,
  Main = 65,
  Map = 66,
  Mark = 67,
  Menu = 68,
  Meta = 69,
  Meter = 70,
  Nav = 71,
  Nobr = 72,
  Noframes = 73,
  Noscript = 74,
  Object = 75,
  Ol = 76,
  Optgroup = 77,
  Option = 78,
  P = 79,
  Param = 80,
  Picture = 81,
  Plaintext = 82,
  Pre = 83,
  Progress = 84,
  Q = 85,
  Rt = 86,
  Ruby = 87,
  S = 88,
  Samp = 89,
  Script = 90,
  Section = 91,
  Select = 92,
  Small = 93,
  Source = 94,
  Span = 95,
  Strike = 96,
  Strong = 97,
  Style = 98,
  Sub = 99,
  Sup = 100,
  Table = 101,
  Tbody = 102,
  Td = 103,
  Template = 104,
  Textarea = 105,
  Tfoot = 106,
  Th = 107,
  Thead = 108,
  Time = 109,
  Title = 110,
  Tr = 111,
  Track = 112,
  Tt = 113,
  U = 114,
  Ul = 115,
  Wbr = 116,
  Xmp = 117,
  Audio = 118,
  Video = 119,
}

// HTML Elements:
export function a(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.A << VNodeFlags.UniqueIdOffset),
    "<a",
    null,
    className === undefined ? null : className,
    null,
    "</a>",
  );
}
export function abbr(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Abbr << VNodeFlags.UniqueIdOffset),
    "<abbr",
    null,
    className === undefined ? null : className,
    null,
    "</abbr>",
  );
}
export function acronym(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Acronym << VNodeFlags.UniqueIdOffset),
    "<acronym",
    null,
    className === undefined ? null : className,
    null,
    "</acronym>",
  );
}
export function address(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Address << VNodeFlags.UniqueIdOffset),
    "<address",
    null,
    className === undefined ? null : className,
    null,
    "</address>",
  );
}
export function area(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Area << VNodeFlags.UniqueIdOffset),
    "<area",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function article(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Article << VNodeFlags.UniqueIdOffset),
    "<article",
    null,
    className === undefined ? null : className,
    null,
    "</article>",
  );
}
export function aside(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Aside << VNodeFlags.UniqueIdOffset),
    "<aside",
    null,
    className === undefined ? null : className,
    null,
    "</aside>",
  );
}
export function b(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.B << VNodeFlags.UniqueIdOffset),
    "<b",
    null,
    className === undefined ? null : className,
    null,
    "</b>",
  );
}
export function base(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Base << VNodeFlags.UniqueIdOffset),
    "<base",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function basefont(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Basefont << VNodeFlags.UniqueIdOffset),
    "<basefont",
    null,
    className === undefined ? null : className,
    null,
    "</basefont>",
  );
}
export function bdo(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Bdo << VNodeFlags.UniqueIdOffset),
    "<bdo",
    null,
    className === undefined ? null : className,
    null,
    "</bdo>",
  );
}
export function big(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Big << VNodeFlags.UniqueIdOffset),
    "<big",
    null,
    className === undefined ? null : className,
    null,
    "</big>",
  );
}
export function blockquote(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Blockquote << VNodeFlags.UniqueIdOffset),
    "<blockquote",
    null,
    className === undefined ? null : className,
    null,
    "</blockquote>",
  );
}
export function body(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Body << VNodeFlags.UniqueIdOffset),
    "<body",
    null,
    className === undefined ? null : className,
    null,
    "</body>",
  );
}
export function br(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Br << VNodeFlags.UniqueIdOffset),
    "<br",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function button(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Button << VNodeFlags.UniqueIdOffset),
    "<button",
    null,
    className === undefined ? null : className,
    null,
    "</button>",
  );
}
export function canvas(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Canvas << VNodeFlags.UniqueIdOffset),
    "<canvas",
    null,
    className === undefined ? null : className,
    null,
    "</canvas>",
  );
}
export function caption(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Caption << VNodeFlags.UniqueIdOffset),
    "<caption",
    null,
    className === undefined ? null : className,
    null,
    "</caption>",
  );
}
export function center(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Center << VNodeFlags.UniqueIdOffset),
    "<center",
    null,
    className === undefined ? null : className,
    null,
    "</center>",
  );
}
export function cite(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Cite << VNodeFlags.UniqueIdOffset),
    "<cite",
    null,
    className === undefined ? null : className,
    null,
    "</cite>",
  );
}
export function code(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Code << VNodeFlags.UniqueIdOffset),
    "<code",
    null,
    className === undefined ? null : className,
    null,
    "</code>",
  );
}
export function col(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Col << VNodeFlags.UniqueIdOffset),
    "<col",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function colgroup(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Colgroup << VNodeFlags.UniqueIdOffset),
    "<colgroup",
    null,
    className === undefined ? null : className,
    null,
    "</colgroup>",
  );
}
export function data(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Data << VNodeFlags.UniqueIdOffset),
    "<data",
    null,
    className === undefined ? null : className,
    null,
    "</data>",
  );
}
export function datalist(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Datalist << VNodeFlags.UniqueIdOffset),
    "<datalist",
    null,
    className === undefined ? null : className,
    null,
    "</datalist>",
  );
}
export function dd(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Dd << VNodeFlags.UniqueIdOffset),
    "<dd",
    null,
    className === undefined ? null : className,
    null,
    "</dd>",
  );
}
export function del(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Del << VNodeFlags.UniqueIdOffset),
    "<del",
    null,
    className === undefined ? null : className,
    null,
    "</del>",
  );
}
export function dfn(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Dfn << VNodeFlags.UniqueIdOffset),
    "<dfn",
    null,
    className === undefined ? null : className,
    null,
    "</dfn>",
  );
}
export function dir(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Dir << VNodeFlags.UniqueIdOffset),
    "<dir",
    null,
    className === undefined ? null : className,
    null,
    "</dir>",
  );
}
export function div(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Div << VNodeFlags.UniqueIdOffset),
    "<div",
    null,
    className === undefined ? null : className,
    null,
    "</div>",
  );
}
export function dl(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Dl << VNodeFlags.UniqueIdOffset),
    "<dl",
    null,
    className === undefined ? null : className,
    null,
    "</dl>",
  );
}
export function dt(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Dt << VNodeFlags.UniqueIdOffset),
    "<dt",
    null,
    className === undefined ? null : className,
    null,
    "</dt>",
  );
}
export function em(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Em << VNodeFlags.UniqueIdOffset),
    "<em",
    null,
    className === undefined ? null : className,
    null,
    "</em>",
  );
}
export function embed(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Embed << VNodeFlags.UniqueIdOffset),
    "<embed",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function fieldset(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Fieldset << VNodeFlags.UniqueIdOffset),
    "<fieldset",
    null,
    className === undefined ? null : className,
    null,
    "</fieldset>",
  );
}
export function figcaption(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Figcaption << VNodeFlags.UniqueIdOffset),
    "<figcaption",
    null,
    className === undefined ? null : className,
    null,
    "</figcaption>",
  );
}
export function figure(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Figure << VNodeFlags.UniqueIdOffset),
    "<figure",
    null,
    className === undefined ? null : className,
    null,
    "</figure>",
  );
}
export function font(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Font << VNodeFlags.UniqueIdOffset),
    "<font",
    null,
    className === undefined ? null : className,
    null,
    "</font>",
  );
}
export function footer(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Footer << VNodeFlags.UniqueIdOffset),
    "<footer",
    null,
    className === undefined ? null : className,
    null,
    "</footer>",
  );
}
export function form(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Font << VNodeFlags.UniqueIdOffset),
    "<form",
    null,
    className === undefined ? null : className,
    null,
    "</form>",
  );
}
export function frame(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Frame << VNodeFlags.UniqueIdOffset),
    "<frame",
    null,
    className === undefined ? null : className,
    null,
    "</frame>",
  );
}
export function frameset(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Frameset << VNodeFlags.UniqueIdOffset),
    "<frameset",
    null,
    className === undefined ? null : className,
    null,
    "</frameset>",
  );
}
export function h1(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.H1 << VNodeFlags.UniqueIdOffset),
    "<h1",
    null,
    className === undefined ? null : className,
    null,
    "</h1>",
  );
}
export function h2(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.H2 << VNodeFlags.UniqueIdOffset),
    "<h2",
    null,
    className === undefined ? null : className,
    null,
    "</h2>",
  );
}
export function h3(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.H3 << VNodeFlags.UniqueIdOffset),
    "<h3",
    null,
    className === undefined ? null : className,
    null,
    "</h3>",
  );
}
export function h4(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.H4 << VNodeFlags.UniqueIdOffset),
    "<h4",
    null,
    className === undefined ? null : className,
    null,
    "</h4>",
  );
}
export function h5(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.H5 << VNodeFlags.UniqueIdOffset),
    "<h5",
    null,
    className === undefined ? null : className,
    null,
    "</h5>",
  );
}
export function h6(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.H6 << VNodeFlags.UniqueIdOffset),
    "<h6",
    null,
    className === undefined ? null : className,
    null,
    "</h6>",
  );
}
export function head(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Head << VNodeFlags.UniqueIdOffset),
    "<head",
    null,
    className === undefined ? null : className,
    null,
    "</head>",
  );
}
export function header(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Header << VNodeFlags.UniqueIdOffset),
    "<header",
    null,
    className === undefined ? null : className,
    null,
    "</header>",
  );
}
export function hgroup(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Hgroup << VNodeFlags.UniqueIdOffset),
    "<hgroup",
    null,
    className === undefined ? null : className,
    null,
    "</hgroup>",
  );
}
export function hr(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Hr << VNodeFlags.UniqueIdOffset),
    "<hr",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function html(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Html << VNodeFlags.UniqueIdOffset),
    "<html",
    null,
    className === undefined ? null : className,
    null,
    "</html>",
  );
}
export function i(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.I << VNodeFlags.UniqueIdOffset),
    "<i",
    null,
    className === undefined ? null : className,
    null,
    "</i>",
  );
}
export function iframe(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Iframe << VNodeFlags.UniqueIdOffset),
    "<iframe",
    null,
    className === undefined ? null : className,
    null,
    "</iframe>",
  );
}
export function img(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Img << VNodeFlags.UniqueIdOffset),
    "<img",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function ins(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Ins << VNodeFlags.UniqueIdOffset),
    "<ins",
    null,
    className === undefined ? null : className,
    null,
    "</ins>",
  );
}
export function kbd(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Kbd << VNodeFlags.UniqueIdOffset),
    "<kbd",
    null,
    className === undefined ? null : className,
    null,
    "</kbd>",
  );
}
export function label(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Label << VNodeFlags.UniqueIdOffset),
    "<label",
    null,
    className === undefined ? null : className,
    null,
    "</label>",
  );
}
export function legend(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Legend << VNodeFlags.UniqueIdOffset),
    "<legend",
    null,
    className === undefined ? null : className,
    null,
    "</legend>",
  );
}
export function li(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Li << VNodeFlags.UniqueIdOffset),
    "<li",
    null,
    className === undefined ? null : className,
    null,
    "</li>",
  );
}
export function link(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Link << VNodeFlags.UniqueIdOffset),
    "<link",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function listing(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.NewLineEatingElement | (TagId.Listing << VNodeFlags.UniqueIdOffset),
    "<listing",
    null,
    className === undefined ? null : className,
    null,
    "</listing>",
  );
}
export function main(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Main << VNodeFlags.UniqueIdOffset),
    "<main",
    null,
    className === undefined ? null : className,
    null,
    "</main>",
  );
}
export function map(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Map << VNodeFlags.UniqueIdOffset),
    "<map",
    null,
    className === undefined ? null : className,
    null,
    "</map>",
  );
}
export function mark(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Mark << VNodeFlags.UniqueIdOffset),
    "<mark",
    null,
    className === undefined ? null : className,
    null,
    "</mark>",
  );
}
export function menu(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Menu << VNodeFlags.UniqueIdOffset),
    "<menu",
    null,
    className === undefined ? null : className,
    null,
    "</menu>",
  );
}
export function meta(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Meta << VNodeFlags.UniqueIdOffset),
    "<meta",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function meter(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Meter << VNodeFlags.UniqueIdOffset),
    "<meter",
    null,
    className === undefined ? null : className,
    null,
    "</meter>",
  );
}
export function nav(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Nav << VNodeFlags.UniqueIdOffset),
    "<nav",
    null,
    className === undefined ? null : className,
    null,
    "</nav>",
  );
}
export function nobr(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Nobr << VNodeFlags.UniqueIdOffset),
    "<nobr",
    null,
    className === undefined ? null : className,
    null,
    "</nobr>",
  );
}
export function noframes(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Noframes << VNodeFlags.UniqueIdOffset),
    "<noframes",
    null,
    className === undefined ? null : className,
    null,
    "</noframes>",
  );
}
export function noscript(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Noscript << VNodeFlags.UniqueIdOffset),
    "<noscript",
    null,
    className === undefined ? null : className,
    null,
    "</noscript>",
  );
}
export function object(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Object << VNodeFlags.UniqueIdOffset),
    "<object",
    null,
    className === undefined ? null : className,
    null,
    "</object>",
  );
}
export function ol(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Ol << VNodeFlags.UniqueIdOffset),
    "<ol",
    null,
    className === undefined ? null : className,
    null,
    "</ol>",
  );
}
export function optgroup(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Optgroup << VNodeFlags.UniqueIdOffset),
    "<optgroup",
    null,
    className === undefined ? null : className,
    null,
    "</optgroup>",
  );
}
export function option(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Option << VNodeFlags.UniqueIdOffset),
    "<option",
    null,
    className === undefined ? null : className,
    null,
    "</option>",
  );
}
export function p(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.P << VNodeFlags.UniqueIdOffset),
    "<p",
    null,
    className === undefined ? null : className,
    null,
    "</p>",
  );
}
export function param(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Param << VNodeFlags.UniqueIdOffset),
    "<param",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function picture(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Picture << VNodeFlags.UniqueIdOffset),
    "<picture",
    null,
    className === undefined ? null : className,
    null,
    "</picture>",
  );
}
export function plaintext(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Plaintext << VNodeFlags.UniqueIdOffset),
    "<plaintext",
    null,
    className === undefined ? null : className,
    null,
    "</plaintext>",
  );
}
export function pre(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.NewLineEatingElement | (TagId.Pre << VNodeFlags.UniqueIdOffset),
    "<pre",
    null,
    className === undefined ? null : className,
    null,
    "</pre>",
  );
}
export function progress(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Progress << VNodeFlags.UniqueIdOffset),
    "<progress",
    null,
    className === undefined ? null : className,
    null,
    "</progress>",
  );
}
export function q(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Q << VNodeFlags.UniqueIdOffset),
    "<q",
    null,
    className === undefined ? null : className,
    null,
    "</q>",
  );
}
export function rt(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Rt << VNodeFlags.UniqueIdOffset),
    "<rt",
    null,
    className === undefined ? null : className,
    null,
    "</rt>",
  );
}
export function ruby(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Ruby << VNodeFlags.UniqueIdOffset),
    "<ruby",
    null,
    className === undefined ? null : className,
    null,
    "</ruby>",
  );
}
export function s(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.S << VNodeFlags.UniqueIdOffset),
    "<s",
    null,
    className === undefined ? null : className,
    null,
    "</s>",
  );
}
export function samp(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Samp << VNodeFlags.UniqueIdOffset),
    "<samp",
    null,
    className === undefined ? null : className,
    null,
    "</samp>",
  );
}
export function script(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Script << VNodeFlags.UniqueIdOffset),
    "<script",
    null,
    className === undefined ? null : className,
    null,
    "</script>",
  );
}
export function section(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Section << VNodeFlags.UniqueIdOffset),
    "<section",
    null,
    className === undefined ? null : className,
    null,
    "</section>",
  );
}
export function select(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Select << VNodeFlags.UniqueIdOffset),
    "<select",
    null,
    className === undefined ? null : className,
    null,
    "</select>",
  );
}
export function small(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Small << VNodeFlags.UniqueIdOffset),
    "<small",
    null,
    className === undefined ? null : className,
    null,
    "</small>",
  );
}
export function source(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Source << VNodeFlags.UniqueIdOffset),
    "<source",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function span(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Span << VNodeFlags.UniqueIdOffset),
    "<span",
    null,
    className === undefined ? null : className,
    null,
    "</span>",
  );
}
export function strike(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Strike << VNodeFlags.UniqueIdOffset),
    "<strike",
    null,
    className === undefined ? null : className,
    null,
    "</strike>",
  );
}
export function strong(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Strong << VNodeFlags.UniqueIdOffset),
    "<strong",
    null,
    className === undefined ? null : className,
    null,
    "</strong>",
  );
}
export function style(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Style << VNodeFlags.UniqueIdOffset),
    "<style",
    null,
    className === undefined ? null : className,
    null,
    "</style>",
  );
}
export function sub(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Sub << VNodeFlags.UniqueIdOffset),
    "<sub",
    null,
    className === undefined ? null : className,
    null,
    "</sub>",
  );
}
export function sup(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Sup << VNodeFlags.UniqueIdOffset),
    "<sup",
    null,
    className === undefined ? null : className,
    null,
    "</sup>",
  );
}
export function table(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Table << VNodeFlags.UniqueIdOffset),
    "<table",
    null,
    className === undefined ? null : className,
    null,
    "</table>",
  );
}
export function tbody(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Tbody << VNodeFlags.UniqueIdOffset),
    "<tbody",
    null,
    className === undefined ? null : className,
    null,
    "</tbody>",
  );
}
export function td(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Td << VNodeFlags.UniqueIdOffset),
    "<td",
    null,
    className === undefined ? null : className,
    null,
    "</td>",
  );
}
export function template(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Template << VNodeFlags.UniqueIdOffset),
    "<template",
    null,
    className === undefined ? null : className,
    null,
    "</template>",
  );
}
export function tfoot(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Tfoot << VNodeFlags.UniqueIdOffset),
    "<tfoot",
    null,
    className === undefined ? null : className,
    null,
    "</tfoot>",
  );
}
export function th(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Th << VNodeFlags.UniqueIdOffset),
    "<th",
    null,
    className === undefined ? null : className,
    null,
    "</th>",
  );
}
export function thead(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Thead << VNodeFlags.UniqueIdOffset),
    "<thead",
    null,
    className === undefined ? null : className,
    null,
    "</thead>",
  );
}
export function time(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Time << VNodeFlags.UniqueIdOffset),
    "<time",
    null,
    className === undefined ? null : className,
    null,
    "</time>",
  );
}
export function title(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Title << VNodeFlags.UniqueIdOffset),
    "<title",
    null,
    className === undefined ? null : className,
    null,
    "</title>",
  );
}
export function tr(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Tr << VNodeFlags.UniqueIdOffset),
    "<tr",
    null,
    className === undefined ? null : className,
    null,
    "</tr>",
  );
}
export function track(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Track << VNodeFlags.UniqueIdOffset),
    "<track",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function tt(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Tt << VNodeFlags.UniqueIdOffset),
    "<tt",
    null,
    className === undefined ? null : className,
    null,
    "</tt>",
  );
}
export function u(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.U << VNodeFlags.UniqueIdOffset),
    "<u",
    null,
    className === undefined ? null : className,
    null,
    "</u>",
  );
}
export function ul(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Ul << VNodeFlags.UniqueIdOffset),
    "<ul",
    null,
    className === undefined ? null : className,
    null,
    "</ul>",
  );
}
export function wbr(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Wbr << VNodeFlags.UniqueIdOffset),
    "<wbr",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function xmp(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Xmp << VNodeFlags.UniqueIdOffset),
    "<xmp",
    null,
    className === undefined ? null : className,
    null,
    "</xmp>",
  );
}

export function textarea(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.NewLineEatingElement | (TagId.Textarea << VNodeFlags.UniqueIdOffset),
    "<textarea",
    null,
    className === undefined ? null : className,
    null,
    "</textarea>",
  );
}
export function input(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement | (TagId.Input << VNodeFlags.UniqueIdOffset),
    `<input`,
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}

export function audio(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Audio << VNodeFlags.UniqueIdOffset),
    "<audio",
    null,
    className === undefined ? null : className,
    null,
    "</audio>",
  );
}

export function video(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | (TagId.Video << VNodeFlags.UniqueIdOffset),
    "<video",
    null,
    className === undefined ? null : className,
    null,
    "</video>",
  );
}
