import classes from "./Footer.module.css";
import Icon from "../icons/Icon";

const Footer = () => {
  const socialMedias = [
    {
      name: "email",
      url: "mailto:info@hassanattar.com",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/hassanattar/",
    },
    {
      name: "github",
      url: "https://github.com/hassan-attar",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/hassanattar_",
    },
  ];
  return (
    <footer className={classes.footer}>
      <div>
        <div className={classes["social-media"]}>
          <ul>
            {socialMedias.map((acc) => (
              <li key={acc.name}>
                <a href={acc.url} target="_blank">
                  <Icon name={acc.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p>
          &copy; <span>{new Date().getFullYear()}</span> Hassan Attar. All
          Rights Reserved.
        </p>
      </div>
      <a
        href="mailto:info@hassanattar.com"
        className={`${classes.cta} ${classes.mobile}`}
      >
        <Icon name="email" />
      </a>
      <a
        href="mailto:info@hassanattar.com"
        className={`${classes.cta} ${classes.desktop}`}
      >
        Contact me <Icon name="email" />
      </a>
    </footer>
  );
};

export default Footer;
