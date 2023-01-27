import { Link } from "react-router-dom";
import PORTRAIT from '../Images/portrait.png'

const Banner = () => {

  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src={PORTRAIT}
          alt=""
          width="200"
          height="200"
          style={{borderRadius: '50%'}}
        />
        <h1 className="display-4 fw-bold" data-aos="fade-up">Mario Granados</h1>
        <h3 className="display-5">Software Developer</h3>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            US Navy veteran proficient in full-stack web development creating fully responsive websites.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to='/contact'>
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Contact Me
            </button>
            </Link>
            <Link to='/portfolio'>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              Portfolio
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
