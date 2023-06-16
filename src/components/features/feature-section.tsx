import Chip from "components/chip";
import FeatureLink from "components/features/feature-link";

import styles from "styles/feature-section.module.scss";

interface FeatureSectionProps {
  children: React.ReactNode;
  functions: string[];
  header: string;
  label: string;
}

const FeatureSection = ({
  children,
  functions,
  header,
  label,
}: FeatureSectionProps) => (
  <section className={styles.section}>
    <Chip label={label} />
    <h2>{header}</h2>
    <p>{children}</p>
    {functions.map((content) => (
      <FeatureLink key={content} className={styles.chip} label={content} />
    ))}
  </section>
);

export default FeatureSection;
