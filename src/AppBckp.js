import React, { useState } from "react";
import data from "./data/db.json";

//Planets
const planeted = planets.filter((ii) => {
  if (ii.name.toLowerCase().includes(searchPlan.toLowerCase())) {
    return ii;
  }
  return planets;
});
const listB = planeted.map((ii, key) => {
  return ii.name;
});

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(data.locations);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <AddOneButton />
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

      <Count />
      {/* <AddOneButton />
      <Monitor /> */}
    </div>
  );
}

export default App;
