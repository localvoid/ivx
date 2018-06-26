import { VNode, VNodeFlags } from "ivx";

const enum TagId {
  A = 1,
  Animate = 2,
  AnimateColor = 3,
  AnimateMotion = 4,
  AnimateTransform = 5,
  Circle = 6,
  ClipPath = 7,
  Defs = 8,
  Desc = 9,
  Discard = 10,
  Ellipse = 11,
  FeBlend = 12,
  FeColorMatrix = 13,
  FeComponentTransfer = 14,
  FeComposite = 15,
  FeConvolveMatrix = 16,
  FeDiffuseLighting = 17,
  FeDisplacementMap = 18,
  FeDistantLight = 19,
  FeDropShadow = 20,
  FeFlood = 21,
  FeFuncA = 22,
  FeFuncB = 23,
  FeFuncG = 24,
  FeFuncR = 25,
  FeGaussianBlur = 26,
  FeImage = 27,
  FeMerge = 28,
  FeMergeNode = 29,
  FeMorphology = 30,
  FeOffset = 31,
  FePointLight = 32,
  FeSpecularLighting = 33,
  FeSpotLight = 34,
  FeTile = 35,
  FeTurbulence = 36,
  Filter = 37,
  ForeignObject = 38,
  G = 39,
  Hatch = 40,
  Hatchpath = 41,
  Image = 42,
  Line = 43,
  LinearGradient = 44,
  Marker = 45,
  Mask = 46,
  Mesh = 47,
  Meshgradient = 48,
  Meshpatch = 49,
  Meshrow = 50,
  Metadata = 51,
  Mpath = 52,
  Path = 53,
  Pattern = 54,
  Polygon = 55,
  Polyline = 56,
  RadialGradient = 57,
  Rect = 58,
  Set = 59,
  Solidcolor = 60,
  Stop = 61,
  Svg = 62,
  Symbol = 63,
  Text = 64,
  TextPath = 65,
  Title = 66,
  Tspan = 67,
  Use = 68,
  View = 69,
}

/**
 * Creates Virtual DOM SVG element <a>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <a>
 */
export function a(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.A << VNodeFlags.UniqueIdOffset),
    "<a",
    attrs,
    className,
    null,
    css,
    "</a>",
  );
}

/**
 * Creates Virtual DOM SVG element <animate>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/animate}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <animate>
 */
export function animate(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Animate << VNodeFlags.UniqueIdOffset),
    "<animate",
    attrs,
    className,
    null,
    css,
    "</animate>",
  );
}

/**
 * Creates Virtual DOM SVG element <animateColor>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/animateColor}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <animateColor>
 */
export function animateColor(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.AnimateColor << VNodeFlags.UniqueIdOffset),
    "<animateColor",
    attrs,
    className,
    null,
    css,
    "</animateColor>",
  );
}

/**
 * Creates Virtual DOM SVG element <animateMotion>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/animateMotion}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <animateMotion>
 */
export function animateMotion(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.AnimateMotion << VNodeFlags.UniqueIdOffset),
    "<animateMotion",
    attrs,
    className,
    null,
    css,
    "</animateMotion>",
  );
}

/**
 * Creates Virtual DOM SVG element <animateTransform>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/animateTransform}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <animateTransform>
 */
export function animateTransform(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.AnimateTransform << VNodeFlags.UniqueIdOffset),
    "<animateTransform",
    attrs,
    className,
    null,
    css,
    "</animateTransform>",
  );
}

/**
 * Creates Virtual DOM SVG element <circle>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/circle}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <circle>
 */
export function circle(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Circle << VNodeFlags.UniqueIdOffset),
    "<circle",
    attrs,
    className,
    null,
    css,
    "</circle>",
  );
}

/**
 * Creates Virtual DOM SVG element <clipPath>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/clipPath}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <clipPath>
 */
export function clipPath(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.ClipPath << VNodeFlags.UniqueIdOffset),
    "<clipPath",
    attrs,
    className,
    null,
    css,
    "</clipPath>",
  );
}

/**
 * Creates Virtual DOM SVG element <defs>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/defs}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <defs>
 */
export function defs(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Defs << VNodeFlags.UniqueIdOffset),
    "<defs",
    attrs,
    className,
    null,
    css,
    "</defs>",
  );
}

/**
 * Creates Virtual DOM SVG element <desc>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/desc}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <desc>
 */
export function desc(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Desc << VNodeFlags.UniqueIdOffset),
    "<desc",
    attrs,
    className,
    null,
    css,
    "</desc>",
  );
}

