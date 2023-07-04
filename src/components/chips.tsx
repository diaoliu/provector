import clsx from "clsx";

import styles from "styles/chip.module.scss";

const Chips = ({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx(styles.chips, className)}>{children}</div>
);

export default Chips;
