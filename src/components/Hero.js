import "./Hero.css";

const Hero = ({inverse, img, alt, title, content}) => {

    return (
        <>{inverse ?
            <div className="hero">
                <div className="container">
                    <div className="col_left box_effect effect box col">
                        <a href="/" className='img'>
                            <img src={img} alt={alt}/>
                        </a>
                    </div>
                    <div className="col_right box_gloss gloss box col">
                        <h3>{title}</h3>
                        <p>
                            {content}
                        </p>
                    </div>
                </div>
            </div> :
            <div className="hero">
                <div className="container">
                    <div className="col_left box_gloss effect box col">
                        <h3>{title}</h3>
                        <p>
                            {content}
                        </p>
                    </div>
                    <div className="col_right box_effect gloss box col">
                        <a href="/" className='img'>
                            <img src={img} alt={alt}/>
                        </a>
                    </div>
                </div>
            </div>
        }
        </>
    );
}
export default Hero;
