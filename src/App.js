import Navbar from './components/Navbar'
import React from "react";
import './App.css';
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Hero from './components/Hero';
import {recycode, weatherApp, movieApp, experience} from "./components/Data";
import OtherProjects from "./components/OtherProjects";
import About from "./components/About";
import {Headers} from "./components/Headers";

function App() {
    return (
        <>
            <Navbar/>
            <Banner/>
            <Headers>Experience</Headers>
            <About {...experience}/>
            <Headers>Some Of My Projects</Headers>
            <Hero {...recycode}/>
            <Hero {...weatherApp}/>
            <Hero {...movieApp}/>
            <Headers>Other Cool Projects</Headers>
            <OtherProjects/>
            <Footer/>
        </>
    );
}

export default App;
