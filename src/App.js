import Navbar from './components/Navbar'
import React from "react";
import './App.css';
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Hero from './components/Hero';
import {about, experience} from "./components/Data";
import OtherProjects from "./components/OtherProjects";

function App() {
    return (
        <>
            <Navbar/>
            <Banner/>
            <Hero{...about}/>
            <Hero{...experience}/>
            <OtherProjects/>
            <Footer/>
        </>
    );
}

export default App;
