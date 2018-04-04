import { VNode, VNodeFlags } from "ivx";

const enum TagId {
  A = 1,
  AltGlyph = 2,
  AltGlyphDef = 3,
  AltGlyphItem = 4,
  Animate = 5,
  AnimateColor = 6,
  AnimateMotion = 7,
  AnimateTransform = 8,
  Circle = 9,
  ClipPath = 10,
  ColorProfile = 11,
  Cursor = 12,
  Defs = 13,
  Desc = 14,
  Discard = 15,
  Ellipse = 16,
  FeBlend = 17,
  FeColorMatrix = 18,
  FeComponentTransfer = 19,
  FeComposite = 20,
  FeConvolveMatrix = 21,
  FeDiffuseLighting = 22,
  FeDisplacementMap = 23,
  FeDistantLight = 24,
  FeDropShadow = 25,
  FeFlood = 26,
  FeFuncA = 27,
  FeFuncB = 28,
  FeFuncG = 29,
  FeFuncR = 30,
  FeGaussianBlur = 31,
  FeImage = 32,
  FeMerge = 33,
  FeMergeNode = 34,
  FeMorphology = 35,
  FeOffset = 36,
  FePointLight = 37,
  FeSpecularLighting = 38,
  FeSpotLight = 39,
  FeTile = 40,
  FeTurbulence = 41,
  Filter = 42,
  Font = 43,
  FontFace = 44,
  FontFaceFormat = 45,
  FontFaceName = 46,
  FontFaceSrc = 47,
  FontFaceUri = 48,
  ForeignObject = 49,
  G = 50,
  Glyph = 51,
  GlyphRef = 52,
  Hatch = 53,
  Hatchpath = 54,
  Hkern = 55,
  Image = 56,
  Line = 57,
  LinearGradient = 58,
  Marker = 59,
  Mask = 60,
  Mesh = 61,
  Meshgradient = 62,
  Meshpatch = 63,
  Meshrow = 64,
  Metadata = 65,
  MissingGlyph = 66,
  Mpath = 67,
  Path = 68,
  Pattern = 69,
  Polygon = 70,
  Polyline = 71,
  RadialGradient = 72,
  Rect = 73,
  Set = 74,
  Solidcolor = 75,
  Stop = 76,
  Svg = 77,
  Switch = 78,
  Symbol = 79,
  Text = 80,
  TextPath = 81,
  Title = 82,
  Tref = 83,
  Tspan = 84,
  Use = 85,
  View = 86,
  Vkern = 87,
}

export function a(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.A >> VNodeFlags.ElementIdOffset),
    "<a",
    null,
    className === void 0 ? null : className,
    null,
    "</a>",
  );
}

export function altGlyph(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.AltGlyph >> VNodeFlags.ElementIdOffset),
    "<altGlyph",
    null,
    className === void 0 ? null : className,
    null,
    "</altGlyph>",
  );
}

export function altGlyphDef(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.AltGlyphDef >> VNodeFlags.ElementIdOffset),
    "<altGlyphDef",
    null,
    className === void 0 ? null : className,
    null,
    "</altGlyphDef>",
  );
}

export function altGlyphItem(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.AltGlyphItem >> VNodeFlags.ElementIdOffset),
    "<altGlyphItem",
    null,
    className === void 0 ? null : className,
    null,
    "</altGlyphItem>",
  );
}

export function animate(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Animate >> VNodeFlags.ElementIdOffset),
    "<animate",
    null,
    className === void 0 ? null : className,
    null,
    "</animate>",
  );
}

export function animateColor(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.AnimateColor >> VNodeFlags.ElementIdOffset),
    "<animateColor",
    null,
    className === void 0 ? null : className,
    null,
    "</animateColor>",
  );
}

export function animateMotion(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.AnimateMotion >> VNodeFlags.ElementIdOffset),
    "<animateMotion",
    null,
    className === void 0 ? null : className,
    null,
    "</animateMotion>",
  );
}

