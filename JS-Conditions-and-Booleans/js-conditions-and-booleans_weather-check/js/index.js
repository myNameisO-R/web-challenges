// Change this value to test different "weather" conditions.
const weather = "rainy";

switch (weather) {
  case "sunny":
    console.log("It's sunny!");
    break;
  case "rainy":
    console.log("It's raining, don't forget your umbrella!");
    break;
  case "snowy":
    console.log("It's snowing, stay warm");
    break;
  default:
    console.log("Sorry, I don't think that's a season!");
}

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = 22;
