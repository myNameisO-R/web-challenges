console.clear();

const inputColor = document.querySelector('[data-js="input-color"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');
const box = document.querySelector('[data-js="box"]');

inputColor.addEventListener("input", () => {
  const hue = inputColor.value;
  box.style.backgroundColor = `hsl(${hue}, 50%, 50%)`;
});

inputRadius.addEventListener("input", () => {
  const radius = inputRadius.value;
  box.style.borderRadius = radius === inputRadius.max ? "50%" : `${radius}%`;
});

inputRotation.addEventListener("input", () => {
  const rotation = inputRotation.value;
  box.style.transform = `rotate(${rotation}deg)`;
});
