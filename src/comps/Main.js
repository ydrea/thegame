import React from "react";
import AGame from "./AGame";
import BGame from "./BGame";
import { Badge, Button, Input } from "reactstrap";
//
function Main({ drop }) {
  return (
    <main className="main">
      {drop === "sculptures" ? <AGame /> : <BGame />}
    </main>
  );
}

export default Main;
