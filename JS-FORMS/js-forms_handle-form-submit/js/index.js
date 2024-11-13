console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (Event) => {
  Event.preventDefault();

  const formData = new FormData(Event.target);
  const data = Object.fromEntries(formData);
  console.log("data", data);
  form.requestFullscreen();
  document.getElementById("firstName").focus();
});
