import classes from "./SkillSet.module.css";
import SkillsIconGroup from "./SkillsIconGroup";
import Icon from "../icons/Icon";
import { Skill } from "@/util/types";

const SkillSet = ({ skill }: { skill: Skill }) => {
  return (
    <div className={classes["skill-set"]}>
      <div className={classes.header}>
        <span>
          <Icon name={skill.icon} />
        </span>
        <h6>{skill.name}</h6>
      </div>
      <SkillsIconGroup iconNames={skill.skillSet} loadByIcon={skill.loadIcon} />
    </div>
  );
};

export default SkillSet;
