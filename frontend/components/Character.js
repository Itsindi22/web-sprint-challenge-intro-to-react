import React, { useState } from "react";

function Character({ name, planet }) {
  // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="character-card" onClick={() => setIsOpen(!isOpen)}>
      <h3 className="character-name">{name}</h3>
      {isOpen && (
        <p>
          Planets: <span className="character-planet">{planet}</span>
        </p>
      )}
    </div>
  );
}

export default Character;