console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 5;
if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 5;

if (numberOfHotdogs < 5) {
  console.log("hot dog price is:", numberOfHotdogs * 2);
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log("hot dog price is:", numberOfHotdogs * 1.5);
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log("hot dog price is:", numberOfHotdogs * 1);
} else if (numberOfHotdogs >= 1000000) {
  console.log("hot dog price is:", numberOfHotdogs * 0.1);
} else {
  console.log("invalid number of hotdogs.");
}

// Part 4: Daytime
const currentHour = 12;

const statment = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";
console.log(statment);

// Part 5: Greeting
const userName = "Archibald";

const greeting =
  "Hello " + (userName === "Archibald" ? "Coach" : userName) + "!";
console.log(greeting);
