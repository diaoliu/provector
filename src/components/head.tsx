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
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@provectorapp" />
    <meta name="twitter:creator" content="@provectorapp" />
    <meta name="twitter:title" content={site.title} />
    <meta name="twitter:description" content={site.description} />
    <meta name="twitter:image" content={site.domain + "/social-cover.png"} />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </>
);

export default HeadMeta;
