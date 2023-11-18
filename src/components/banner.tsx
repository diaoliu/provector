import Image from "next/image";

import site from "shared/site";
import AppLink from "components/app-link";
import Link from "components/link";
import DoodleArrow from "icons/doodle-arrow";
import DoodleHighlight from "icons/doodle-highlight";

import styles from "styles/banner.module.scss";

const productHuntLink =
  "https://www.producthunt.com/posts/provector?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-provector";

const productHuntImageLink =
  "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=425826&theme=light";

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
    <a className={styles.productHunt} href={productHuntLink} target="_blank">
      <Image
        src={productHuntImageLink}
        alt={site.descriptions + " | Product Hunt"}
        width="250"
        height="54"
      />
    </a>
  </section>
);

export default Banner;
