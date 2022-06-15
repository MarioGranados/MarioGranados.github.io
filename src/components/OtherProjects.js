import './OtherProjects.css'
import {FaGithub, FaExternalLinkAlt, FaFolder} from "react-icons/fa";
import {useState} from "react";
import {Button} from "./Button";

const OtherProjects = () => {
    const [click, setClick] = useState(null);
    let showMore = (e) => {
        e.preventDefault();
        setClick(true);
    }
    let showLess = (e) => {
        e.preventDefault();
        setClick(false);
    }
    let append = () => {

        return (
            <>
                <section className='other_projects'>
                    <div className="container">
                        <div className="row ">
                            <div className="col">
                                <a href='/'>
                                    <div className="cards">
                                        <div className="row">
                                            <a href="/">
                                                <FaFolder/>
                                            </a>
                                            <a href="/">
                                                <FaGithub/>
                                            </a>
                                            <a href="/">
                                                <FaExternalLinkAlt/>
                                            </a>
                                        </div>
                                        <div className="card_body">
                                            <h4 className='card_title'>title</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloribus
                                                est
                                                facere qui sint?</p>
                                            <div className="soft_text">Lorem ipsum dolor sit.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col">
                                <a href='/'>
                                    <div className="cards">
                                        <div className="row">
                                            <a href="/">
                                                <FaFolder/>
                                            </a>
                                            <a href="/">
                                                <FaGithub/>
                                            </a>
                                            <a href="/">
                                                <FaExternalLinkAlt/>
                                            </a>
                                        </div>
                                        <div className="card_body">
                                            <h4 className='card_title'>title</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloribus
                                                est
                                                facere qui sint?</p>
                                            <div className="soft_text">Lorem ipsum dolor sit.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col">
                                <a href='/'>
                                    <div className="cards">
                                        <div className="row">
                                            <a href="/">
                                                <FaFolder/>
                                            </a>
                                            <a href="/">
                                                <FaGithub/>
                                            </a>
                                            <a href="/">
                                                <FaExternalLinkAlt/>
                                            </a>
                                        </div>
                                        <div className="card_body">
                                            <h4 className='card_title'>title</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloribus
                                                est
                                                facere qui sint?</p>
                                            <div className="soft_text">Lorem ipsum dolor sit.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

    return (
        <>
            <section className='other_projects'>
                <div className="container">
                    <div className="row ">
                        <div className="col">
                            <a href='/'>
                                <div className="cards">
                                    <div className="row">
                                        <a href="/">
                                            <FaFolder/>
                                        </a>
                                        <a href="/">
                                            <FaGithub/>
                                        </a>
                                        <a href="/">
                                            <FaExternalLinkAlt/>
                                        </a>
                                    </div>
                                    <div className="card_body">
                                        <h4 className='card_title'>title</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloribus
                                            est
                                            facere qui sint?</p>
                                        <div className="soft_text">Lorem ipsum dolor sit.</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='/'>
                                <div className="cards">
                                    <div className="row">
                                        <a href="/">
                                            <FaFolder/>
                                        </a>
                                        <a href="/">
                                            <FaGithub/>
                                        </a>
                                        <a href="/">
                                            <FaExternalLinkAlt/>
                                        </a>
                                    </div>
                                    <div className="card_body">
                                        <h4 className='card_title'>title</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloribus
                                            est
                                            facere qui sint?</p>
                                        <div className="soft_text">Lorem ipsum dolor sit.</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='/'>
                                <div className="cards">
                                    <div className="row">
                                        <a href="/">
                                            <FaFolder/>
                                        </a>
                                        <a href="/">
                                            <FaGithub/>
                                        </a>
                                        <a href="/">
                                            <FaExternalLinkAlt/>
                                        </a>
                                    </div>
                                    <div className="card_body">
                                        <h4 className='card_title'>title</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloribus
                                            est
                                            facere qui sint?</p>
                                        <div className="soft_text">Lorem ipsum dolor sit.</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className='d-flex justify-content-center text-center bg-dark p-4 pt-none'>
                {!click ?
                    <a onClick={showMore}>
                        <Button buttonSize='btn_medium'
                                buttonStyle='btn_primary'
                        >
                            Show More
                        </Button>
                    </a> : null
                }


            </div>
            {click ? append() : null}
            {click ? append() : null}
            {click ?
                <div className='d-flex justify-content-center text-center bg-dark p-4 pt-none'>
                    <a onClick={showLess}>
                        <Button buttonSize='btn_medium'
                                buttonStyle='btn_outline'
                        >
                            Show Less
                        </Button>
                    </a>
                </div>
                : null}
        </>
    );
}
export default OtherProjects;
