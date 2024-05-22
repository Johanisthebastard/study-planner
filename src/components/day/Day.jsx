import Item from "./Item";
import React from "react";

// OBS, det är tillåtet att lägga till flera props
// När du testar, rendera komponenten med olika värden på props
const Day = ({ day, dayName }) => {
  return (
    <div className="day">
      <h2>{dayName}</h2>

      {day.map(item => (
        <Item key={item.id} item={item} />
      ))}

      <div className="controls">
        <button>Ny uppgift</button>
      </div>
    </div>
  );
}

export default Day;
