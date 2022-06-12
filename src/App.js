import Navbar from './components/Navbar'
import React from "react";
import './App.css';
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Hero from './components/Hero';

function App() {
    return (
        <>
            <Navbar/>
            <Banner/>
            <Hero/>
            <Footer/>
        </>
    );
}

export default App;
