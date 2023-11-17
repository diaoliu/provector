import site from "shared/site";

const HeadMeta = () => (
  <>
    <meta name="description" content={site.description} />
    <meta property="og:title" content={site.title} />
    <meta property="og:description" content={site.description} />
    <meta property="og:image" content={site.domain + "/social-cover.png"} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:url" content={site.domain} />
    <meta property="og:type" content="website" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </>
);

export default HeadMeta;
