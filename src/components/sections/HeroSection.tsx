import classes from "./HeroSection.module.css";
import Wrapper from "../layout-elements/Wrapper";
import Image from "next/image";
import heroImage from "../../../public/home-hero.png";
import { useNav } from "../hooks/useNav";
import Icon from "../icons/Icon";

const HeroSection = () => {
  const ref = useNav("Hero");
  return (
    <section className={classes.hero} id={"hero"} ref={ref}>
      <Wrapper>
        <div>
          <h1>Hassan Attar</h1>
          <h3>Web Developer</h3>
          <br />
          <p className="larger">
            Hello 👋,
            <br /> I'm Hassan, a web/software developer based in Vancouver,
            Canada. Welcome to my portfolio website.
          </p>
        </div>
        <div className={classes.image}>
          <Image src={heroImage} height={400} alt={"hero image"} />
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSection;
