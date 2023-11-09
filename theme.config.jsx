import Logo from "components/logo";
import Head from "components/head";
import Footer from "components/footer";
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
    text: <Footer />,
  },
};

export default themeConfig;
