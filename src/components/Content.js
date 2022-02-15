import './Content.css';
import {Link} from "react-router-dom";

let heightAndWidth = {
    height: '50%',
    width: '100%',
    margin: 'auto',
    borderRadius: '50px'
}

let borderRadius = {
    borderRadius: '50px'
}

function Content({lgBackground, title, contentText, picture, img, alt, left, table, btnText}) {
    function buttonLogic() {
        switch (btnText) {
            case 'Portfolio':
                return (<Link to={'/Portfolio'} className='text-decoration-none text-white'>{btnText}</Link>);
            case 'Contact':
                return (<Link to={'/Footer'} className='text-decoration-none text-white'>{btnText}</Link>);
            case 'Linked In':
                return (<a href='/https://www.linkedin.com/in/mario-granados-18a21b186/' target="_blank" rel="noopener noreferrer" className='text-decoration-none text-white'>{btnText}</a>)
        }
    }

    function hasImg(picture) {
        if (picture) {
            return (<div className='container'><img src={img} style={heightAndWidth} alt={alt}/></div>)
        } else {
            return (<div className='container' style={borderRadius} id='chart1'>{table}</div>)
        }
    }


    function contentLeft(left) {
        if (left) {
            return (
                <>
                    <div className='col-lg' data-aos={'fade-up'} data-aos-duration="2000" data-aos-once="false"
                         data-aos-mirror="true">
                        <h4 className={'red-text text-center mb-1 display-4'}>{title}</h4>
                        <div className={'text-center mb-1 text'}>{contentText}</div>
                        <div className="justify-content-center d-flex">
                            <button className={lgBackground ? 'btn btn-lg btn-primary mt-3 text-white text-decoration-none' : "btn btn-lg btn-danger red_bg mt-3 text-white text-decoration-none"}>{buttonLogic(btnText)}</button>
                        </div>
                    </div>
                    <div className="col-lg" data-aos={'fade-up'} data-aos-duration="2000" data-aos-once="false"
                         data-aos-mirror="true">
                        {hasImg(picture)}
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="col-lg" data-aos={'fade-up'} data-aos-duration="2000" data-aos-once="false"
                         data-aos-mirror="true">
                        {hasImg(picture)}
                    </div>
                    <div className='col-lg' data-aos={'fade-up'} data-aos-duration="2000" data-aos-once="false"
                         data-aos-mirror="true">
                        <h4 className={'red-text text-center mb-1 display-4'}>{title}</h4>
                        <div className={left !== null ? 'text-center mb-1 text' : 'text-start mb-1 text'}>{contentText}</div>
                        <div className="justify-content-center d-flex">
                            <button className={lgBackground ? 'btn btn-lg btn-primary mt-3 text-decoration-none text-white' : "btn btn-lg red_bg btn-danger mt-3 text-decoration-none text-white"}>{buttonLogic(btnText)}</button>
                        </div>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <div className={lgBackground ? 'light_bg jumbotron my-0' : "blue_bg text-white jumbotron my-0"} id={'hero'}>
                <div className="my-0">
                    <div className="row align-items-center padding_x">
                        {contentLeft(left)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content;