export function animateTransform(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.AnimateTransform >> VNodeFlags.ElementIdOffset),
    "<animateTransform",
    null,
    className === void 0 ? null : className,
    null,
    "</animateTransform>",
  );
}

export function circle(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Circle >> VNodeFlags.ElementIdOffset),
    "<circle",
    null,
    className === void 0 ? null : className,
    null,
    "</circle>",
  );
}

export function clipPath(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.ClipPath >> VNodeFlags.ElementIdOffset),
    "<clipPath",
    null,
    className === void 0 ? null : className,
    null,
    "</clipPath>",
  );
}

export function colorProfile(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.ColorProfile >> VNodeFlags.ElementIdOffset),
    "<color-profile",
    null,
    className === void 0 ? null : className,
    null,
    "</color-profile>",
  );
}

export function cursor(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Cursor >> VNodeFlags.ElementIdOffset),
    "<cursor",
    null,
    className === void 0 ? null : className,
    null,
    "</cursor>",
  );
}

export function defs(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Defs >> VNodeFlags.ElementIdOffset),
    "<defs",
    null,
    className === void 0 ? null : className,
    null,
    "</defs>",
  );
}

export function desc(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Desc >> VNodeFlags.ElementIdOffset),
    "<desc",
    null,
    className === void 0 ? null : className,
    null,
    "</desc>",
  );
}

export function discard(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Discard >> VNodeFlags.ElementIdOffset),
    "<discard",
    null,
    className === void 0 ? null : className,
    null,
    "</discard>",
  );
}

export function ellipse(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Ellipse >> VNodeFlags.ElementIdOffset),
    "<ellipse",
    null,
    className === void 0 ? null : className,
    null,
    "</ellipse>",
  );
}

export function feBlend(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeBlend >> VNodeFlags.ElementIdOffset),
    "<feBlend",
    null,
    className === void 0 ? null : className,
    null,
    "</feBlend>",
  );
}

export function feColorMatrix(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeColorMatrix >> VNodeFlags.ElementIdOffset),
    "<feColorMatrix",
    null,
    className === void 0 ? null : className,
    null,
    "</feColorMatrix>",
  );
}

export function feComponentTransfer(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeComponentTransfer >> VNodeFlags.ElementIdOffset),
    "<feComponentTransfer",
    null,
    className === void 0 ? null : className,
    null,
    "</feComponentTransfer>",
  );
}

export function feComposite(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeComposite >> VNodeFlags.ElementIdOffset),
    "<feComposite",
    null,
    className === void 0 ? null : className,
    null,
    "</feComposite>",
  );
}

export function feConvolveMatrix(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeConvolveMatrix >> VNodeFlags.ElementIdOffset),
    "<feConvolveMatrix",
    null,
    className === void 0 ? null : className,
    null,
    "</feConvolveMatrix>",
  );
}

export function feDiffuseLighting(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeDiffuseLighting >> VNodeFlags.ElementIdOffset),
    "<feDiffuseLighting",
    null,
    className === void 0 ? null : className,
    null,
    "</feDiffuseLighting>",
  );
}

export function feDisplacementMap(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeDisplacementMap >> VNodeFlags.ElementIdOffset),
    "<feDisplacementMap",
    null,
    className === void 0 ? null : className,
    null,
    "</feDisplacementMap>",
  );
}

export function feDistantLight(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeDistantLight >> VNodeFlags.ElementIdOffset),
    "<feDistantLight",
    null,
    className === void 0 ? null : className,
    null,
    "</feDistantLight>",
  );
}

export function feDropShadow(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeDropShadow >> VNodeFlags.ElementIdOffset),
    "<feDropShadow",
    null,
    className === void 0 ? null : className,
    null,
    "</feDropShadow>",
  );
}

export function feFlood(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeFlood >> VNodeFlags.ElementIdOffset),
    "<feFlood",
    null,
    className === void 0 ? null : className,
    null,
    "</feFlood>",
  );
}

