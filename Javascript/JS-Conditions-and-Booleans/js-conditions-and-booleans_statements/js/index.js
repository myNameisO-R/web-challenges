console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

console.log(
  receivedPassword === SUPER_SECRET_PASSWORD ? "Welcome!" : "Access denied!"
);

// Part 2: Even / Odd
const number = 6;

if (number % 2 == 0) {
  console.log("The number is even!");
} else {
  console.log("The number is odd!");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;

if (numberOfHotdogs < 5) {
  console.log("2 euro per hotdog");
} else if (numberOfHotdogs < 100) {
  console.log("1.5 euro per hotdog");
} else if (numberOfHotdogs < 1000000) {
  console.log("1 euro per hotdog");
} else {
  console.log("0.10 euro per hotdog");
}

// Part 4: Daytime
const currentHour = 17;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting =
  "Hello " + (userName === "Archibald" ? "Coach" : userName) + "!";

console.log(greeting);