/**
 * Creates Virtual DOM SVG element <discard>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/discard}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <discard>
 */
export function discard(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Discard << VNodeFlags.UniqueIdOffset),
    "<discard",
    attrs,
    className,
    null,
    css,
    "</discard>",
  );
}

/**
 * Creates Virtual DOM SVG element <ellipse>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ellipse}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <ellipse>
 */
export function ellipse(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Ellipse << VNodeFlags.UniqueIdOffset),
    "<ellipse",
    attrs,
    className,
    null,
    css,
    "</ellipse>",
  );
}

/**
 * Creates Virtual DOM SVG element <feBlend>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/feBlend}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <feBlend>
 */
export function feBlend(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeBlend << VNodeFlags.UniqueIdOffset),
    "<feBlend",
    attrs,
    className,
    null,
    css,
    "</feBlend>",
  );
}

/**
 * Creates Virtual DOM SVG element <feColorMatrix>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/feColorMatrix}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <feColorMatrix>
 */
export function feColorMatrix(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeColorMatrix << VNodeFlags.UniqueIdOffset),
    "<feColorMatrix",
    attrs,
    className,
    null,
    css,
    "</feColorMatrix>",
  );
}

/**
 * Creates Virtual DOM SVG element <feComponentTransfer>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/feComponentTransfer}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <feComponentTransfer>
 */
export function feComponentTransfer(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeComponentTransfer << VNodeFlags.UniqueIdOffset),
    "<feComponentTransfer",
    attrs,
    className,
    null,
    css,
    "</feComponentTransfer>",
  );
}

/**
 * Creates Virtual DOM SVG element <feComposite>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/feComposite}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <feComposite>
 */
export function feComposite(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeComposite << VNodeFlags.UniqueIdOffset),
    "<feComposite",
    attrs,
    className,
    null,
    css,
    "</feComposite>",
  );
}

/**
 * Creates Virtual DOM SVG element <feConvolveMatrix>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/feConvolveMatrix}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <feConvolveMatrix>
 */
export function feConvolveMatrix(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeConvolveMatrix << VNodeFlags.UniqueIdOffset),
    "<feConvolveMatrix",
    attrs,
    className,
    null,
    css,
    "</feConvolveMatrix>",
  );
}

/**
 * Creates Virtual DOM SVG element <feDiffuseLighting>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/feDiffuseLighting}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <feDiffuseLighting>
 */
export function feDiffuseLighting(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeDiffuseLighting << VNodeFlags.UniqueIdOffset),
    "<feDiffuseLighting",
    attrs,
    className,
    null,
    css,
    "</feDiffuseLighting>",
  );
}

/**
 * Creates Virtual DOM SVG element <feDisplacementMap>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/feDisplacementMap}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <feDisplacementMap>
 */
export function feDisplacementMap(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeDisplacementMap << VNodeFlags.UniqueIdOffset),
    "<feDisplacementMap",
    attrs,
    className,
    null,
    css,
    "</feDisplacementMap>",
  );
}

/**
 * Creates Virtual DOM SVG element <feDistantLight>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/feDistantLight}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <feDistantLight>
 */
export function feDistantLight(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeDistantLight << VNodeFlags.UniqueIdOffset),
    "<feDistantLight",
    attrs,
    className,
    null,
    css,
    "</feDistantLight>",
  );
}

/**
 * Creates Virtual DOM SVG element <feDropShadow>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/feDropShadow}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <feDropShadow>
 */
export function feDropShadow(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeDropShadow << VNodeFlags.UniqueIdOffset),
    "<feDropShadow",
    attrs,
    className,
    null,
    css,
    "</feDropShadow>",
  );
}

/**
 * Creates Virtual DOM SVG element <feFlood>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/feFlood}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <feFlood>
 */
export function feFlood(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeFlood << VNodeFlags.UniqueIdOffset),
    "<feFlood",
    attrs,
    className,
    null,
    css,
    "</feFlood>",
  );
}

/**
 * Creates Virtual DOM SVG element <feFuncA>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/feFuncA}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <feFuncA>
 */
export function feFuncA(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeFuncA << VNodeFlags.UniqueIdOffset),
    "<feFuncA",
    attrs,
    className,
    null,
    css,
    "</feFuncA>",
  );
}

/**
 * Creates Virtual DOM SVG element <feFuncB>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/feFuncB}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <feFuncB>
 */
