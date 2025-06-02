console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (event) => {
  // Exercise: Append a new entry to the toast messages container
  event.preventDefault();
  const newMessage = document.createElement("div");
  newMessage.textContent = "new toast message;";
  toastContainer.appendChild(newMessage);
  newMessage.classList.add("toast");
});

clearButton.addEventListener("click", (event) => {
  // Exercise: Clear the stack of toast messages

  event.preventDefault();
  while (toastContainer.firstChild) {
    toastContainer.removeChild(toastContainer.firstChild);
  }
});
