import styles from "styles/contact.module.scss";

const Contact = () => (
  <div className={styles.contact}>
    <h3>Say 👋 to developer </h3>
    <div className={styles.developer}>
      <div className={styles.avatar}>👨‍💻</div>
      <a href="mailto:diao.liu@provector.app">
        <div className={styles.name}>
          <strong>Diao Liu</strong>
          <small className={styles.badge}>Maker</small>
        </div>
        <small className={styles.email}>diao.liu@provector.app</small>
      </a>
    </div>
  </div>
);

export default Contact;
