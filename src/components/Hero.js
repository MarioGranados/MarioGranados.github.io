const Hero = (inverse,
              hasImg,
              img,
              alt,
              title,
              col1,
              col2) => {

    return (
        <>
            <div className="container">
                <div className="text-center display-4">{title}</div>
                <div className="row justify-content-around">
                    {inverse ?
                        <>
                            <div className="col">
                                {col1}
                            </div>
                            <div className="col">
                                {col2}
                            </div>
                        </>
                        : <>
                            <div className="col">
                                {col1}
                            </div>
                            <div className="col">
                                {col2}
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );

}
export default Hero;