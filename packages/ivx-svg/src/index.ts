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
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.A << VNodeFlags.UniqueIdOffset),
    "<a",
    null,
    className === void 0 ? null : className,
    null,
    "</a>",
  );
}

export function altGlyph(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.AltGlyph << VNodeFlags.UniqueIdOffset),
    "<altGlyph",
    null,
    className === void 0 ? null : className,
    null,
    "</altGlyph>",
  );
}

export function altGlyphDef(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.AltGlyphDef << VNodeFlags.UniqueIdOffset),
    "<altGlyphDef",
    null,
    className === void 0 ? null : className,
    null,
    "</altGlyphDef>",
  );
}

export function altGlyphItem(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.AltGlyphItem << VNodeFlags.UniqueIdOffset),
    "<altGlyphItem",
    null,
    className === void 0 ? null : className,
    null,
    "</altGlyphItem>",
  );
}

export function animate(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Animate << VNodeFlags.UniqueIdOffset),
    "<animate",
    null,
    className === void 0 ? null : className,
    null,
    "</animate>",
  );
}

export function animateColor(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.AnimateColor << VNodeFlags.UniqueIdOffset),
    "<animateColor",
    null,
    className === void 0 ? null : className,
    null,
    "</animateColor>",
  );
}

export function animateMotion(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.AnimateMotion << VNodeFlags.UniqueIdOffset),
    "<animateMotion",
    null,
    className === void 0 ? null : className,
    null,
    "</animateMotion>",
  );
}

export function animateTransform(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.AnimateTransform << VNodeFlags.UniqueIdOffset),
    "<animateTransform",
    null,
    className === void 0 ? null : className,
    null,
    "</animateTransform>",
  );
}

export function circle(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Circle << VNodeFlags.UniqueIdOffset),
    "<circle",
    null,
    className === void 0 ? null : className,
    null,
    "</circle>",
  );
}

export function clipPath(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.ClipPath << VNodeFlags.UniqueIdOffset),
    "<clipPath",
    null,
    className === void 0 ? null : className,
    null,
    "</clipPath>",
  );
}

export function colorProfile(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.ColorProfile << VNodeFlags.UniqueIdOffset),
    "<color-profile",
    null,
    className === void 0 ? null : className,
    null,
    "</color-profile>",
  );
}

export function cursor(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Cursor << VNodeFlags.UniqueIdOffset),
    "<cursor",
    null,
    className === void 0 ? null : className,
    null,
    "</cursor>",
  );
}

export function defs(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Defs << VNodeFlags.UniqueIdOffset),
    "<defs",
    null,
    className === void 0 ? null : className,
    null,
    "</defs>",
  );
}

export function desc(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Desc << VNodeFlags.UniqueIdOffset),
    "<desc",
    null,
    className === void 0 ? null : className,
    null,
    "</desc>",
  );
}

export function discard(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Discard << VNodeFlags.UniqueIdOffset),
    "<discard",
    null,
    className === void 0 ? null : className,
    null,
    "</discard>",
  );
}

export function ellipse(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Ellipse << VNodeFlags.UniqueIdOffset),
    "<ellipse",
    null,
    className === void 0 ? null : className,
    null,
    "</ellipse>",
  );
}

export function feBlend(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeBlend << VNodeFlags.UniqueIdOffset),
    "<feBlend",
    null,
    className === void 0 ? null : className,
    null,
    "</feBlend>",
  );
}

export function feColorMatrix(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeColorMatrix << VNodeFlags.UniqueIdOffset),
    "<feColorMatrix",
    null,
    className === void 0 ? null : className,
    null,
    "</feColorMatrix>",
  );
}

export function feComponentTransfer(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeComponentTransfer << VNodeFlags.UniqueIdOffset),
    "<feComponentTransfer",
    null,
    className === void 0 ? null : className,
    null,
    "</feComponentTransfer>",
  );
}

export function feComposite(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeComposite << VNodeFlags.UniqueIdOffset),
    "<feComposite",
    null,
    className === void 0 ? null : className,
    null,
    "</feComposite>",
  );
}

export function feConvolveMatrix(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeConvolveMatrix << VNodeFlags.UniqueIdOffset),
    "<feConvolveMatrix",
    null,
    className === void 0 ? null : className,
    null,
    "</feConvolveMatrix>",
  );
}

