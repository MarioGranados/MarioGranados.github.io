import CoffeeProject from '../../img/CoffeeProject.png'
import Konami from '../../img/Konami.png';
import WeatherMap from '../../img/WeatherApp.png'
function Portfolio() {
    return (
        <>
            <div className="jumbotron light_bg mb-0">
                <h3 className="text-center display-4">Portfolio</h3>
                <div className="container" data-aos="zoom-in" data-aos-duration="2000" data-aos-once="false" data-aos-mirror="true">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active" >
                                <img src={CoffeeProject} className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block text-white blue_bg">
                                    <h5>Coffee Project</h5>
                                    <p>This Web Application filters through a list of coffees which you can edit, add, or delete any coffee roast within the list using
                                        the
                                        DOM's Local Storage.</p>
                                    <a href='https://mariogranados.github.io/Coffee-ProjectV2/' target="_blank" rel="noopener noreferrer" className='text-decoration-none'><button className='btn btn-secondary'>Open Full Project</button></a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={Konami} className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block text-white blue_bg">
                                    <h5>Konami Code</h5>
                                    <p>You enter the Konami code in a specific sequence to unlock a fake website.</p>
                                    <a href='https://mariogranados.github.io/codeup-web-exercises/' target="_blank" rel="noopener noreferrer" className='text-decoration-none'><button className='btn btn-secondary'>Open Full Project</button></a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={WeatherMap} className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block text-white blue_bg">
                                    <h5>Web Application</h5>
                                    <p>A web application that requests real-time weather data of any desired location by using Mapbox
                                        API,
                                        and WeatherMap API.</p>
                                    <a href='https://mariogranados.github.io/weather-map-app/' target="_blank" rel="noopener noreferrer" className='text-decoration-none'><button className='btn btn-secondary'>Open Full Project</button></a>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev bg-dark" type="button" data-target="#carouselExampleCaptions"
                                data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </button>
                        <button className="carousel-control-next bg-dark" type="button" data-target="#carouselExampleCaptions"
                                data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>


    );
}

export default Portfolio;