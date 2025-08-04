console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch("https://swapi.py4e.com/api/people");
  const data = await response.json();
  return data;
}
async function getAndLogData() {
  const data = await fetchData();
  console.log(data);
}
//getAndLogData();

async function eyeColorR2D2() {
  const data = await fetchData();
  // Find R2-D2 in the results
  const r2d2 = data.results.find((character) => character.name === "R2-D2");
  if (r2d2) {
    console.log(r2d2.eye_color);
  } else {
    console.log("R2-D2 not found");
  }
}
eyeColorR2D2();
