console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  const totalStars = 5;
  for (let i = 0; i < totalStars; i++) {
    const star = document.createElement("span");
    star.textContent = "★";
    star.classList.add("star");
    starContainer.appendChild(star);
  }
  // --^-- write or modify code above this line --^--
}

renderStars();
