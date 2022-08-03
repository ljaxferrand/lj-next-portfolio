import preval from "next-plugin-preval";

// Layout children (like header, footer) use data pulled from the CMS, but Next.js currently doesn't allow getStaticProps for non-page components.
// This plugin fetches this global data for now.

async function getGlobalData() {
  const res = await fetch(
    `${process.env.CMS_URL}/wp-json/wp/v2/pages/331?_fields=acf&acf_format=standard`
  );

  const globalData = res.json();

  return globalData;
}

export default preval(getGlobalData());
