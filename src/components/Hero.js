import MainSection from "./pages/MainSection/MainSection";

function Hero() {
    return (
        <>
            <div className="container-fluid vh-100 justify-content-center align-content-center d-flex bg_image">
                <div className="jumbotron-fluid justify-content-center align-content-center align-items-center d-flex">
                    <MainSection/>
                </div>
            </div>
        </>
    );
}
export default Hero;
