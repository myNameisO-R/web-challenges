import "./styles.css";
import React from "react";

function Greeting({ name }) {
  const coaches = ["Klaus", "Andrea", "Gimena", "Peter"];
  const isCoach = coaches.includes(name);
  return <h1>{isCoach ? "Hello, Coach!" : `Hello, ${name}!`}</h1>;
}
export default function App() {
  return <Greeting name="Peter" />;
}
