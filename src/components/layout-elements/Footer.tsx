import classes from "./Footer.module.css";
import Icon from "../icons/Icon";
import { DragEventHandler } from "react";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <div className={classes["social-media"]}>
          <ul>
            <li>
              <a href="mailto:hattar00@mylangara.ca" target="_blank">
                <Icon name="email" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hassanattar/"
                target="_blank"
              >
                <Icon name="linkedin" />
              </a>
            </li>
            <li>
              <a href="https://github.com/hassan-attar" target="_blank">
                <Icon name="github" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/hassanattar_" target="_blank">
                <Icon name="instagram" />
              </a>
            </li>
          </ul>
        </div>
        <p>
          &copy; <span>{new Date().getFullYear()}</span> Hassan Attar All Rights
          Reserved.
        </p>
      </div>
      <a
        href="mailto:hattar97@yahoo.com"
        className={`${classes.cta} ${classes.mobile}`}
      >
        <Icon name="email" />
      </a>
      <a
        href="mailto:hattar97@yahoo.com"
        className={`${classes.cta} ${classes.desktop}`}
      >
        Contact me <Icon name="email" />
      </a>
    </footer>
  );
};

export default Footer;
