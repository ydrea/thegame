import React from "react";
import AGame from "./AGame";
import BGame from "./BGame";
// import { Badge, Button, Input } from "reactstrap";
//
function Main({ drop }) {
  return (
    //prettier-ignore
    <main className="main">
      {drop === "planets" ? <BGame /> : <AGame />}
    </main>
  );
}

export default Main;
