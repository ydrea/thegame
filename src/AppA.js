import logo from "./assets/logo.svg";
import "./styles/App.scss";
// import Mapa from "./comps/Mapa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import ldata from "./data/db.json";
import Counter from "./api/Counter";
import { setIt, reSet, selectEm } from "./redux/dataSlice";
//
function App() {
  const count = useSelector((state) => state.counter.count);
  const data = selectEm();
  // const loc = selectLocations();
  const dispatch = useDispatch();

  //prettier-ignore
  // useEffect(()=>{setIt(dispatch())}, [])

  //
  const [searchTerm, setSearchTerm] = useState("");
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
