import Icon from "@/components/icons/Icon";
import Wrapper from "@/components/layout-elements/Wrapper";
import Head from "next/head";
import classes from "../styles/404.module.css";

function Error() {
  return (
    <>
      <Head>
        <title>Error - try again!</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <section className={classes["not-found"]}>
        <Wrapper>
          <div className={classes.illustration}>
            <Icon name="not-found" />
          </div>
          <div className={classes.content}>
            <h4 className="smaller">Something went wrong!</h4>
            <p>Sorry, an error occurred. Please try again later.</p>
          </div>
        </Wrapper>
      </section>
    </>
  );
}

export default Error;
