import "./App.css";
import BurgerMenu from "./BurgerMenu";
import Intro from "./Intro";
import About from "./About";
import Work from "./Work";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <BurgerMenu />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
