import React from "react";

function Dropdown({ drop, dropSet }) {
  const handleChange = (e) => {
    dropSet(e.target.value);
  };
  return (
    <label>
      {" "}
      Choose your game!&nbsp;
      <select className="button" value={drop} onChange={handleChange}>
        <option value="sculptures">Sculptures</option>
        <option value=" planets">Planets</option>
      </select>
    </label>
  );
}

export default Dropdown;
