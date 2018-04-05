import { connect } from "ivx";
import * as h from "ivx-html";

const Color = connect<{ id: number, selected: boolean, hex: string, name: string }, number, any>(
  (prev, id, context) => {
    const colors = context.colors;
    const selected = context.selectedColor.id === id;
    const c = colors[id];
    if (prev !== null && prev.hex === c && prev.selected === selected) {
      return prev;
    }
    return {
      id,
      selected,
      hex: c.hex,
      name: c.name,
    };
  },
  (props) => h.li(props.selected === true ? "color selected" : "color")
    .s({ "background-color": props.hex })
    .c(props.name),
);

export const MarkoColorApp = connect<{ colors: any[], selectedColor: any }, any>(
  (prev, props, context) => {
    const colors = context.colors;
    const selectedColor = context.selectedColor;
    if (prev !== null && prev.colors === colors && prev.selectedColor === selectedColor) {
      return prev;
    }
    return { colors, selectedColor };
  },
  ({ colors, selectedColor }) => h.div("colors").c([
    h.h1().c("Choose your favorite color:"),
    h.div("colors").c(
      colors.length > 0 ?
        h.ul().c(colors.map((_, i) => Color(i))) :
        h.div().c("No colors!"),
    ),
    h.div().c(["You chose:", h.div("chosen-color").c(selectedColor.name)]),
  ]),
);
