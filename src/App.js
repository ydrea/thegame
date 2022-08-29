import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { axiosEm } from "./api/axiosEm";

function App() {
  const [query, querySet] = useState("");
  const [weather, weatherSet] = useState({});
  //
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await axiosEm(query);
      console.log(data);
      weatherSet(data);
      querySet("");
    }
  };

  return (
    <div className="App">
      <header className="App-header">{logo}</header>

      <div>
        <input
          label="Search"
          type="search"
          value={query}
          onChange={(e) => querySet(e.target.value)}
          onKeyPress={search}
        />
        {weather.main && <div>{weather.name}</div>}
      </div>
    </div>
  );
}

export default App;
