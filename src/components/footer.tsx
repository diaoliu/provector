import Logo from "components/logo";

import styles from "styles/footer.module.scss";

const getCopyRight = () =>
  `©${new Date().getFullYear()} Diao Liu. All rights reserved | Made in Frankfurt am Main, Germany`;

const Footer = ({ children }: React.PropsWithChildren) => (
  <div className={styles.footer}>
    <Logo />
    {children}
    <div className={styles.copyright}>
      <small>{getCopyRight()}</small>
    </div>
  </div>
);

export default Footer;
