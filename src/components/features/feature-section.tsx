import clsx from "clsx";
import Image from "next/image";

import Chip from "components/chip";

import styles from "styles/feature-section.module.scss";

interface FeatureSectionProps {
  id: string;
  children: React.ReactNode;
  header: string;
  label: string;
  image: string;
  reverse?: boolean;
  priority?: boolean;
}

const FeatureSection = ({
  id,
  children,
  header,
  label,
  image,
  reverse,
  priority,
}: FeatureSectionProps) => (
  <section id={id} className={clsx(styles.section, reverse && styles.reverse)}>
    <Image
      alt={label}
      src={image}
      width={800}
      height={400}
      priority={priority}
      className={styles.row}
    />
    <div className={styles.row}>
      <Chip label={label} />
      <h2>{header}</h2>
      {children}
    </div>
  </section>
);

export default FeatureSection;
