import logo from "../assets/logo.svg";
import "../styles/App.scss";
import DropDown from "./DropDown";
//
// import { Dropdown } from "reactstrap";
//
function Header({ drop, dropSet }) {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" />
      <DropDown drop={drop} dropSet={dropSet} />
    </header>
  );
}

export default Header;
