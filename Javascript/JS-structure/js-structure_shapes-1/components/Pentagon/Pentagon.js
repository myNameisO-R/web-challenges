import { getRandomColor } from "../../utils/randomColor.js";

export function pentagon() {
  const pentagon = document.createElement("div");
  pentagon.classList.add("pentagon");
  pentagon.addEventListener("click", () => {
    pentagon.style.backgroundColor = "#ccc";
  });
  return pentagon;
}
