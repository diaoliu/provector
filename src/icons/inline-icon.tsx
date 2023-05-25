import styles from "styles/inline-icon.module.scss";

import Icon from "./icon";

const InlineIcon = ({
  d,
  children,
}: React.PropsWithChildren<{ d?: string }>) => (
  <span className={styles.inlineIcon}>
    {d && <Icon d={d} />}
    {children}
  </span>
);

export default InlineIcon;
