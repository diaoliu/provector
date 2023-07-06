import site from "shared/site";

const Head = () => (
  <>
    <meta name="description" content={site.description} />
    <meta property="og:description" content={site.description} />
    <meta property="og:image" content={site.domain + "/browser.png"} />
    <meta property="og:image:width" content="800" />
    <meta property="og:image:height" content="400" />
    <meta property="og:url" content={site.domain} />
    <meta property="og:type" content="website" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </>
);

export default Head;
