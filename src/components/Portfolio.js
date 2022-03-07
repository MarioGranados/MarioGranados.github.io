import './Portfolio.css';
import WeatherApp from '../img/WeatherApp.png';
import Konami from '../img/Konami.png';
import CoffeeProject from '../img/CoffeeProject.png';

/*this code was modified from the original source https://codepen.io/adityajanuardi/pen/YzydaVj*/
const Portfolio = () => {
    return (
        <>
            <div className="scroll-container">
                <div className="gridscroll">
                    <img src={WeatherApp} alt="Weather Map App Preview"/>
                    <img src={Konami} alt="Konami App Preview"/>
                    <img src={CoffeeProject} alt="Coffee Project App Preview"/>
                </div>
            </div>

        </>
    );

}
export default Portfolio;