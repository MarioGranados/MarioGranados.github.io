import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Hero from "./components/Hero";
import './App.css';
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Terminal from "./components/Terminal";
import {experience, about} from "./components/Data";
import Loading from "./components/Loading";

function App() {
    Aos.init();
    return (
        <>
            <div className='main_bg'>
                <Terminal/>
                <Hero {...experience} />
                <Hero {...about} />
                <Portfolio/>
                <Footer/>
            </div>
        </>
    );
}

export default App;
