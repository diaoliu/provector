import Image from "next/image";

import AppLink from "components/app-link";

import styles from "styles/get-started.module.scss";

const GetStarted = () => (
  <section className={styles.getStarted}>
    <div className={styles.header}>
      <h2>Get Started with Provector for Free in your browser!</h2>
      <p>No membership, no subscriptions,no downloads, no installation.</p>
      <AppLink />
    </div>
    <Image width={600} height={400} alt="screenshot" src="/screenshot.webp" />
  </section>
);

export default GetStarted;
