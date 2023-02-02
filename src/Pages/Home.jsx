import Banner from "../Components/Banner";
import MoreProjects from "../Components/MoreProjects";
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
        <MoreProjects/>
        <Contact/>
        </>
    );
}
export default Home;