import {obj1, obj2, obj3} from "./PortfolioData";
import PortfolioCards from "./PortfolioCards";
import './GridScroll.css'

/*this code was modified from the original source https://codepen.io/adityajanuardi/pen/YzydaVj*/
const GridScroll = () => {

    return (
        <>
            <h3 className='text-center display-4'>Portfolio</h3>
            <div className="scroll-container">
                <div className="gridscroll">
                    <div className="card-deck">
                        <PortfolioCards {...obj1}/>
                        <PortfolioCards {...obj2}/>
                        <PortfolioCards {...obj3}/>
                    </div>
                </div>
            </div>

        </>
    );

}
export default GridScroll;