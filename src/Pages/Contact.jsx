const Contact = () => {

  return (
    <>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">
              Contact Me
            </h1>
            <p className="col-lg-10 fs-4">
              Whether you are a small business looking for a custom website or a hiring manager. I am always looking for a challenge and to improve my coding skills. Help me out by shooting me an email by filling the following form.
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-light">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingName"
                  placeholder="John Doe"
                />
                <label htmlFor="floatingName">Full Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder="johndoe@example.com"
                />
                <label htmlFor="floatingEmail">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="floatingNumber"
                  placeholder="Password"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                />
                <label htmlFor="floatingNumber">Phone Number</label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="floatingMessage"
                  placeholder="Message"
                style={{resize: 'none', height: '15vh'}}
            
                />
                <label htmlFor="floatingMessage">Message</label>
              </div>
              <div className="checkbox mb-3">
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Send Message
              </button>
              <hr className="my-4" />
              <small className="text-muted">
                By clicking Sign up, you agree to the terms of use.
              </small>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
