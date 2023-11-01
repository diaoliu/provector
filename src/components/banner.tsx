import site from "shared/site";
import AppLink from "components/app-link";
import Link from "components/link";
import DoodleArrow from "icons/doodle-arrow";
import DoodleHighlight from "icons/doodle-highlight";

import styles from "styles/banner.module.scss";

const Banner = () => (
  <section className={styles.banner}>
    <h1>
      {site.descriptions[0]}
      <span className={styles.underline}>{site.descriptions[1]}</span>
      {site.descriptions[2]}
    </h1>
    <p>Start creating your design without sign up and subscriptions</p>
    <div className={styles.links}>
      <AppLink />
      <Link href="/docs">Learn</Link>
      <DoodleArrow className={styles.highlight} />
      <DoodleHighlight className={styles.arrow} />
    </div>
  </section>
);

export default Banner;
