import { useRef, useState } from "react";
import React from "react";
import emailjs from "@emailjs/browser";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../Config/Mail";

const Contact = () => {

  const form = useRef();

  const [click, setClick] = useState(false);
  const [message, setMessage] = useState({
    fullName: "",
    cellPhone: "",
    message: "",
    email: "",
  });

  const handleSendMessage = (event) => {
    event.preventDefault();
    // emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
    setClick(true);
  };
  const handleEmailChange = (e) => {
    setMessage((message) => ({ ...message, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div className="container-fluid bg-secondary">
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
          <div className="row align-items-center g-lg-5 py-5">
            <div
              className="col-lg-7 text-center text-lg-start"
              data-aos="flip-up"
            >
              <h1 className="display-4 fw-bold lh-1 mb-3 text-light">
                Contact Me
              </h1>
              <p className="col-lg-10 fs-4 text-light">
                Whether you are a small business looking for a custom website or
                a hiring manager. I am always looking for a challenge and to
                improve my coding skills. Help me out by shooting me an email by
                filling the following form.
              </p>
            </div>
            <div className="col-md-10 mx-auto col-lg-5" data-aos="flip-down">
              <form ref={form} onSubmit={handleSendMessage} className="p-4 p-md-5 border rounded-3 bg-secondary text-light">
                {click ? (
                  <>
                    <h3 className="text-center">
                      Your Message Has Been Sent, Thank You
                    </h3>
                  </>
                ) : (
                  <>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingName"
                        placeholder="John Doe"
                        name="fullName"
                        onChange={handleEmailChange}
                      />
                      <label htmlFor="floatingName">Full Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingEmail"
                        placeholder="johndoe@example.com"
                        name="email"
                        onChange={handleEmailChange}
                      />
                      <label htmlFor="floatingEmail">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="tel"
                        className="form-control"
                        id="floatingNumber"
                        placeholder="Password"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        name="cellPhone"
                        onChange={handleEmailChange}
                      />
                      <label htmlFor="floatingNumber">Phone Number</label>
                    </div>
                    <div className="form-floating mb-3">
                      <textarea
                        className="form-control"
                        id="floatingMessage"
                        placeholder="Message"
                        style={{ resize: "none", height: "15vh" }}
                        name="message"
                        onChange={handleEmailChange}
                      />
                      <label htmlFor="floatingMessage">Message</label>
                    </div>
                    <div className="checkbox mb-3"></div>
                    <button
                      className="w-100 btn btn-lg btn-primary"
                      type="submit"
                      value='send'
                    >
                      Send Message
                    </button>
                    <hr className="my-4" />
                    <small className="text-muted">
                      By clicking Sign up, you agree to the terms of use.
                    </small>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
