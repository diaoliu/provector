import site from "shared/site";
import Chips from "components/chips";
import AppLink from "components/app-link";
import FeatureLink from "components/features/feature-link";
import FeatureSections from "components/features/feature-sections";

import styles from "styles/banner.module.scss";

const PRINT = "/#" + FeatureSections.PRINT;
const ILLUSTRATION = "/#" + FeatureSections.ILLUSTRATION;
const TECHNICAL_DRAWING = "/#" + FeatureSections.TECHNICAL_DRAWING;

const Banner = () => (
  <section className={styles.banner}>
    <h1>{site.description}</h1>
    <p>Start creating your design without sign up and subscriptions</p>
    <AppLink />
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
