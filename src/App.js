import Navbar from './components/Navbar'
import React from "react";
import './App.css';
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Hero from './components/Hero';
import {recycode, weatherApp, movieApp} from "./components/Data";
import OtherProjects from "./components/OtherProjects";
import About from "./components/About";

function App() {
    return (
        <>
            <Navbar/>
            <Banner/>
            <About/>
            <Hero {...recycode}/>
            <Hero {...weatherApp}/>
            <Hero {...movieApp}/>
            <OtherProjects/>
            <Footer/>
        </>
    );
}

export default App;
