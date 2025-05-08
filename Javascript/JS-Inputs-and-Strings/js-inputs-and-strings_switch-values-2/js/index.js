console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');

const secondInput = document.querySelector('[data-js="second-input"]');

const switchButton = document.querySelector('[data-js="button-switch"]');

const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');

const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');

switchButton.addEventListener("click", () => {
  const firstValue = firstInput.value;
  firstInput.value = secondInput.value;
  secondInput.value = firstValue;
});

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
});
