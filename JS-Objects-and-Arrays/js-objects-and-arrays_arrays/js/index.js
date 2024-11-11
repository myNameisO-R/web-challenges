console.clear();

// EXERCISE 1
// Modify the array `exampleArray` so that it contains a number and a string.

//const exampleArray = [true];
const exampleArray = ["true", 1];

// EXERCISE 2
// Nest an array inside `nestedArray`. After completing this, `nestedArray` should contain an array as one of its elements.

//const nestedArray = ["example", 10, true];

const nestedArray = ["example", 10, true, [false]];

// EXERCISE 3
// Change the value of `firstNumber` to equal the first value in the `numbers` array using bracket notation.

const numbers = [20, 10, 50];

const firstNumber = 10;

// EXERCISE 4
// Update the first fruit in `fruits` to be "mango" instead of "apple".

//const fruits = ["apple", "banana", "grapefruit"];

fruits[0] = "mango";

// EXERCISE 5
// Set the value of `nestedNumber` to the fourth number in the `nestedNumbers` array using bracket notation.

const nestedNumbers = [10, [20, 30, [40, 50]]];

const nestedNumber = nestedNumbers[1][2][0];
console.log(nestedNumber);

// EXERCISE 6
// Use the `.push()` array method to add "rat" to the end of `petsWithPush`.

const petsWithPush = ["dog", "cat", "rabbit"];
petsWithPush.push("rat");
console.log("petsWithPush: ", petsWithPush);

// EXERCISE 7
// Use the `.pop()` method to remove the last item from `fruitsWithPop`.

const fruitsWithPop = ["apple", "banana", "mango"];
const lastItem = fruitsWith.pop();

console.log("lastItem: ", lastItem);
console.log("fruitsWithPop(): ", fruitsWithPop);

// EXERCISE 8
// Use the `.unshift()` array method to add "hamster" to the beginning of `unshiftedPets`.

const unshiftedPets = ["dog", "cat", "rabbit"];
unshiftedPets.unshift("hamster");
console.log("unshiftedPets: ", unshiftedPets);

// EXERCISE 9
// Use the `.shift()` method to remove the first item from `shiftedFruits`.

const shiftedFruits = ["apple", "banana", "mango"];
const removedItem = shiftedFruits.shift;
console.log("Removed item: ", removedItem);
console.log("shiftedPFruite: ", shiftedFruits);

export {
  exampleArray,
  nestedArray,
  firstNumber,
  fruits,
  nestedNumber,
  petsWithPush,
  fruitsWithPop,
  unshiftedPets,
  shiftedFruits,
};
