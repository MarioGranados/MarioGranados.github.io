import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Skills from "./Pages/Skills";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="bg-light">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio"element=  {<Portfolio />}/>
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
