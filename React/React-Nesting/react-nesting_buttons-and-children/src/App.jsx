import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button description={<p>button1</p>} />
      <Button description={<p>button2</p>} />
      <Button description={<p>button3</p>} />
      <Button description={<p>button4</p>} />
    </main>
  );
}

function Button({ description }) {
  return (
    <button className="button" type="button">
      {description}
    </button>
  );
}
