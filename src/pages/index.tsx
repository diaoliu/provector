import Head from "next/head";

import site from "shared/site";
import Banner from "components/banner";
import FAQs from "components/faqs";
import Features from "components/features";
import Header from "components/header";
import HeadMeta from "components/head";
import Logo from "components/logo";
import Tools from "components/tools";

import styles from "styles/index-page.module.scss";

const IndexPage = () => (
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
      <Logo copyright description={site.description} />
    </footer>
  </div>
);

export default IndexPage;
