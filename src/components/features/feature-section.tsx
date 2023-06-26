import clsx from "clsx";
import Chip from "components/chip";
import FeatureLink from "components/features/feature-link";

import styles from "styles/feature-section.module.scss";

interface FeatureSectionProps {
  children: React.ReactNode;
  functions: string[];
  header: string;
  label: string;
  image: string;
  reverse?: boolean;
}

const FeatureSection = ({
  children,
  functions,
  header,
  label,
  image,
  reverse,
}: FeatureSectionProps) => (
  <section className={clsx(styles.section, reverse && styles.reverse)}>
    <img className={styles.row} src={image} />
    <div className={styles.row}>
      <Chip label={label} />
      <h2>{header}</h2>
      <p>{children}</p>
      {functions.map((content) => (
        <FeatureLink key={content} className={styles.chip} label={content} />
      ))}
    </div>
  </section>
);

export default FeatureSection;
