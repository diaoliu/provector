import clsx from "clsx";

import styles from "styles/link.module.scss";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  primary?: boolean;
}

const Link = ({ className, primary, ...rest }: LinkProps) => (
  <a
    className={clsx(styles.link, primary && styles.linkPrimary, className)}
    {...rest}
  />
);

export default Link;
