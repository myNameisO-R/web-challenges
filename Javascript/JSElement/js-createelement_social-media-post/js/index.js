console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("div");
newPost.className = "post";

const postContent = document.createElement("p");
postContent.textContent = "this is a new social media post";
newPost.appendChild(postContent);

const newLikeButton = document.createElement("button");
newLikeButton.setAttribute("data-js", "like-button");
newLikeButton.textContent = "like";
newLikeButton.classNamem = "post__button";
newLikeButton.addEventListener("click, handleLikeButtonClick");
