import logo from "./assets/logo.svg";
import "./styles/App.scss";
import DropDown from "./comps/DropDown";
import Footer from "./comps/Footer";
import { Button, Input } from "reactstrap";
// import Mapa from "./comps/Mapa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import Error from "./comps/Error";
import Counter from "./comps/Counter";
import {
  setIt,
  reSet,
  selectEm,
  selectSculptures,
  selectPlanets,
} from "./redux/dataSlice";
import { selectCount } from "./redux/counterSlice";
import ProgressBar from "./comps/ProgressBar";
import ProgressBA from "./comps/ProgressBar";
//
function App() {
  //

  const [drop, dropSet] = useState("sculptures");
  //

  const count = useSelector(selectCount);
  //
  const selectedData = useSelector(selectEm);
  //
  const scul = useSelector(selectSculptures);
  const planets = useSelector(selectPlanets);

  // const dispatch = useDispatch();
  //prettier-ignore
  // useEffect(()=>{setIt(dispatch())}, [drop])
  //
  const [searchScul, searchSculSet] = useState("");
  //
  const [searchPlan, searchPlanSet] = useState("");
  //
  const filtered = scul.filter((i) => {
    if (i.name.toLowerCase().includes(searchScul.toLowerCase())) {
      console.log(i);
      return i;
    }
    console.log(scul);
  });
  const listA = filtered.map((i, key) => {
    // console.log(i.img);
    return i.name;
  });
  //
  const planeted = planets.filter((ii) => {
    if (ii.name.toLowerCase().includes(searchPlan.toLowerCase())) {
      return ii;
    }
    return planets;
  });
  const listB = planeted.map((ii, key) => {
    return ii.name;
  });

  const handleChange = (e) => {
    searchSculSet(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchScul);
  };

  return (
    <div className="App">
      <header className="header">
        <DropDown drop={drop} dropSet={dropSet} />
      </header>

      <main className="main">
        <ProgressBA count={count} />
        <Counter className="count" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
