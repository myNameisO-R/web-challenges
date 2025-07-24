import { getRandomColor } from "../../utils/randomColor.js";

export function square() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    square.style.backgroundColor = "#ccc";
  });
  return square;
}
