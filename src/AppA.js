import logo from "./assets/logo.svg";
import "./styles/App.scss";
import Dropdown from "./comps/Dropdown";
// import Mapa from "./comps/Mapa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import ldata from "./data/db.json";
import Counter from "./comps/Counter";
import {
  setIt,
  reSet,
  selectEm,
  selectLocations,
  selectPlanets,
} from "./redux/dataSlice";
import { selectCount } from "./redux/counterSlice";
//
function App() {
  const count = useSelector(selectCount);
  //
  const selectedData = useSelector(selectEm);
  //
  const loc = useSelector(selectLocations);
  const planets = useSelector(selectPlanets);

  // const dispatch = useDispatch();
  //prettier-ignore
  // useEffect(()=>{setIt(dispatch())}, [])
  //
  const [searchLoc, ] = useState("");
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
      <header className="App-header">
        <img className="App-logo" src={logo} alt="logo" />
        <Dropdown />
      </header>
      <div>Response {listA[`${count}`]}</div>
      <div>Response {listB[`${count - 7}`]}</div>
      <Counter />
    </div>
  );
}

export default App;
