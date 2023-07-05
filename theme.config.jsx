import Logo from "components/logo";
import Head from "components/head";
import site from "shared/site";
import useNextSeoProps from "hooks/use-next-seo-props";

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
