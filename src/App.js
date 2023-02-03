import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Skills from "./Pages/Skills";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

import AOS from 'aos'
import { useEffect } from "react";
import 'aos/dist/aos.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoreProjects from "./Components/MoreProjects";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refresh();
  }, []);
  return (

    <div className="bg-light">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio"element=  {<MoreProjects />}/>
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
