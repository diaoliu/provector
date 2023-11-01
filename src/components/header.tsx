import { useState } from "react";
import clsx from "clsx";

import site from "shared/site";
import AppLink from "components/app-link";
import Logo from "components/logo";

import styles from "styles/header.module.scss";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header className={clsx(styles.header, active && styles.active)}>
      <Logo />
      <nav className={styles.desktop}>
        <a href={site.docs}>Docs</a>
        <a href={site.github}>Community</a>
        <AppLink />
      </nav>
      <button
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
            <a href={site.docs}>Docs</a>
            <a href={site.github}>Community</a>
          </div>
          <AppLink />
        </nav>
      )}
    </header>
  );
};

export default Header;