export function feFuncB(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeFuncB << VNodeFlags.UniqueIdOffset),
    "<feFuncB",
    attrs,
    className,
    null,
    css,
    "</feFuncB>",
  );
}

/**
 * Creates Virtual DOM SVG element <feFuncG>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/feFuncG}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <feFuncG>
 */
export function feFuncG(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeFuncG << VNodeFlags.UniqueIdOffset),
    "<feFuncG",
    attrs,
    className,
    null,
    css,
    "</feFuncG>",
  );
}

/**
 * Creates Virtual DOM SVG element <feFuncR>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/feFuncR}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <feFuncR>
 */
export function feFuncR(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeFuncR << VNodeFlags.UniqueIdOffset),
    "<feFuncR",
    attrs,
    className,
    null,
    css,
    "</feFuncR>",
  );
}

/**
 * Creates Virtual DOM SVG element <feGaussianBlur>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/feGaussianBlur}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <feGaussianBlur>
 */
export function feGaussianBlur(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeGaussianBlur << VNodeFlags.UniqueIdOffset),
    "<feGaussianBlur",
    attrs,
    className,
    null,
    css,
    "</feGaussianBlur>",
  );
}

/**
 * Creates Virtual DOM SVG element <feImage>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/feImage}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <feImage>
 */
export function feImage(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeImage << VNodeFlags.UniqueIdOffset),
    "<feImage",
    attrs,
    className,
    null,
    css,
    "</feImage>",
  );
}

/**
 * Creates Virtual DOM SVG element <feMerge>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/feMerge}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <feMerge>
 */
export function feMerge(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeMerge << VNodeFlags.UniqueIdOffset),
    "<feMerge",
    attrs,
    className,
    null,
    css,
    "</feMerge>",
  );
}

/**
 * Creates Virtual DOM SVG element <feMergeNode>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/feMergeNode}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <feMergeNode>
 */
export function feMergeNode(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeMergeNode << VNodeFlags.UniqueIdOffset),
    "<feMergeNode",
    attrs,
    className,
    null,
    css,
    "</feMergeNode>",
  );
}

/**
 * Creates Virtual DOM SVG element <feMorphology>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/feMorphology}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <feMorphology>
 */
export function feMorphology(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeMorphology << VNodeFlags.UniqueIdOffset),
    "<feMorphology",
    attrs,
    className,
    null,
    css,
    "</feMorphology>",
  );
}

/**
 * Creates Virtual DOM SVG element <feOffset>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/feOffset}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <feOffset>
 */
export function feOffset(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeOffset << VNodeFlags.UniqueIdOffset),
    "<feOffset",
    attrs,
    className,
    null,
    css,
    "</feOffset>",
  );
}

/**
 * Creates Virtual DOM SVG element <fePointLight>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fePointLight}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <fePointLight>
 */
export function fePointLight(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FePointLight << VNodeFlags.UniqueIdOffset),
    "<fePointLight",
    attrs,
    className,
    null,
    css,
    "</fePointLight>",
  );
}

/**
 * Creates Virtual DOM SVG element <feSpecularLighting>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/feSpecularLighting}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <feSpecularLighting>
 */
export function feSpecularLighting(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeSpecularLighting << VNodeFlags.UniqueIdOffset),
    "<feSpecularLighting",
    attrs,
    className,
    null,
    css,
    "</feSpecularLighting>",
  );
}

/**
 * Creates Virtual DOM SVG element <feSpotLight>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/feSpotLight}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <feSpotLight>
 */
export function feSpotLight(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeSpotLight << VNodeFlags.UniqueIdOffset),
    "<feSpotLight",
    attrs,
    className,
    null,
    css,
    "</feSpotLight>",
  );
}

/**
 * Creates Virtual DOM SVG element <feTile>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/feTile}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <feTile>
 */
export function feTile(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeTile << VNodeFlags.UniqueIdOffset),
    "<feTile",
    attrs,
    className,
    null,
    css,
    "</feTile>",
  );
}

/**
 * Creates Virtual DOM SVG element <feTurbulence>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/feTurbulence}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <feTurbulence>
 */
export function feTurbulence(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.FeTurbulence << VNodeFlags.UniqueIdOffset),
    "<feTurbulence",
    attrs,
    className,
    null,
    css,
    "</feTurbulence>",
  );
}

/**
 * Creates Virtual DOM SVG element <filter>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/filter}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <filter>
 */
export function filter(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Filter << VNodeFlags.UniqueIdOffset),
    "<filter",
    attrs,
    className,
    null,
    css,
    "</filter>",
  );
}

