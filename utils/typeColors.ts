export type ColorTypes = {
  title: string;
  color: string;
};

export const typeColors: Ref<ColorTypes[]> = ref<ColorTypes[]>([
  { title: "grass", color: "#08FEC3" },
  { title: "poison", color: "#AF08FE" },
  { title: "water", color: "#00A3FF" },
  { title: "electric", color: "#FFB800" },
  { title: "ground", color: "#85826E" },
  { title: "fairy", color: "#FBA1EC" },
  { title: "normal", color: "#C4C4C4" },
  { title: "flying", color: "#5317FC" },
  { title: "default", color: "#0E0E0E" },
  { title: "fire", color: "#FE0808" },
]);