export function feFuncA(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeFuncA >> VNodeFlags.ElementIdOffset),
    "<feFuncA",
    null,
    className === void 0 ? null : className,
    null,
    "</feFuncA>",
  );
}

export function feFuncB(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeFuncB >> VNodeFlags.ElementIdOffset),
    "<feFuncB",
    null,
    className === void 0 ? null : className,
    null,
    "</feFuncB>",
  );
}

export function feFuncG(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeFuncG >> VNodeFlags.ElementIdOffset),
    "<feFuncG",
    null,
    className === void 0 ? null : className,
    null,
    "</feFuncG>",
  );
}

export function feFuncR(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeFuncR >> VNodeFlags.ElementIdOffset),
    "<feFuncR",
    null,
    className === void 0 ? null : className,
    null,
    "</feFuncR>",
  );
}

export function feGaussianBlur(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeGaussianBlur >> VNodeFlags.ElementIdOffset),
    "<feGaussianBlur",
    null,
    className === void 0 ? null : className,
    null,
    "</feGaussianBlur>",
  );
}

export function feImage(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeImage >> VNodeFlags.ElementIdOffset),
    "<feImage",
    null,
    className === void 0 ? null : className,
    null,
    "</feImage>",
  );
}

export function feMerge(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeMerge >> VNodeFlags.ElementIdOffset),
    "<feMerge",
    null,
    className === void 0 ? null : className,
    null,
    "</feMerge>",
  );
}

export function feMergeNode(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeMergeNode >> VNodeFlags.ElementIdOffset),
    "<feMergeNode",
    null,
    className === void 0 ? null : className,
    null,
    "</feMergeNode>",
  );
}

export function feMorphology(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeMorphology >> VNodeFlags.ElementIdOffset),
    "<feMorphology",
    null,
    className === void 0 ? null : className,
    null,
    "</feMorphology>",
  );
}

export function feOffset(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeOffset >> VNodeFlags.ElementIdOffset),
    "<feOffset",
    null,
    className === void 0 ? null : className,
    null,
    "</feOffset>",
  );
}

export function fePointLight(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FePointLight >> VNodeFlags.ElementIdOffset),
    "<fePointLight",
    null,
    className === void 0 ? null : className,
    null,
    "</fePointLight>",
  );
}

export function feSpecularLighting(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeSpecularLighting >> VNodeFlags.ElementIdOffset),
    "<feSpecularLighting",
    null,
    className === void 0 ? null : className,
    null,
    "</feSpecularLighting>",
  );
}

export function feSpotLight(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeSpotLight >> VNodeFlags.ElementIdOffset),
    "<feSpotLight",
    null,
    className === void 0 ? null : className,
    null,
    "</feSpotLight>",
  );
}

export function feTile(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeTile >> VNodeFlags.ElementIdOffset),
    "<feTile",
    null,
    className === void 0 ? null : className,
    null,
    "</feTile>",
  );
}

export function feTurbulence(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeTurbulence >> VNodeFlags.ElementIdOffset),
    "<feTurbulence",
    null,
    className === void 0 ? null : className,
    null,
    "</feTurbulence>",
  );
}

export function filter(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Filter >> VNodeFlags.ElementIdOffset),
    "<filter",
    null,
    className === void 0 ? null : className,
    null,
    "</filter>",
  );
}

export function font(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Font >> VNodeFlags.ElementIdOffset),
    "<font",
    null,
    className === void 0 ? null : className,
    null,
    "</font>",
  );
}

export function fontFace(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FontFace >> VNodeFlags.ElementIdOffset),
    "<font-face",
    null,
    className === void 0 ? null : className,
    null,
    "</font-face>",
  );
}

export function fontFaceFormat(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FontFaceFormat >> VNodeFlags.ElementIdOffset),
    "<font-face-format",
    null,
    className === void 0 ? null : className,
    null,
    "</font-face-format>",
  );
}

