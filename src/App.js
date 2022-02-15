import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import Aos from "aos";
import 'aos/dist/aos.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Portfolio from "./components/pages/Portfolio";
import Content from "./components/Content";
import {AboutMe} from "./components/pages/Data";

function App() {
    Aos.init();
    return (
        <Router>
            <Navbar />
{                <Switch>
                    <Route exact path="/mario.granados.github.io">
                        <HomePage/>
                    </Route>
                    <Route exact path="/Portfolio">
                        <Portfolio/>
                    </Route>
                    <Route exact path='/Footer'>
                        <Footer/>
                    </Route>
                    <Route exact path='/AboutMe'>
                        <Content {...AboutMe}/>
                    </Route>
                </Switch>}
        </Router>
    );
}

export default App;
