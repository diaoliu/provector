import AppLink from "components/app-link";
import Link from "components/link";
import DoodleArrow from "icons/doodle-arrow";
import DoodleHighlight from "icons/doodle-highlight";

import styles from "styles/banner.module.scss";

const Banner = () => (
  <section className={styles.banner}>
    <h1>
      A free
      <span className={styles.underline}> yet powerful </span>
      online vector graphics editor for designers
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
