import styles from "styles/section-header.module.scss";

const SectionHeader = ({ emoji = "", header = "", subheader = "" }) => (
  <div className={styles.sectionHeader}>
    <i>{emoji}</i>
    <h2>{header}</h2>
    <p>{subheader}</p>
  </div>
);

export default SectionHeader;
