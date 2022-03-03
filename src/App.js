import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Hero from "./components/Hero";
import './App.css';
import Footer from "./components/Footer";

function App() {
    Aos.init();
    return (
        <>
            <Hero/>
            <Footer/>
        </>
    );
}

export default App;
