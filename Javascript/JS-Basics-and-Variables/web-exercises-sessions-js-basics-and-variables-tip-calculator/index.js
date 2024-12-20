console.clear();

/*
Create a program that calculates the total cost of a meal, including tip, based on the cost of the meal and the percentage of the tip.

1. Initialize a assign values to 2 variables:
   1. A variable which will hold the value of the meal cost.
   2. A variable which will hold the value of the tip percentage.
2. Calculate the tip amount by multiplying the meal cost by the tip percentage, and store the result in a variable called tipAmount.
3. Calculate the total cost of the meal, including tip, by adding the mealCost variable and the tipAmount variable, and store the result in a variable called totalCost.
4. Log out a message using the console.log() method.
*/

/*1/ a*/ const mealCost = 150;
/*b*/ const tipPercentage = 20;

/*2*/ const tipAmount = (mealCost * tipPercentage) / 100;

/*3*/ const totalCost = mealCost + tipAmount;

console.log("Total cost of the meal including the tip amount:", totalCost);
