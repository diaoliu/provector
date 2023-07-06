import AppLink from "components/app-link";

import styles from "styles/get-started.module.scss";

const GetStarted = () => (
  <section className={styles.getStarted}>
    <div className={styles.header}>
      <h2>Get Started with Provector for Free in your browser!</h2>
      <p>No membership, no subscriptions,no downloads, no installation.</p>
      <AppLink />
    </div>
    <img src="/screenshot.png" alt="screenshot" />
  </section>
);

export default GetStarted;
