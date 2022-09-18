// import logo from "../assets/logo-zg.png";
import "../styles/App.scss";
import DropDown from "./DropDown";
//
function Header({ drop, dropSet }) {
  return (
    <header className="header">
      <DropDown drop={drop} dropSet={dropSet} />
    </header>
  );
}

export default Header;
