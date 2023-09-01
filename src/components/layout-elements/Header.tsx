import Image from "next/image";
import logo from "../../../public/ha-logo.png";
import classes from "./Header.module.css";
import { MouseEventHandler, useContext, useState } from "react";
import Link from "next/link";
import Icon from "../icons/Icon";
import { NavContext } from "../context/NavContext";

const Header = () => {
  const { activeLinkId } = useContext(NavContext);
  console.log(activeLinkId);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navLinks = ["Skills", "Portfolio", "Education", "About me"];

  const openMenuHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setIsNavOpen((prevState) => !prevState);
  };

  const scrollToView = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId)!;
    const headerHeight = document.querySelector("header")?.offsetHeight!;
    const targetScrollPosition =
      sectionElement.getBoundingClientRect().top +
      window.scrollY -
      headerHeight;
    setIsNavOpen((prevState) => !prevState);
    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  };

  const linkClickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    let sectionId;
    sectionId = (e.target as HTMLButtonElement).textContent
      ?.toLowerCase()
      .replace(" ", "-");
    scrollToView(sectionId!);
  };

  return (
    <header className={`${classes.header}`}>
      <div>
        <button
          onClick={() => scrollToView("hero")}
          className={classes["logo-btn"]}
        >
          <Image src={logo} alt="Hassan Attar Logo" className={classes.logo} />
        </button>

        <button onClick={openMenuHandler} className={classes.menu}>
          {!isNavOpen && <Icon name="menu" />}
          {isNavOpen && <Icon name="close" />}
        </button>
        <nav className={isNavOpen ? classes.open : ""}>
          <ul>
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={linkClickHandler}
                  className={`${
                    activeLinkId == link || activeLinkId == "Hero"
                      ? classes["active-link"]
                      : ""
                  } smaller`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
