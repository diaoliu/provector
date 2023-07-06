import clsx from "clsx";

import styles from "styles/app-link.module.scss";

interface AppLinkProps {
  className?: string;
}

const content = "GETTING STATED - it's free";

const AppLink = ({ className }: AppLinkProps) => (
  <a className={clsx(className, styles.appLink)} href="https://provector.app">
    {content}
  </a>
);

export default AppLink;
