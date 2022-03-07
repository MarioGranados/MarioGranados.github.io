import './Portfolio.css';
import WeatherApp from '../img/WeatherApp.png';
import Konami from '../img/Konami.png';
import CoffeeProject from '../img/CoffeeProject.png';
import {hover} from "@testing-library/user-event/dist/hover";
import {useState} from "react";

/*this code was modified from the original source https://codepen.io/adityajanuardi/pen/YzydaVj*/
const Portfolio = () => {

    const [active, setActive] = useState(false);

    let hoverStyle = {
        height: '65vh'
    }


    let act = () => {
        setActive(true);
    }
    let dest = () => {
        setActive(false);
    }
    
    return (
        <>
            <div className="scroll-container">
                <div className="gridscroll">
                    <img onMouseOut={dest} onMouseEnter={act} src={WeatherApp} alt="Weather Map App Preview"
                         style={active ? hoverStyle : null}
                    />
                    <img src={Konami} alt="Konami App Preview"
                         onMouseOut={dest} onMouseEnter={act} style={active ? hoverStyle : null}
                    />
                    <img src={CoffeeProject} alt="Coffee Project App Preview"
                         onMouseOut={dest} onMouseEnter={act} style={active ? hoverStyle : null}
                    />
                </div>
            </div>

        </>
    );

}
export default Portfolio;