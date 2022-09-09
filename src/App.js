import logo from "./assets/logo.svg";
import "./styles/App.scss";
import DropDown from "./comps/DropDown";
import Footer from "./comps/Footer";
import { ToggleLD } from "./comps/ToggleLD";
// import Mapa from "./comps/Mapa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import Counter from "./comps/Counter";
import {
  setIt,
  reSet,
  selectEm,
  selectSculptures,
  selectPlanets,
} from "./redux/dataSlice";
import { selectCount } from "./redux/counterSlice";
//
function App() {
  //

  const [drop, dropSet] = useState("sculptures");
  //

  const count = useSelector(selectCount);
  //
  const selectedData = useSelector(selectEm);
  //
  const loc = useSelector(selectSculptures);
  const planets = useSelector(selectPlanets);

  // const dispatch = useDispatch();
  //prettier-ignore
  // useEffect(()=>{setIt(dispatch())}, [drop])
  //
  const [searchLoc] = useState("");
  //
  const [searchPlan] = useState("");
  //
  const filtered = loc.filter((i) => {
    if (searchLoc == "") {
      console.log(i);
      return i;
    } else if (i.name.toLowerCase().includes(searchLoc.toLowerCase())) {
      return i;
    }
  });
  const listA = filtered.map((i, key) => {
    return i.name;
  });
  //
  const planeted = planets.filter((ii) => {
    if (searchPlan == "") {
      console.log(ii);
      return ii;
    } else if (ii.name.toLowerCase().includes(searchPlan.toLowerCase())) {
      return ii;
    }
  });
  const listB = planeted.map((ii, key) => {
    return ii.name;
  });

  return (
    <div className="App">
      <header className="header">
        <img className="logo" src={logo} alt="logo" />
        <DropDown drop={drop} dropSet={dropSet} />
        {/* <ToggleLD /> */}
      </header>
      <main className="main">
        {drop === "sculptures" ? (
          <div className="A">Sculptures {listA[`${count}`]}</div>
        ) : (
          <div className="B">Planets {listB[`${count}`]}</div>
        )}
        <Counter className="count" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
