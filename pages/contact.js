import Head from "next/head";
import axios from "axios";
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
  const responseContact = await axios.get(
    "https://staging6.ljferrand.com/wp-json/wp/v2/pages/373?_fields=acf&acf_format=standard"
  );
  const contactData = responseContact.data;

  return {
    props: { contactData },
  };
}
