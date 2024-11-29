console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  const currentTime = new Date().getHours();
  let greeting;

  switch (true) {
    case currentTime >= 6 && currentTime < 12:
      console.log("Good Morning");
      break;
    case currentTime >= 12 && currentTime < 18:
      console.log("Good Afternoon");
      break;
    case currentTime >= 18 && currentTime < 23:
      console.log("Good Evening");
      break;
    default:
      console.log("Good Night");
  }
  console.log(greeting);
}

getGreeting();



function getDayColor() {
  const day = new Date().getDay();
if (day===1) {
  return "darkday";
} else if (day >= 2 && day <=5) {
  return "lightblue" {
  } else {
    return "hotpink";
}
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
