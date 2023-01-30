import { Link } from "react-router-dom";
import {
  SiMysql,
  SiReact,
  SiHtml5,
  SiCss3,
  SiAngular,
  SiBootstrap,
  SiMongodb,
  SiJavascript,
  SiSpring,
  SiNodedotjs,
  SiAmazonaws,
  SiJasmine,
  SiJunit5,
} from "react-icons/si";

const Skills = () => {
  return (
    <>
      <div className="container px-4 py-5">
        <h2 className="pb-2 border-bottom">Skills</h2>

        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <div
            className="col d-flex flex-column align-items-start gap-2"
            data-aos="fade-down"
          >
            <h3 className="fw-bold">Technical Skills</h3>
            <p className="text-muted">
              As A full stack developer I am proficient in the following skills
            </p>
            <ul>
              <li>Object-Oriented Programming</li>
              <li>TTD</li>
              <li>Version Control</li>
              <li>Debugging</li>
              <li>Front-End UX/UI Development</li>
              <li>Back-End Development</li>
            </ul>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact
            </Link>
          </div>

          <div className="col" data-aos="fade-down">
            <div className="row row-cols-1 row-cols-sm-2 g-4">
              <div className="col d-flex flex-column gap-2">
                <h4 className="fw-semibold mb-0">Database SQL Queries</h4>
                <p className="text-muted">
                  Managing complex custom SQL queries for back-end JPAs
                </p>
                <p className="d-flex justify-content-around">
                  <SiMongodb size={42} /> <SiMysql size={42} />
                </p>
              </div>

              <div className="col d-flex flex-column gap-2">
                <h4 className="fw-semibold mb-0">Responsive UX/UI Design</h4>
                <p className="text-muted">
                  Webflow planning and modern web designs
                </p>
                <p className="d-flex justify-content-around">
                  <SiAngular size={42} /> <SiReact size={42} />{" "}
                  <SiHtml5 size={42} /> <SiCss3 size={42} />{" "}
                  <SiJavascript size={42} />
                </p>
              </div>

              <div className="col d-flex flex-column gap-2">
                <h4 className="fw-semibold mb-0">API Development</h4>
                <p className="text-muted">
                  Proficient in Spring Boot and Node.js Restful API Services
                </p>
                <p className="d-flex justify-content-around">
                  <SiSpring size={42} /> <SiNodedotjs size={42} />
                </p>
              </div>

              <div className="col d-flex flex-column gap-2">
                <h4 className="fw-semibold mb-0">Test-Driven Development</h4>
                <p className="text-muted">
                  Experienced in TDD for Javascript and Java
                </p>
                <p className="d-flex justify-content-around">
                  <SiJasmine size={42} /> <SiJunit5 size={42} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
