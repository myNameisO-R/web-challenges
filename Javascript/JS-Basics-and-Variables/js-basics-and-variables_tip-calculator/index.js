console.clear();

/*
Create a program that calculates the total cost of a meal, including tip, 
based on the cost of the meal and the percentage of the tip.

1. Define two variables:
   - A variable that stores the value of the meal cost.
   let mealCost = 0 ;
   - A variable that stores the value of the tip percentage.
   let tipPrecantage = mealCost + 10%;
2. Calculate the tip amount by multiplying the meal cost by the tip percentage, and store the result in a variable called `tipAmount`.
let tipAmount = mealCost * tip Percentage;

3. Calculate the total cost of the meal, including tip, by adding `mealCost` and `tipAmount`, and store the result in a variable called `totalCost`.
let totalCost = mealCost + tipAmount;
4. Log a message to the console that includes the meal cost, tip amount, and total cost.
*/

let mealCost = 100;
let tipPrecantage = 20;
let tipAmount = (mealCost * tipPrecantage) / 100;
let totalCost = mealCost + tipAmount;
console.log(totalCost);
