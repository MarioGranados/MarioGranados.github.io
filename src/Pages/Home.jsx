import Banner from "../Components/Banner";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

const Home = () => {
    return(
        <>
        <Banner/>
        <Skills/>
        <About/>
        <Portfolio/>
        <Contact/>
        </>
    );
}
export default Home;