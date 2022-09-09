import React from "react";
import { Dropdown } from "reactstrap";

function DropDown({ drop, dropSet }) {
  const handleChange = (e) => {
    dropSet(e.target.value);
  };
  return (
    <span>
      <label className="label"> Choose your game!</label>
      <select className="button" value={drop} onChange={handleChange}>
        <option value="sculptures">Sculptures</option>
        <option value=" planets">Planets</option>
      </select>
    </span>
  );
}

export default DropDown;