export function feDiffuseLighting(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeDiffuseLighting << VNodeFlags.UniqueIdOffset),
    "<feDiffuseLighting",
    null,
    className === void 0 ? null : className,
    null,
    "</feDiffuseLighting>",
  );
}

export function feDisplacementMap(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeDisplacementMap << VNodeFlags.UniqueIdOffset),
    "<feDisplacementMap",
    null,
    className === void 0 ? null : className,
    null,
    "</feDisplacementMap>",
  );
}

export function feDistantLight(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeDistantLight << VNodeFlags.UniqueIdOffset),
    "<feDistantLight",
    null,
    className === void 0 ? null : className,
    null,
    "</feDistantLight>",
  );
}

export function feDropShadow(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeDropShadow << VNodeFlags.UniqueIdOffset),
    "<feDropShadow",
    null,
    className === void 0 ? null : className,
    null,
    "</feDropShadow>",
  );
}

export function feFlood(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeFlood << VNodeFlags.UniqueIdOffset),
    "<feFlood",
    null,
    className === void 0 ? null : className,
    null,
    "</feFlood>",
  );
}

export function feFuncA(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeFuncA << VNodeFlags.UniqueIdOffset),
    "<feFuncA",
    null,
    className === void 0 ? null : className,
    null,
    "</feFuncA>",
  );
}

export function feFuncB(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeFuncB << VNodeFlags.UniqueIdOffset),
    "<feFuncB",
    null,
    className === void 0 ? null : className,
    null,
    "</feFuncB>",
  );
}

export function feFuncG(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeFuncG << VNodeFlags.UniqueIdOffset),
    "<feFuncG",
    null,
    className === void 0 ? null : className,
    null,
    "</feFuncG>",
  );
}

export function feFuncR(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeFuncR << VNodeFlags.UniqueIdOffset),
    "<feFuncR",
    null,
    className === void 0 ? null : className,
    null,
    "</feFuncR>",
  );
}

export function feGaussianBlur(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeGaussianBlur << VNodeFlags.UniqueIdOffset),
    "<feGaussianBlur",
    null,
    className === void 0 ? null : className,
    null,
    "</feGaussianBlur>",
  );
}

export function feImage(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeImage << VNodeFlags.UniqueIdOffset),
    "<feImage",
    null,
    className === void 0 ? null : className,
    null,
    "</feImage>",
  );
}

export function feMerge(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeMerge << VNodeFlags.UniqueIdOffset),
    "<feMerge",
    null,
    className === void 0 ? null : className,
    null,
    "</feMerge>",
  );
}

export function feMergeNode(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeMergeNode << VNodeFlags.UniqueIdOffset),
    "<feMergeNode",
    null,
    className === void 0 ? null : className,
    null,
    "</feMergeNode>",
  );
}

export function feMorphology(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeMorphology << VNodeFlags.UniqueIdOffset),
    "<feMorphology",
    null,
    className === void 0 ? null : className,
    null,
    "</feMorphology>",
  );
}

export function feOffset(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeOffset << VNodeFlags.UniqueIdOffset),
    "<feOffset",
    null,
    className === void 0 ? null : className,
    null,
    "</feOffset>",
  );
}

export function fePointLight(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FePointLight << VNodeFlags.UniqueIdOffset),
    "<fePointLight",
    null,
    className === void 0 ? null : className,
    null,
    "</fePointLight>",
  );
}

export function feSpecularLighting(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeSpecularLighting << VNodeFlags.UniqueIdOffset),
    "<feSpecularLighting",
    null,
    className === void 0 ? null : className,
    null,
    "</feSpecularLighting>",
  );
}

export function feSpotLight(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeSpotLight << VNodeFlags.UniqueIdOffset),
    "<feSpotLight",
    null,
    className === void 0 ? null : className,
    null,
    "</feSpotLight>",
  );
}

export function feTile(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeTile << VNodeFlags.UniqueIdOffset),
    "<feTile",
    null,
    className === void 0 ? null : className,
    null,
    "</feTile>",
  );
}

export function feTurbulence(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeTurbulence << VNodeFlags.UniqueIdOffset),
    "<feTurbulence",
    null,
    className === void 0 ? null : className,
    null,
    "</feTurbulence>",
  );
}

export function filter(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Filter << VNodeFlags.UniqueIdOffset),
    "<filter",
    null,
    className === void 0 ? null : className,
    null,
    "</filter>",
  );
}

