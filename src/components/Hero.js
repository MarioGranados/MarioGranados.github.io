import "./Hero.css";

const Hero = ({inverse, img, alt, title, content}) => {

    return (
        <>{inverse ?
            <div className="hero">
                <div className="container">
                    <div className="col_left box_effect effect box col">
                        <img src={img} alt={alt} className='img'/>
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
                        <img src={img} alt={alt} className='img'/>
                    </div>
                </div>
            </div>
        }
        </>
    );
}
export default Hero;
