console.clear();
const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log("Data:", data);

  event.target.reset();

  if (event.target.firstName) {
    event.target.firstName.focus();
  }
});
