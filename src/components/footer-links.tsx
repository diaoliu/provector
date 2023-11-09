import site from "shared/site";
import ThemeSwitch from "components/theme-switch";

const FooterLinks = () => (
  <nav>
    <a target="_blank" href={site.about}>
      About
    </a>
    <a target="_blank" href={site.releases}>
      Releases
    </a>
    <a target="_blank" href={site.learn}>
      Learn
    </a>
    <a target="_blank" href={site.github}>
      Community
    </a>
    <ThemeSwitch />
  </nav>
);

export default FooterLinks;
