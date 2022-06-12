import './Footer.css'
import {Button} from "./Button";
import {FaGithubSquare, FaLinkedin} from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className='footer footer_container'>
                <div className="row">
                    <div className="col">
                        <h4 className='footer_header'>Follow Me On Social Media!</h4>
                        <a href="/" className='icons'>
                            <FaGithubSquare/>
                        </a>
                        <a href="/" className='icons'>
                            <FaLinkedin/>
                        </a>
                    </div>
                    <div className="col">
                        <h4 className='footer_header'>Contact Me</h4>
                        <label htmlFor="fname">
                            First Name
                        </label>
                        <input type="text" className='form_control'/>
                        <label htmlFor="lname">
                            Last Name
                        </label>
                        <input type="text" className='form_control'/>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="text" className='form_control'/>
                        <label htmlFor="phone">
                            Phone Number
                        </label>
                        <input type="text" className='form_control'/>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10">

                        </textarea>

                        <Button buttonSize='btn-medium'
                                buttonStyle='btn-primary'>
                            Send Message
                        </Button>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer
