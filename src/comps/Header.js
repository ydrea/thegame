import logo from "../assets/logo.svg";
import "../styles/App.scss";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";

//
function Header({ drop, dropSet }) {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" />
      <Link to="/Mapa" className="button">
        map
      </Link>

      <DropDown drop={drop} dropSet={dropSet} />
    </header>
  );
}

export default Header;
