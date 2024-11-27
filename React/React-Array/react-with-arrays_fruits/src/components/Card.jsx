import React from "react";
import "./Card.css";

function Card({ name, color }) {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      {name}
    </div>
  );
}

export default Card;
