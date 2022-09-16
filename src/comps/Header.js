// import logo from "../assets/logo-zg.png";
import "../styles/App.scss";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";

//
function Header({ drop, dropSet }) {
  return (
    <header className="header">
      <Link to="/Mapa" className="button">
        map
      </Link>

      <DropDown drop={drop} dropSet={dropSet} />
    </header>
  );
}

export default Header;