export function font(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Font << VNodeFlags.UniqueIdOffset),
    "<font",
    null,
    className === void 0 ? null : className,
    null,
    "</font>",
  );
}

export function fontFace(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FontFace << VNodeFlags.UniqueIdOffset),
    "<font-face",
    null,
    className === void 0 ? null : className,
    null,
    "</font-face>",
  );
}

export function fontFaceFormat(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FontFaceFormat << VNodeFlags.UniqueIdOffset),
    "<font-face-format",
    null,
    className === void 0 ? null : className,
    null,
    "</font-face-format>",
  );
}

export function fontFaceName(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FontFaceName << VNodeFlags.UniqueIdOffset),
    "<font-face-name",
    null,
    className === void 0 ? null : className,
    null,
    "</font-face-name>",
  );
}

export function fontFaceSrc(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FontFaceSrc << VNodeFlags.UniqueIdOffset),
    "<font-face-src",
    null,
    className === void 0 ? null : className,
    null,
    "</font-face-src>",
  );
}

export function fontFaceUri(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FontFaceUri << VNodeFlags.UniqueIdOffset),
    "<font-face-uri",
    null,
    className === void 0 ? null : className,
    null,
    "</font-face-uri>",
  );
}

export function foreignObject(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.ForeignObject << VNodeFlags.UniqueIdOffset),
    "<foreignObject",
    null,
    className === void 0 ? null : className,
    null,
    "</foreignObject>",
  );
}

export function g(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.G << VNodeFlags.UniqueIdOffset),
    "<g",
    null,
    className === void 0 ? null : className,
    null,
    "</g>",
  );
}

export function glyph(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Glyph << VNodeFlags.UniqueIdOffset),
    "<glyph",
    null,
    className === void 0 ? null : className,
    null,
    "</glyph>",
  );
}

export function glyphRef(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.GlyphRef << VNodeFlags.UniqueIdOffset),
    "<glyphRef",
    null,
    className === void 0 ? null : className,
    null,
    "</glyphRef>",
  );
}

export function hatch(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Hatch << VNodeFlags.UniqueIdOffset),
    "<hatch",
    null,
    className === void 0 ? null : className,
    null,
    "</hatch>",
  );
}

export function hatchpath(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Hatchpath << VNodeFlags.UniqueIdOffset),
    "<hatchpath",
    null,
    className === void 0 ? null : className,
    null,
    "</hatchpath>",
  );
}

export function hkern(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Hkern << VNodeFlags.UniqueIdOffset),
    "<hkern",
    null,
    className === void 0 ? null : className,
    null,
    "</hkern>",
  );
}

export function image(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Image << VNodeFlags.UniqueIdOffset),
    "<image",
    null,
    className === void 0 ? null : className,
    null,
    "</image>",
  );
}

export function line(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Line << VNodeFlags.UniqueIdOffset),
    "<line",
    null,
    className === void 0 ? null : className,
    null,
    "</line>",
  );
}

export function linearGradient(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.LinearGradient << VNodeFlags.UniqueIdOffset),
    "<linearGradient",
    null,
    className === void 0 ? null : className,
    null,
    "</linearGradient>",
  );
}

export function marker(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Marker << VNodeFlags.UniqueIdOffset),
    "<marker",
    null,
    className === void 0 ? null : className,
    null,
    "</marker>",
  );
}

export function mask(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Mask << VNodeFlags.UniqueIdOffset),
    "<mask",
    null,
    className === void 0 ? null : className,
    null,
    "</mask>",
  );
}

export function mesh(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Mesh << VNodeFlags.UniqueIdOffset),
    "<mesh",
    null,
    className === void 0 ? null : className,
    null,
    "</mesh>",
  );
}

export function meshgradient(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Meshgradient << VNodeFlags.UniqueIdOffset),
    "<meshgradient",
    null,
    className === void 0 ? null : className,
    null,
    "</meshgradient>",
  );
}

export function meshpatch(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Meshpatch << VNodeFlags.UniqueIdOffset),
    "<meshpatch",
    null,
    className === void 0 ? null : className,
    null,
    "</meshpatch>",
  );
}

export function meshrow(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Meshrow << VNodeFlags.UniqueIdOffset),
    "<meshrow",
    null,
    className === void 0 ? null : className,
    null,
    "</meshrow>",
  );
}

