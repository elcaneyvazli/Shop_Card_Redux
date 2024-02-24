/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Card from "./pages/card";
import Navbar from "./layout/navbar";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </>
  );
}

export default App;
