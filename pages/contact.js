import { getPageData } from "../utilities/dataFetch";
import Head from "next/head";
import Cover from "../components/Cover";
import Cf7FormWrapper from "../components/form/Cf7FormWrapper";
import Form from "../components/form/Form";

const Contact = ({ contactData }) => {
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

        <Cf7FormWrapper siteUrl="https://staging6.ljferrand.com" formId="339">
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

  return {
    props: { contactData },
  };
}
