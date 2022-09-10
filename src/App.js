import logo from "./assets/logo.svg";
import "./styles/App.scss";
import DropDown from "./comps/DropDown";
import Footer from "./comps/Footer";
import { Button, Input } from "reactstrap";
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
      return i;
    }
    return scul;
  });
  const listA = filtered.map((i, key) => {
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
        <img className="logo" src={logo} alt="logo" />
        <DropDown drop={drop} dropSet={dropSet} />
      </header>

      <main className="main">
        {drop === "sculptures" ? (
          <div className="A">
            Sculptures {listA[`${count}`]}
            {/* <img src={listA.img} /> */}
            <form onSubmit={handleSubmit}>
              <Input type="text" value={searchScul} onChange={handleChange} />
              <Button className="button" type="submit">
                x
              </Button>
            </form>
          </div>
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
