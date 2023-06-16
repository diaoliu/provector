import clsx from "clsx";

import icons from "icons/icons";
import Icon from "icons/icon";

import styles from "styles/chip.module.scss";

interface FeatureLinkProps {
  className?: string;
  href?: string;
  label: string;
}

const FeatureLink = ({ className, label, href = "/" }: FeatureLinkProps) => (
  <a className={clsx(styles.chip, className)} href={href}>
    <Icon size={20} d={icons.check} />
    <small>{label}</small>
  </a>
);

export default FeatureLink;
