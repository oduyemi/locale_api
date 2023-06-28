import React from "react";
import './App.css';
import Navigation from "./Navigation/index";
import { Routes, Route } from 'react-router-dom';
import Api from "./pages/Api";
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import GenerateApiPage from "./pages/GenerateApiPage";
import { Footer } from "./components/Footer";



const App = () => {
  return (
    <div className="App">
       <Navigation />
         <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/api-dashboard" element={<Api />}></Route> 
          <Route exact path="/generate-api" element={<GenerateApiPage />}></Route> 
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/how-it-works" element={<HowItWorks />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
