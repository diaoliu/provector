import clsx from "clsx";

import styles from "styles/app-link.module.scss";

interface AppLinkProps {
  className?: string;
}

const AppLink = ({ className }: AppLinkProps) => (
  <a className={clsx(className, styles.appLink)} href="https://provector.app">
    GETTING STATED
  </a>
);

export default AppLink;
