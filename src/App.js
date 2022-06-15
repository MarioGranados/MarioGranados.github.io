import Navbar from './components/Navbar'
import React, {useState} from "react";
import './App.css';
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Hero from './components/Hero';
import {recycode, weatherApp, movieApp, experience} from "./components/Data";
import OtherProjects from "./components/OtherProjects";
import About from "./components/About";
import {Headers} from "./components/Headers";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";
import {MdMail} from "react-icons/md";
import scrollTo from "./components/Utils";

function App() {

    return (
        <>
            <div className='sidenav d-flex '>
                <a href="https://github.com/MarioGranados" className='sidenav_links' >
                    <FaGithub className='links'/>
                </a>
                <a href="https://www.linkedin.com/in/marioagranados/" className='sidenav_links'>
                    <FaLinkedin className='links'/>
                </a>
                <a href="/Contact" className='sidenav_links'>
                    <MdMail className='links'/>
                </a>
                <a href="https://leetcode.com/mariogranados/" className='sidenav_links'>
                    <SiLeetcode className='links'/>
                </a>
            </div>
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
