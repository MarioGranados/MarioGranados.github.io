const Contact = () => {

  return (
    <>
      <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 mb-3">
              Contact Me
            </h1>
            <p class="col-lg-10 fs-4">
              Whether you are a small business looking for a custom website or a hiring manager. I am always looking for a challenge and to improve my coding skills. Help me out by shooting me an email by filling the following form.
            </p>
          </div>
          <div class="col-md-10 mx-auto col-lg-5">
            <form class="p-4 p-md-5 border rounded-3 bg-light">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingName"
                  placeholder="John Doe"
                />
                <label for="floatingName">Full Name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingEmail"
                  placeholder="johndoe@example.com"
                />
                <label for="floatingEmail">Email</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="tel"
                  class="form-control"
                  id="floatingNumber"
                  placeholder="Password"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                />
                <label for="floatingNumber">Phone Number</label>
              </div>
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  id="floatingMessage"
                  placeholder="Message"
                style={{resize: 'none', height: '15vh'}}
            
                />
                <label for="floatingMessage">Message</label>
              </div>
              <div class="checkbox mb-3">
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">
                Send Message
              </button>
              <hr class="my-4" />
              <small class="text-muted">
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
