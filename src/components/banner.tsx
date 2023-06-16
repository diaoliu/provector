import FeatureLink from "components/features/feature-link";

import styles from "styles/banner.module.scss";

const Banner = () => (
  <section className={styles.banner}>
    <h1>A free yet powerful online vector graphics editor for designers</h1>
    <p>Start creating your design without sign-in and subscriptions</p>
    <a href="https://provector.app" className={styles.link}>
      GETTING STATED - it's free
    </a>
    <div className={styles.badges}>
      <FeatureLink label="Illustration" />
      <FeatureLink label="Technical Drawing" />
      <FeatureLink label="UI Design" />
      <FeatureLink label="Print" />
      <FeatureLink label="Typography" />
    </div>
  </section>
);

export default Banner;
