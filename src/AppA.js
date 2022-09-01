import logo from "./assets/logo.svg";
import "./styles/App.scss";
// import Mapa from "./comps/Mapa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import ldata from "./data/db.json";
import Counter from "./comps/Counter";
import { setIt, reSet, selectEm, selectLocations } from "./redux/dataSlice";
import { selectCount } from "./redux/counterSlice";
//
function App() {
  const count = useSelector(selectCount);
  //
  const selectedData = useSelector(selectEm);
  //
  const loc = useSelector(selectLocations);
  // const dispatch = useDispatch();

  //prettier-ignore
  // useEffect(()=>{setIt(dispatch())}, [])

  const [searchTerm, setSearchTerm] = useState("");
  //
  const filtered = ldata.locations.filter((val) => {
    if (searchTerm == "") {
      return val;
    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
  });
  const list = filtered.map((val, key) => {
    return val.name;
  });

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="logo" />
      </header>
      <div>Response {list[`${count}`]}</div>
      <Counter />
    </div>
  );
}

export default App;
