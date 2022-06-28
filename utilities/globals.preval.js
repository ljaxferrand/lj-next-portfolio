import preval from "next-plugin-preval";

async function getGlobalData() {
  const res = await fetch(
    `https://staging6.ljferrand.com/wp-json/wp/v2/pages/331?_fields=acf&acf_format=standard`
  );

  const globalData = res.json();

  return globalData;
}

export default preval(getGlobalData());
