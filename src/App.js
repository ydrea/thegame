import result from "./result.svg";
import "./App.css";
// import Mapa from "./comps/Mapa";
import { useState } from "react";
import { axiosEm } from "./api/axiosEm";
import { loadEm } from "./api/loadEm";

function App() {
  const [query, querySet] = useState("");
  const [res, resSet] = useState({});
  //
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await axiosEm(query);
      console.log(data);
      resSet(data);
      querySet("");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src ={result} width='30%' />
      </header>

      <div>
        <input
          label="Search"
          type="search"
          value={query}
          onChange={(e) => querySet(e.target.value)}
          onKeyPress={search}
        />
        {res && <div>{res.name}</div>}
{loadEm()}      
        {/* <Mapa  /> */}
      </div>
    </div>
  );
}

export default App;
