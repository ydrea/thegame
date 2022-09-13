import "./styles/App.scss";
import Header from "./comps/Header";
import Main from "./comps/Main";
import Footer from "./comps/Footer";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Mapa from "./routes/Mapa";
//
//
function App() {
  const [drop, dropSet] = useState("sculptures");
  return (
    <div className="app">
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/Mapa" element={<Mapa />} />
      </Routes>

      <Header drop={drop} dropSet={dropSet} />
      <Main drop={drop} />
      <Footer />
    </div>
  );
}

export default App;