export function fontFaceName(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FontFaceName >> VNodeFlags.ElementIdOffset),
    "<font-face-name",
    null,
    className === void 0 ? null : className,
    null,
    "</font-face-name>",
  );
}

export function fontFaceSrc(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FontFaceSrc >> VNodeFlags.ElementIdOffset),
    "<font-face-src",
    null,
    className === void 0 ? null : className,
    null,
    "</font-face-src>",
  );
}

export function fontFaceUri(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FontFaceUri >> VNodeFlags.ElementIdOffset),
    "<font-face-uri",
    null,
    className === void 0 ? null : className,
    null,
    "</font-face-uri>",
  );
}

export function foreignObject(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.ForeignObject >> VNodeFlags.ElementIdOffset),
    "<foreignObject",
    null,
    className === void 0 ? null : className,
    null,
    "</foreignObject>",
  );
}

export function g(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.G >> VNodeFlags.ElementIdOffset),
    "<g",
    null,
    className === void 0 ? null : className,
    null,
    "</g>",
  );
}

export function glyph(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Glyph >> VNodeFlags.ElementIdOffset),
    "<glyph",
    null,
    className === void 0 ? null : className,
    null,
    "</glyph>",
  );
}

export function glyphRef(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.GlyphRef >> VNodeFlags.ElementIdOffset),
    "<glyphRef",
    null,
    className === void 0 ? null : className,
    null,
    "</glyphRef>",
  );
}

export function hatch(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Hatch >> VNodeFlags.ElementIdOffset),
    "<hatch",
    null,
    className === void 0 ? null : className,
    null,
    "</hatch>",
  );
}

export function hatchpath(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Hatchpath >> VNodeFlags.ElementIdOffset),
    "<hatchpath",
    null,
    className === void 0 ? null : className,
    null,
    "</hatchpath>",
  );
}

export function hkern(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Hkern >> VNodeFlags.ElementIdOffset),
    "<hkern",
    null,
    className === void 0 ? null : className,
    null,
    "</hkern>",
  );
}

export function image(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Image >> VNodeFlags.ElementIdOffset),
    "<image",
    null,
    className === void 0 ? null : className,
    null,
    "</image>",
  );
}

export function line(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Line >> VNodeFlags.ElementIdOffset),
    "<line",
    null,
    className === void 0 ? null : className,
    null,
    "</line>",
  );
}

export function linearGradient(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.LinearGradient >> VNodeFlags.ElementIdOffset),
    "<linearGradient",
    null,
    className === void 0 ? null : className,
    null,
    "</linearGradient>",
  );
}

export function marker(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Marker >> VNodeFlags.ElementIdOffset),
    "<marker",
    null,
    className === void 0 ? null : className,
    null,
    "</marker>",
  );
}

export function mask(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Mask >> VNodeFlags.ElementIdOffset),
    "<mask",
    null,
    className === void 0 ? null : className,
    null,
    "</mask>",
  );
}

export function mesh(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Mesh >> VNodeFlags.ElementIdOffset),
    "<mesh",
    null,
    className === void 0 ? null : className,
    null,
    "</mesh>",
  );
}

export function meshgradient(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Meshgradient >> VNodeFlags.ElementIdOffset),
    "<meshgradient",
    null,
    className === void 0 ? null : className,
    null,
    "</meshgradient>",
  );
}

export function meshpatch(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Meshpatch >> VNodeFlags.ElementIdOffset),
    "<meshpatch",
    null,
    className === void 0 ? null : className,
    null,
    "</meshpatch>",
  );
}

export function meshrow(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Meshrow >> VNodeFlags.ElementIdOffset),
    "<meshrow",
    null,
    className === void 0 ? null : className,
    null,
    "</meshrow>",
  );
}

export function metadata(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Metadata >> VNodeFlags.ElementIdOffset),
    "<metadata",
    null,
    className === void 0 ? null : className,
    null,
    "</metadata>",
  );
}

export function missingGlyph(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.MissingGlyph >> VNodeFlags.ElementIdOffset),
    "<missing-glyph",
    null,
    className === void 0 ? null : className,
    null,
    "</missing-glyph>",
  );
}

