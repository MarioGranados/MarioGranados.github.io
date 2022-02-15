import React from 'react';
import Content from '../Content.js';
import Portfolio from "./Portfolio";
import {firstObj, secObj, thirdObj, AboutMe} from './Data'
import '../styles.css'
import Hero from "../Hero";
import Footer from "../Footer";

function HomePage() {
    return (
        <>
            <Hero/>
            <Content {...firstObj} />
            <Portfolio/>
            <Content {...secObj} />
            <Content {...thirdObj}/>
            <Content {...AboutMe} />
            <Footer/>
        </>
    )
}
export default HomePage;