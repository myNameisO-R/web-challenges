console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const newToastMessage = document.createElement("li");
  toastContainer.appendChild(newToastMessage);
  newToastMessage.textContent = "new toast message";
});

clearButton.addEventListener("click", (event) => {
  // Exercise: Clear the stack of toast messages
  event.preventDefault();
  toastContainer.innerHTML = "";
});
