import "./Terminal.css";

const WelcomePage = () => {
    return(
        <>
            <div className="container green_border">
                <h2 className='display-4 text-center'>Hello I'm Mario A Software Developer</h2>
                <p className="lead text-center">Welcome to my online Portfolio</p>

                <p className="lead-text text-center ">I like to solve my problems with code</p>
                <div className="justify-content-center align-items-center d-flex">
                    <button className="btn btn-large btn-primary mb-4">View My Work</button>
                </div>
            </div>
        </>
    );

}
export default WelcomePage;

