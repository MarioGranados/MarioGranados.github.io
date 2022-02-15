import React, {useState} from "react";
function Footer() {

    function handleSubmit(e) {
        e.preventDefault()
        let name = firstName + ' ' + lastName;
    }

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [email, setEmail] = useState('')
    const [messageText, setMessage] = useState('Hi, I love your work! Please contact me as soon as possible!');

    return (
        <footer>
            <div className="space_bg text-white">
                <div className="container">
                    <div className="row p-5">
                        <div className="col" data-aos="fade-up">
                            <div className="display-4 red-text">Mario Granados</div>
                            <div className="text-muted ">Full-Stack Developer</div>
                            <p className="lead">
                                
                            </p>
                            <div className="display-4 red-text">Follow Me!</div>
                            <div className="d-flex justify-content-between w-50">
                                <div className="text-muted"><a href='https://github.com/MarioGranados' className='text-decoration-none green-text'>Github</a></div>
                                <div className="text-muted"><a href='https://www.linkedin.com/in/mario-granados-18a21b186/' className='text-decoration-none green-text'>LinkedIn</a></div>
                                <div className="text-muted"><a href='https://www.instagram.com/mariogranados97/' className='text-decoration-none green-text'>Instagram</a></div>
                            </div>

                        </div>
                        <div className="col" data-aos="fade-up">
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group col-md-6 border-color-red">
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="text" className="form-control bg-transparent text-white" id="firstName"
                                               placeholder="John" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                                    </div>
                                    <div className="form-group col-md-6 border-color-red">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" className="form-control bg-transparent text-white" id="lastName"
                                               placeholder="Smith" value={lastName} onChange={e => setLastName(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="form-group border-color-red">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input type="tel" className="form-control bg-transparent text-white" id="phoneNumber"
                                           placeholder="000 000 0000" value={phoneNum} onChange={e => setPhoneNum(e.target.value)}/>
                                </div>
                                <div className="form-group border-color-red">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control bg-transparent text-white" id="email"
                                           placeholder="example@email.com" value={email} onChange={e => setEmail(e.target.value)}/>
                                </div>
                                <div className="form-group border-color-red">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control bg-transparent text-white" id="message" rows="3" value={messageText} onChange={e => setMessage(e.target.value)}>

                                    </textarea>
                                </div>
                                <div className="form-group border-color-red">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                        <label className="form-check-label" htmlFor="gridCheck">
                                            Subscribe
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-outline-light border-color-red" value={'Submit'}>Send Message</button>
                            </form>
                        </div>
                    </div>
                    <div className="text-center p-2">Mario Granados</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;