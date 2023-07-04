import Chips from "components/chips";
import FeatureLink from "components/features/feature-link";
import FeatureSections from "components/features/feature-sections";

import styles from "styles/banner.module.scss";

const PRINT = "/#" + FeatureSections.PRINT;
const ILLUSTRATION = "/#" + FeatureSections.ILLUSTRATION;
const TECHNICAL_DRAWING = "/#" + FeatureSections.TECHNICAL_DRAWING;

const Banner = () => (
  <section className={styles.banner}>
    <h1>A free yet powerful online vector graphics editor for designers</h1>
    <p>Start creating your design without sign up and subscriptions</p>
    <a href="https://provector.app" className={styles.link}>
      GETTING STATED - it's free
    </a>
    <Chips className={styles.chips}>
      <FeatureLink label="Illustration" href={ILLUSTRATION} />
      <FeatureLink label="Technical Drawing" href={TECHNICAL_DRAWING} />
      <FeatureLink label="UI Design" href={PRINT} />
      <FeatureLink label="Print" href={PRINT} />
      <FeatureLink label="Typography " href={PRINT} />
    </Chips>
  </section>
);

export default Banner;
