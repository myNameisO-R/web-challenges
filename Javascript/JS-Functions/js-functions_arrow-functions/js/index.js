console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible
*/

function getCurrentHour() {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
}

const getCurrentHour = () => {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
};

console.log("Current hour: ", getCurrentHour());

function getVectorLength(x, y, z) {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
}

function cleanInput(string) {
  return string.toLowerCase().trim();
}

const getVectorLength = (x, y, z) => (x ** 2 + y ** 2 + z ** 2) ** 0.5;

console.log("Vector length:" + getVectorLength(1, 2, 3));

const cleanInput = (string) => string.toLowerCase().trim();

/*
Rewrite the following arrow functions as classic functions.
*/

function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}

console.log("isOddAndsmall:", isOddAndSmall(10));

const add3 = (a, b, c) => a + b + c;

const repeat10 = (string) => string.repeat(10);

function add3(a, b, c) {
  const sum = a + b + c;
  return sum;
}
const sum = add3(2, 3, 4);
console.log(sum);