/**
 * Creates Virtual DOM SVG element <foreignObject>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/foreignObject}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <foreignObject>
 */
export function foreignObject(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.ForeignObject << VNodeFlags.UniqueIdOffset),
    "<foreignObject",
    attrs,
    className,
    null,
    css,
    "</foreignObject>",
  );
}

/**
 * Creates Virtual DOM SVG element <g>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/g}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <g>
 */
export function g(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.G << VNodeFlags.UniqueIdOffset),
    "<g",
    attrs,
    className,
    null,
    css,
    "</g>",
  );
}

/**
 * Creates Virtual DOM SVG element <hatch>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hatch}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <hatch>
 */
export function hatch(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Hatch << VNodeFlags.UniqueIdOffset),
    "<hatch",
    attrs,
    className,
    null,
    css,
    "</hatch>",
  );
}

/**
 * Creates Virtual DOM SVG element <hatchpath>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hatchpath}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <hatchpath>
 */
export function hatchpath(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Hatchpath << VNodeFlags.UniqueIdOffset),
    "<hatchpath",
    attrs,
    className,
    null,
    css,
    "</hatchpath>",
  );
}

/**
 * Creates Virtual DOM SVG element <image>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/image}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <image>
 */
export function image(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Image << VNodeFlags.UniqueIdOffset),
    "<image",
    attrs,
    className,
    null,
    css,
    "</image>",
  );
}

/**
 * Creates Virtual DOM SVG element <line>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/line}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <line>
 */
export function line(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Line << VNodeFlags.UniqueIdOffset),
    "<line",
    attrs,
    className,
    null,
    css,
    "</line>",
  );
}

/**
 * Creates Virtual DOM SVG element <linearGradient>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/linearGradient}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <linearGradient>
 */
export function linearGradient(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.LinearGradient << VNodeFlags.UniqueIdOffset),
    "<linearGradient",
    attrs,
    className,
    null,
    css,
    "</linearGradient>",
  );
}

/**
 * Creates Virtual DOM SVG element <marker>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marker}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <marker>
 */
export function marker(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Marker << VNodeFlags.UniqueIdOffset),
    "<marker",
    attrs,
    className,
    null,
    css,
    "</marker>",
  );
}

/**
 * Creates Virtual DOM SVG element <mask>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mask}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <mask>
 */
export function mask(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Mask << VNodeFlags.UniqueIdOffset),
    "<mask",
    attrs,
    className,
    null,
    css,
    "</mask>",
  );
}

/**
 * Creates Virtual DOM SVG element <mesh>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mesh}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <mesh>
 */
export function mesh(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Mesh << VNodeFlags.UniqueIdOffset),
    "<mesh",
    attrs,
    className,
    null,
    css,
    "</mesh>",
  );
}

/**
 * Creates Virtual DOM SVG element <meshgradient>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meshgradient}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <meshgradient>
 */
export function meshgradient(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Meshgradient << VNodeFlags.UniqueIdOffset),
    "<meshgradient",
    attrs,
    className,
    null,
    css,
    "</meshgradient>",
  );
}

/**
 * Creates Virtual DOM SVG element <meshpatch>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meshpatch}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <meshpatch>
 */
export function meshpatch(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Meshpatch << VNodeFlags.UniqueIdOffset),
    "<meshpatch",
    attrs,
    className,
    null,
    css,
    "</meshpatch>",
  );
}

/**
 * Creates Virtual DOM SVG element <meshrow>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meshrow}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <meshrow>
 */
export function meshrow(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Meshrow << VNodeFlags.UniqueIdOffset),
    "<meshrow",
    attrs,
    className,
    null,
    css,
    "</meshrow>",
  );
}

/**
 * Creates Virtual DOM SVG element <metadata>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/metadata}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <metadata>
 */
export function metadata(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Metadata << VNodeFlags.UniqueIdOffset),
    "<metadata",
    attrs,
    className,
    null,
    css,
    "</metadata>",
  );
}

/**
 * Creates Virtual DOM SVG element <mpath>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mpath}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <mpath>
 */
export function mpath(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Mpath << VNodeFlags.UniqueIdOffset),
    "<mpath",
    attrs,
    className,
    null,
    css,
    "</mpath>",
  );
}

/**
 * Creates Virtual DOM SVG element <path>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/path}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <path>
 */
export function path(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Path << VNodeFlags.UniqueIdOffset),
    "<path",
    attrs,
    className,
    null,
    css,
    "</path>",
  );
}

