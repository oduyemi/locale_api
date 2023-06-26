import React from "react";
import './App.css';
import Navigation from "./Navigation/index";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import "animate.css";
import Register from "./pages/Register";
import Login from "./pages/Login";


const App = () => {
  return (
    <div className="App">
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/how-it-works" element={<HowItWorks />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
