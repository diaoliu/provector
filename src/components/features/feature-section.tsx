import clsx from "clsx";

import Chip from "components/chip";

import styles from "styles/feature-section.module.scss";

interface FeatureSectionProps {
  id: string;
  children: React.ReactNode;
  header: string;
  label: string;
  image: string;
  reverse?: boolean;
}

const FeatureSection = ({
  id,
  children,
  header,
  label,
  image,
  reverse,
}: FeatureSectionProps) => (
  <section id={id} className={clsx(styles.section, reverse && styles.reverse)}>
    <img className={styles.row} src={image} />
    <div className={styles.row}>
      <Chip label={label} />
      <h2>{header}</h2>
      {children}
    </div>
  </section>
);

export default FeatureSection;
