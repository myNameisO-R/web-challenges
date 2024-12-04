console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write or modify code below this line --v--
const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};
for (const key in languages) {
  const option = document.createElement("option");
  option.value = key;
  option.textContent = languages[key];
  select.appendChild(option);
}

// --^-- write or modify code above this line --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write or modify code below this line --v--

for (const key in nav) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = nav[key].href;
  a.textContent = nav[key].text;
  ul.appendChild(li);
  li.appendChild(a);
}

// --^-- write or modify code above this line --^--
