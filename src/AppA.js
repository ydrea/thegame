import logo from "./assets/logo.svg";
import "./styles/App.scss";
// import Mapa from "./comps/Mapa";
import { useState } from "react";
import { axiosEm } from "./api/axiosEm";
//
import ldata from "./data/db.json";
//
function App() {
  const [query, querySet] = useState("");
  const [res, resSet] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  //
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await axiosEm(query);
      console.log("po", data);
      resSet(data);
      querySet("");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="logo" />

        <div>
          <input
            label="Search"
            type="search"
            value={query}
            onChange={(e) => querySet(e.target.value)}
            onKeyPress={search}
          />
        </div>
      </header>

      <input
        type="text"
        placeholder="search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {ldata.locations
        .filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((val, key) => {
          return <div key={val.id}>{val.name} </div>;
        })}
    </div>
  );
}

export default App;
