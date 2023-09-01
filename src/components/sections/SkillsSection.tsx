import classes from "./SkillsSection.module.css";
import Wrapper from "../layout-elements/Wrapper";
import SkillSet from "../skills/SkillSet";
import { Skill } from "@/util/types";
import { useNav } from "../hooks/useNav";

const SkillsSection = ({ skills }: { skills: Skill[] }) => {
  const ref = useNav("Skills");
  return (
    <section className={classes.skills} id={"skills"} ref={ref}>
      <Wrapper>
        <div>
          <h2>My Skills</h2>
          <h3 className="for-h2">Highlights</h3>
        </div>
        <div className={classes.content}>
          {skills.map((skill) => (
            <SkillSet skill={skill} key={skill.name} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default SkillsSection;
