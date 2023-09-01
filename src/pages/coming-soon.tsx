import Wrapper from "@/components/layout-elements/Wrapper";
import Icon from "@/components/icons/Icon";
import classes from "../styles/coming-soon.module.css";
import Head from "next/head";

export default function ComingSoon() {
  return (
    <>
      <Head>
        <title>Coming Soon</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <section className={classes["coming-soon"]}>
        <Wrapper>
          <div className={classes.illustration}>
            <Icon name="under-construction" />
          </div>
          <div className={classes.content}>
            <h4 className="smaller">Coming Soon!</h4>
            <p>
              I&apos;m currently working on deploying my projects and showcasing
              my work.
            </p>
            <p>
              I&apos;m considering to either deploy all the projects on a{" "}
              <strong>AWS EC2 instance</strong> or use serverless environments
              like <strong>AWS Elastic Beanstalk</strong> and{" "}
              <strong>AWS Lightsail</strong>.
            </p>
            <p>
              In the meantime, feel free to checkout the repo and follow the
              readme instructions to deploy the projects locally, if you wish.
            </p>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
