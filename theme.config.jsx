import Logo from "components/Logo";
import Head from "components/Head";
import site from "shared/site";
import useNextSeoProps from "hooks/useNextSeoProps";

const themeConfig = {
  logo: Logo,
  head: Head,
  useNextSeoProps,
  docsRepositoryBase: site.source,
  project: {
    link: site.github,
  },
  footer: {
    text: <Logo copyright description={site.description} />,
  },
};

export default themeConfig;
