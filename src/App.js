import "./styles/App.scss";
import Header from "./comps/Header";
import Main from "./comps/Main";
import Footer from "./comps/Footer";
import { useState } from "react";
//
function App() {
  const [drop, dropSet] = useState("sculptures");
  return (
    <div className="app">
      <Header drop={drop} dropSet={dropSet} />
      <Main drop={drop} />
      <Footer />
    </div>
  );
}

export default App;
