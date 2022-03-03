let border = {
    border: "8px solid green",
}

const WelcomePage = () => {
    return(
        <>
            <div className="container" style={border}>
                <h2 className='display-4'>Hello I'm Mario A Software Developer</h2>
                <p className="lead">Welcome to my online Portfolio</p>

                <p className="lead-text">I like to solve my problems with code... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, ipsa.</p>
                <button className="btn btn-large btn-primary mb-4">View My Work</button>
            </div>
        </>
    );

}
export default WelcomePage;

