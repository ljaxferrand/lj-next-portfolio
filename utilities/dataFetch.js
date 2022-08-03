import axios from "axios";

// Gets WP REST API data for single pages
// Use Page ID from WordPress backend
export async function getPageData(pageID) {
  const res = await axios.get(
    `${process.env.CMS_URL}/wp-json/wp/v2/pages/${pageID}?_fields=acf&acf_format=standard`
  );
  const pageData = res.data;
  return pageData;
}

// Gets WP REST API data for a Custom Post Type
// Use CPT slug WordPress backend
export async function getPostTypeData(cptName) {
  const res = await axios.get(
    `${process.env.CMS_URL}/wp-json/wp/v2/${cptName}?_fields=id,slug,acf&acf_format=standard`
  );

  const cptData = res.data;
  return cptData;
}
