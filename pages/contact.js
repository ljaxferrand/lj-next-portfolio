import { getPageData } from "../utilities/dataFetch";
import Head from "next/head";
import Cover from "../components/Cover";
import Cf7FormWrapper from "../components/form/Cf7FormWrapper";
import Form from "../components/form/Form";

const Contact = ({ contactData, url }) => {
  return (
    <>
      <Head>
        <title>{contactData.acf.seo_title}</title>
        <meta
          name="description"
          content={contactData.acf.seo_description}
        ></meta>
      </Head>
      <div id="main-content">
        <Cover
          title={contactData.acf.title}
          description={contactData.acf.contact_text}
        />

        {/* Form ID from WordPress backend, contact form plugin */}
        <Cf7FormWrapper siteUrl={url} formId="339">
          <Form />
        </Cf7FormWrapper>
      </div>
    </>
  );
};
export default Contact;

export async function getStaticProps() {
  // Get home page data, page ID from WordPress backend
  const contactData = await getPageData(373);

  const url = process.env.CMS_URL;

  return {
    props: { contactData, url },
  };
}
