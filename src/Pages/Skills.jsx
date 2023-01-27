import { Link } from "react-router-dom";

const Skills = () => {

    return(<>
    <div className="container px-4 py-5">
    <h2 className="pb-2 border-bottom">Skills</h2>

    <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
      <div className="col d-flex flex-column align-items-start gap-2" data-aos='fade-down-right'>
        <h3 className="fw-bold">Technical Skills</h3>
        <p className="text-muted">As A full stack developer I am proficient in the following skills</p>
        <Link to='/contact' className="btn btn-primary btn-lg">Contact</Link>
      </div>

      <div className="col" data-aos='fade-down-left'>
        <div className="row row-cols-1 row-cols-sm-2 g-4">
          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#collection" />
              </svg>
            </div>
            <h4 className="fw-semibold mb-0">Database SQL Queries</h4>
            <p className="text-muted">Managing complex custom SQL queries for back-end JPAs</p>
          </div>

          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#gear-fill" />
              </svg>
            </div>
            <h4 className="fw-semibold mb-0">Responsive UX/UI Design</h4>
            <p className="text-muted">Webflow planning and modern web designs</p>
          </div>

          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#speedometer" />
              </svg>
            </div>
            <h4 className="fw-semibold mb-0">API Development</h4>
            <p className="text-muted">Proficient in Spring Boot and Node.js Restful API Services</p>
          </div>

          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#table" />
              </svg>
            </div>
            <h4 className="fw-semibold mb-0">Test-Driven Development</h4>
            <p className="text-muted">Experienced in TDD for Javascript and Java</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>)
}
export default Skills;