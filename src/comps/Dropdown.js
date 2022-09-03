import React, { useEffect, useState } from "react";

function Dropdown({ drop, dropSet }) {
  //   useEffect(() => {}, [drop]);

  const handleChange = (e) => {
    dropSet(e.target.value);
  };
  return (
    <label>
      {" "}
      Choose your game!
      <select value={drop} onChange={handleChange}>
        <option value="pilot">Sculptures</option>
        <option value=" planets">Planets</option>
      </select>
    </label>
  );
}

export default Dropdown;
