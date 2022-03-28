import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Hero from "./components/Hero";
import './App.css';
import Footer from "./components/Footer";
import GridScroll from "./components/Portfolio/GridScroll";
import Terminal from "./components/Terminal";
import {experience, about} from "./components/Data";
import Loading from "./components/Loading";
import WelcomePage from "./components/WelcomePage";

function App() {
    Aos.init();
    return (
        <>
            <div className='main_bg'>
                <Terminal/>
                <WelcomePage/>
                <Hero {...experience} />
                <Hero {...about} />
                <GridScroll/>
                <Footer/>
            </div>
        </>
    );
}

export default App;
