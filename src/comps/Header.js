import logo from "../assets/logo.svg";
import "../styles/App.scss";
import DropDown from "./DropDown";
//
import { useState } from "react";
import { Dropdown } from "reactstrap";
//
function Header() {
  const [drop, dropSet] = useState();

  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" />
      <DropDown drop={drop} dropSet={dropSet} />
    </header>
  );
}

export default Header;
