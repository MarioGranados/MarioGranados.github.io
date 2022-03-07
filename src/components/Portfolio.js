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
                    <img src={WeatherApp} alt=""/>
                    <img src={Konami} alt=""/>
                    <img src={CoffeeProject} alt=""/>
                </div>
            </div>

        </>
    );

}
export default Portfolio;