export function metadata(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Metadata << VNodeFlags.UniqueIdOffset),
    "<metadata",
    null,
    className === void 0 ? null : className,
    null,
    "</metadata>",
  );
}

export function missingGlyph(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.MissingGlyph << VNodeFlags.UniqueIdOffset),
    "<missing-glyph",
    null,
    className === void 0 ? null : className,
    null,
    "</missing-glyph>",
  );
}

export function mpath(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Mpath << VNodeFlags.UniqueIdOffset),
    "<mpath",
    null,
    className === void 0 ? null : className,
    null,
    "</mpath>",
  );
}

export function path(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Path << VNodeFlags.UniqueIdOffset),
    "<path",
    null,
    className === void 0 ? null : className,
    null,
    "</path>",
  );
}

export function pattern(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Pattern << VNodeFlags.UniqueIdOffset),
    "<pattern",
    null,
    className === void 0 ? null : className,
    null,
    "</pattern>",
  );
}

export function polygon(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Polygon << VNodeFlags.UniqueIdOffset),
    "<polygon",
    null,
    className === void 0 ? null : className,
    null,
    "</polygon>",
  );
}

export function polyline(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Polyline << VNodeFlags.UniqueIdOffset),
    "<polyline",
    null,
    className === void 0 ? null : className,
    null,
    "</polyline>",
  );
}

export function radialGradient(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.RadialGradient << VNodeFlags.UniqueIdOffset),
    "<radialGradient",
    null,
    className === void 0 ? null : className,
    null,
    "</radialGradient>",
  );
}

export function rect(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Rect << VNodeFlags.UniqueIdOffset),
    "<rect",
    null,
    className === void 0 ? null : className,
    null,
    "</rect>",
  );
}

export function set(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Set << VNodeFlags.UniqueIdOffset),
    "<set",
    null,
    className === void 0 ? null : className,
    null,
    "</set>",
  );
}

export function solidcolor(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Solidcolor << VNodeFlags.UniqueIdOffset),
    "<solidcolor",
    null,
    className === void 0 ? null : className,
    null,
    "</solidcolor>",
  );
}

export function stop(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Stop << VNodeFlags.UniqueIdOffset),
    "<stop",
    null,
    className === void 0 ? null : className,
    null,
    "</stop>",
  );
}

export function svg(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Svg << VNodeFlags.UniqueIdOffset),
    "<svg",
    null,
    className === void 0 ? null : className,
    null,
    "</svg>",
  );
}

export function svgSwitch(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Switch << VNodeFlags.UniqueIdOffset),
    "<switch",
    null,
    className === void 0 ? null : className,
    null,
    "</switch>",
  );
}

export function symbol(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Symbol << VNodeFlags.UniqueIdOffset),
    "<symbol",
    null,
    className === void 0 ? null : className,
    null,
    "</symbol>",
  );
}

export function text(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Text << VNodeFlags.UniqueIdOffset),
    "<text",
    null,
    className === void 0 ? null : className,
    null,
    "</text>",
  );
}

export function textPath(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.TextPath << VNodeFlags.UniqueIdOffset),
    "<textPath",
    null,
    className === void 0 ? null : className,
    null,
    "</textPath>",
  );
}

export function title(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Title << VNodeFlags.UniqueIdOffset),
    "<title",
    null,
    className === void 0 ? null : className,
    null,
    "</title>",
  );
}

export function tref(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Tref << VNodeFlags.UniqueIdOffset),
    "<tref",
    null,
    className === void 0 ? null : className,
    null,
    "</tref>",
  );
}

export function tspan(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Tspan << VNodeFlags.UniqueIdOffset),
    "<tspan",
    null,
    className === void 0 ? null : className,
    null,
    "</tspan>",
  );
}

export function use(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Use << VNodeFlags.UniqueIdOffset),
    "<use",
    null,
    className === void 0 ? null : className,
    null,
    "</use>",
  );
}

export function view(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.View << VNodeFlags.UniqueIdOffset),
    "<view",
    null,
    className === void 0 ? null : className,
    null,
    "</view>",
  );
}

export function vkern(className?: string): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Vkern << VNodeFlags.UniqueIdOffset),
    "<vkern",
    null,
    className === void 0 ? null : className,
    null,
    "</vkern>",
  );
}
