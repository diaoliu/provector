import styles from "styles/contact.module.scss";

const Contact = () => (
  <div className={styles.contact}>
    <h3>Say 👋 to developer </h3>
    <div className={styles.developer}>
      <div className={styles.avatar}>👨‍💻</div>
      <a href="mailto:diaoliu@gmail.com">
        <div className={styles.name}>
          <strong>Diao Liu</strong>
          <small className={styles.badge}>Maker</small>
        </div>
        <small className={styles.email}>diaoliu@gmail.com</small>
      </a>
    </div>
  </div>
);

export default Contact;
