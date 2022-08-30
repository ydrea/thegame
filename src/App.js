import React, { useState } from "react";
// import "./App.css";
import data from "./data/db.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(data.locations);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="seach..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {data.locations
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
          return <div>{val.name} </div>;
        })}
    </div>
  );
}

export default App;
