import WelcomePage from "./WelcomePage";
import Terminal from "./Terminal";

const Hero = () => {
    return (
        <>
            <div className="bg-dark">
                <Terminal/>
                <div className="container">
                    <WelcomePage/>
                </div>
            </div>
        </>
    );

}
export default Hero;