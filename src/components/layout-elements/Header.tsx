import Image from "next/image";
import logo from "../../../public/ha-logo.png";
import classes from "./Header.module.css";
import { MouseEventHandler, useContext, useState } from "react";
import Icon from "../icons/Icon";
import { NavContext } from "../context/NavContext";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const { activeLinkId } = useContext(NavContext);
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
    setIsNavOpen(false);
    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  };

  const linkClickHandler: MouseEventHandler<HTMLButtonElement> =
    async function (e) {
      let sectionId;
      const curPath = router.pathname;

      sectionId = (e.target as HTMLButtonElement).textContent
        ?.toLowerCase()
        .replace(" ", "-");
      if (
        curPath == "/404" ||
        curPath == "/_error" ||
        curPath == "/coming-soon"
      ) {
        await router.replace(`/`);
      }
      scrollToView(sectionId!);
    };

  return (
    <header className={`${classes.header}`}>
      <div>
        <button
          onClick={() => {
            const curPath = router.pathname;
            if (
              curPath == "/404" ||
              curPath == "/_error" ||
              curPath == "/coming-soon"
            ) {
              router.replace("/");
            } else {
              scrollToView("hero");
            }
          }}
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
                    activeLinkId &&
                    activeLinkId != link &&
                    activeLinkId != "Hero"
                      ? classes["deActive-link"]
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