export function mpath(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Mpath >> VNodeFlags.ElementIdOffset),
    "<mpath",
    null,
    className === void 0 ? null : className,
    null,
    "</mpath>",
  );
}

export function path(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Path >> VNodeFlags.ElementIdOffset),
    "<path",
    null,
    className === void 0 ? null : className,
    null,
    "</path>",
  );
}

export function pattern(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Pattern >> VNodeFlags.ElementIdOffset),
    "<pattern",
    null,
    className === void 0 ? null : className,
    null,
    "</pattern>",
  );
}

export function polygon(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Polygon >> VNodeFlags.ElementIdOffset),
    "<polygon",
    null,
    className === void 0 ? null : className,
    null,
    "</polygon>",
  );
}

export function polyline(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Polyline >> VNodeFlags.ElementIdOffset),
    "<polyline",
    null,
    className === void 0 ? null : className,
    null,
    "</polyline>",
  );
}

export function radialGradient(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.RadialGradient >> VNodeFlags.ElementIdOffset),
    "<radialGradient",
    null,
    className === void 0 ? null : className,
    null,
    "</radialGradient>",
  );
}

export function rect(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Rect >> VNodeFlags.ElementIdOffset),
    "<rect",
    null,
    className === void 0 ? null : className,
    null,
    "</rect>",
  );
}

export function set(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Set >> VNodeFlags.ElementIdOffset),
    "<set",
    null,
    className === void 0 ? null : className,
    null,
    "</set>",
  );
}

export function solidcolor(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Solidcolor >> VNodeFlags.ElementIdOffset),
    "<solidcolor",
    null,
    className === void 0 ? null : className,
    null,
    "</solidcolor>",
  );
}

export function stop(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Stop >> VNodeFlags.ElementIdOffset),
    "<stop",
    null,
    className === void 0 ? null : className,
    null,
    "</stop>",
  );
}

export function svg(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Svg >> VNodeFlags.ElementIdOffset),
    "<svg",
    null,
    className === void 0 ? null : className,
    null,
    "</svg>",
  );
}

export function svgSwitch(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Switch >> VNodeFlags.ElementIdOffset),
    "<switch",
    null,
    className === void 0 ? null : className,
    null,
    "</switch>",
  );
}

export function symbol(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Symbol >> VNodeFlags.ElementIdOffset),
    "<symbol",
    null,
    className === void 0 ? null : className,
    null,
    "</symbol>",
  );
}

export function text(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Text >> VNodeFlags.ElementIdOffset),
    "<text",
    null,
    className === void 0 ? null : className,
    null,
    "</text>",
  );
}

export function textPath(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.TextPath >> VNodeFlags.ElementIdOffset),
    "<textPath",
    null,
    className === void 0 ? null : className,
    null,
    "</textPath>",
  );
}

export function title(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Title >> VNodeFlags.ElementIdOffset),
    "<title",
    null,
    className === void 0 ? null : className,
    null,
    "</title>",
  );
}

export function tref(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Tref >> VNodeFlags.ElementIdOffset),
    "<tref",
    null,
    className === void 0 ? null : className,
    null,
    "</tref>",
  );
}

export function tspan(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Tspan >> VNodeFlags.ElementIdOffset),
    "<tspan",
    null,
    className === void 0 ? null : className,
    null,
    "</tspan>",
  );
}

export function use(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Use >> VNodeFlags.ElementIdOffset),
    "<use",
    null,
    className === void 0 ? null : className,
    null,
    "</use>",
  );
}

export function view(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.View >> VNodeFlags.ElementIdOffset),
    "<view",
    null,
    className === void 0 ? null : className,
    null,
    "</view>",
  );
}

export function vkern(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Vkern >> VNodeFlags.ElementIdOffset),
    "<vkern",
    null,
    className === void 0 ? null : className,
    null,
    "</vkern>",
  );
}
