console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch("https://swapi.py4e.com/api/people");
  const data = await response.json();
  console.log(data);
  const leia = data.results.find((person) => person.name === "Leia Organa");
  console.log("Leias Organas Mass: ", leia.mass);
  return data;
}

fetchData();
