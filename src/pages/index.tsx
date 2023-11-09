import Head from "next/head";

import site from "shared/site";
import Banner from "components/banner";
import Contact from "components/contact";
import FAQs from "components/faqs";
import Footer from "components/footer";
import FooterLinks from "components/footer-links";
import Features from "components/features";
import Header from "components/header";
import HeadMeta from "components/head";
import Tools from "components/tools";
import ThemeContextProvider from "components/theme-context-provider";

import styles from "styles/index-page.module.scss";

const IndexPage = () => (
  <ThemeContextProvider>
    <div className={styles.indexPage}>
      <Head>
        <title>{site.title}</title>
        <HeadMeta />
      </Head>
      <Header />
      <main>
        <Banner />
        <Tools />
        <Features />
        <FAQs />
      </main>
      <footer>
        <Contact />
        <Footer>
          <FooterLinks />
        </Footer>
      </footer>
    </div>
  </ThemeContextProvider>
);

export default IndexPage;
