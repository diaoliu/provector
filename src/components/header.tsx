import { useState } from "react";
import clsx from "clsx";

import site from "shared/site";
import AppLink from "components/app-link";
import Logo from "components/logo";
import ThemeSwitch from "components/theme-switch";

import styles from "styles/header.module.scss";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header className={clsx(styles.header, active && styles.active)}>
      <Logo />
      <nav className={styles.desktop}>
        <a href={site.learn}>Learn</a>
        <a href={site.github}>Community</a>
        <ThemeSwitch />
        <AppLink />
      </nav>
      <button
        className={styles.menuButton}
        aria-label="Toggle mobile menu"
        onClick={() => setActive(!active)}
      >
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </button>
      {active && (
        <nav className={styles.mobile}>
          <div>
            <a href={site.learn}>Learn</a>
            <a href={site.github}>Community</a>
          </div>
          <AppLink />
        </nav>
      )}
    </header>
  );
};

export default Header;
