console.clear();

const firstInput = document.querySelector('[data-js="firstInput"]');
const button = document.querySelector('[data-js="button-uppercase"]');

button.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
});
