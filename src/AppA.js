import logo from "./assets/logo.svg";
import "./styles/App.scss";
// import Mapa from "./comps/Mapa";
import { useState } from "react";
import { axiosEm } from "./api/axiosEm";
//
import ldata from "./data/db.json";
//
function App() {
  // const [query, querySet] = useState("");
  // const [res, resSet] = useState({});
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
        <form>
          {" "}
          <input
            type="text"
            placeholder="search..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">play</button>
        </form>
      </header>
      <div>Response {list}</div>
    </div>
  );
}

export default App;
