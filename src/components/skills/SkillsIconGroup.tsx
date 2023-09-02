import { useState } from "react";
import classes from "./SkillsIconGroup.module.css";
const { default: Icon } = require("../icons/Icon");

const SkillsIconGroup = ({
  iconNames,
  loadByIcon = false,
}: {
  iconNames: string[];
  loadByIcon?: boolean;
}) => {
  return (
    <>
      {!loadByIcon && (
        <ul className={classes.skillGroup}>
          {iconNames.map((iconName) => (
            <li key={iconName} className="smaller">
              {iconName}
            </li>
          ))}
        </ul>
      )}
      {loadByIcon && (
        <ul className={classes.skillIconGroup}>
          {iconNames.map((iconName) => (
            <li key={iconName}>
              <Icon name={iconName.toLowerCase()} key={iconName} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SkillsIconGroup;
