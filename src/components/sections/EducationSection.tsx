import classes from "./EducationSection.module.css";
import Wrapper from "../layout-elements/Wrapper";
import Icon from "../icons/Icon";
import { Education } from "@/util/types";
import { useNav } from "../hooks/useNav";

const EducationSection = ({ edu }: { edu: Education }) => {
  const ref = useNav("Education");

  return (
    <section className={classes.education} id={"education"} ref={ref}>
      <Wrapper>
        <div>
          <h2>My Education</h2>
          <h3>Courses</h3>
        </div>
        <div className={classes.content}>
          <div className={classes.degrees}>
            <h4 className="smaller">Degree Programs:</h4>
            {edu.degrees.map((degree) => (
              <div key={degree.title}>
                <div>
                  <h6>{degree.title}</h6>
                  <span className={classes.date}>
                    {degree.from} to<span>&nbsp;{degree.to}</span>
                  </span>
                </div>
                <span>{degree.where}</span>
                <p className={classes.GPA}>GPA: {degree.GPA} out of 4.33</p>
              </div>
            ))}
          </div>
          <div className={classes.credentials}>
            <div className={classes.courses}>
              <h4 className="smaller">Courses:</h4>
              <ul className={classes["course-list"]}>
                {edu.courses.map((course) => (
                  <li key={course}>
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={classes.certificates}>
              <h4 className="smaller">Certificates:</h4>
              <ul>
                {edu.certificates.map((certificate) => (
                  <li key={certificate.title}>
                    <Icon name={"badge"} />
                    <a
                      href="https://www.linkedin.com/in/hassanattar/details/certifications"
                      target="_blank"
                    >
                      {certificate.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default EducationSection;
