import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import AddData from "./components/AddData";
import ViewAll from "./components/ViewAll";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<AddData />} />
          <Route path="/view" element={<ViewAll />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
