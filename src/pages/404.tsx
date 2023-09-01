import Icon from "@/components/icons/Icon";
import Wrapper from "../components/layout-elements/Wrapper";
import classes from "../styles/404.module.css";

export default function ContactMe() {
  return (
    <section className={classes["not-found"]}>
      <Wrapper>
        <div className={classes.illustration}>
          <Icon name="not-found" />
        </div>
        <div className={classes.content}>
          <h4 className="smaller">Page not found!</h4>
          <p>Sorry, the page you are looking for doesn't exist.</p>
        </div>
      </Wrapper>
    </section>
  );
}