/**
 * Creates Virtual DOM SVG element <pattern>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pattern}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <pattern>
 */
export function pattern(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Pattern << VNodeFlags.UniqueIdOffset),
    "<pattern",
    attrs,
    className,
    null,
    css,
    "</pattern>",
  );
}

/**
 * Creates Virtual DOM SVG element <polygon>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/polygon}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <polygon>
 */
export function polygon(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Polygon << VNodeFlags.UniqueIdOffset),
    "<polygon",
    attrs,
    className,
    null,
    css,
    "</polygon>",
  );
}

/**
 * Creates Virtual DOM SVG element <polyline>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/polyline}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <polyline>
 */
export function polyline(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Polyline << VNodeFlags.UniqueIdOffset),
    "<polyline",
    attrs,
    className,
    null,
    css,
    "</polyline>",
  );
}

/**
 * Creates Virtual DOM SVG element <radialGradient>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/radialGradient}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <radialGradient>
 */
export function radialGradient(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.RadialGradient << VNodeFlags.UniqueIdOffset),
    "<radialGradient",
    attrs,
    className,
    null,
    css,
    "</radialGradient>",
  );
}

/**
 * Creates Virtual DOM SVG element <rect>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rect}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <rect>
 */
export function rect(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Rect << VNodeFlags.UniqueIdOffset),
    "<rect",
    attrs,
    className,
    null,
    css,
    "</rect>",
  );
}

/**
 * Creates Virtual DOM SVG element <set>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/set}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <set>
 */
export function set(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Set << VNodeFlags.UniqueIdOffset),
    "<set",
    attrs,
    className,
    null,
    css,
    "</set>",
  );
}

/**
 * Creates Virtual DOM SVG element <solidcolor>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/solidcolor}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <solidcolor>
 */
export function solidcolor(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Solidcolor << VNodeFlags.UniqueIdOffset),
    "<solidcolor",
    attrs,
    className,
    null,
    css,
    "</solidcolor>",
  );
}

/**
 * Creates Virtual DOM SVG element <stop>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/stop}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <stop>
 */
export function stop(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Stop << VNodeFlags.UniqueIdOffset),
    "<stop",
    attrs,
    className,
    null,
    css,
    "</stop>",
  );
}

/**
 * Creates Virtual DOM SVG element <svg>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/svg}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <svg>
 */
export function svg(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Svg << VNodeFlags.UniqueIdOffset),
    "<svg",
    attrs,
    className,
    null,
    css,
    "</svg>",
  );
}

/**
 * Creates Virtual DOM SVG element <symbol>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/symbol}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <symbol>
 */
export function symbol(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Symbol << VNodeFlags.UniqueIdOffset),
    "<symbol",
    attrs,
    className,
    null,
    css,
    "</symbol>",
  );
}

/**
 * Creates Virtual DOM SVG element <text>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/text}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <text>
 */
export function text(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Text << VNodeFlags.UniqueIdOffset),
    "<text",
    attrs,
    className,
    null,
    css,
    "</text>",
  );
}

/**
 * Creates Virtual DOM SVG element <textPath>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textPath}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <textPath>
 */
export function textPath(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.TextPath << VNodeFlags.UniqueIdOffset),
    "<textPath",
    attrs,
    className,
    null,
    css,
    "</textPath>",
  );
}

/**
 * Creates Virtual DOM SVG element <title>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <title>
 */
export function title(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Title << VNodeFlags.UniqueIdOffset),
    "<title",
    attrs,
    className,
    null,
    css,
    "</title>",
  );
}

/**
 * Creates Virtual DOM SVG element <tspan>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tspan}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <tspan>
 */
export function tspan(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Tspan << VNodeFlags.UniqueIdOffset),
    "<tspan",
    attrs,
    className,
    null,
    css,
    "</tspan>",
  );
}

/**
 * Creates Virtual DOM SVG element <use>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/use}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <use>
 */
export function use(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.Use << VNodeFlags.UniqueIdOffset),
    "<use",
    attrs,
    className,
    null,
    css,
    "</use>",
  );
}

/**
 * Creates Virtual DOM SVG element <view>.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/view}
 *
 * @param className - Class name
 * @param attrs - Attributes
 * @param css - Styles
 * @returns Virtual DOM SVG element <view>
 */
export function view(className?: string, attrs?: {}, css?: {}): VNode<{} | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.SvgElement | (TagId.View << VNodeFlags.UniqueIdOffset),
    "<view",
    attrs,
    className,
    null,
    css,
    "</view>",
  );
}
