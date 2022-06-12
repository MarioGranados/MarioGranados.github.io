import './OtherProjects.css'
import {FaGithub, FaExternalLinkAlt, FaFolder} from "react-icons/fa";
const OtherProjects = () => {
    return (<>
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
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloribus est
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
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloribus est
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
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloribus est
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
    );
}
export default OtherProjects;
