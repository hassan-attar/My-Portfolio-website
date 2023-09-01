import classes from "./AboutMeSection.module.css";
import Wrapper from "../layout-elements/Wrapper";
import Icon from "../icons/Icon";
import { AboutMe } from "@/util/types";
import { useNav } from "../hooks/useNav";
const AboutMeSection = ({ aboutMe }: { aboutMe: AboutMe }) => {
  const ref = useNav("About me");
  return (
    <section className={classes["about-me"]} id={"about-me"} ref={ref}>
      <Wrapper>
        <div>
          <h2>About Me</h2>
          <h3>Interests</h3>
        </div>
        <div className={classes.content}>
          <div className={classes.about}>
            {aboutMe.about.map((el) => (
              <div key={el.title}>
                <h6>
                  <Icon name={el.icon} />
                  {el.title}
                </h6>
                <p>{el.description}</p>
              </div>
            ))}
          </div>
          <div className={classes.hobbies}>
            <h4>Things that I enjoy</h4>
            <ul>
              {aboutMe.hobbies.map((hobby) => (
                <li key={hobby.name}>
                  <Icon name={hobby.icon} />
                  <span className="larger">{hobby.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default AboutMeSection;
