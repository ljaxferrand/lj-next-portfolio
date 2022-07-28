import Head from "next/head";
import axios from "axios";
import Cover from "../components/Cover";

const About = ({ aboutData }) => {
  return (
    <>
      <Head>
        <title>{aboutData.acf.seo_title}</title>
        <meta name="description" content={aboutData.acf.seo_description}></meta>
      </Head>
      <div id="main-content">
        <Cover
          title={aboutData.acf.title}
          description={aboutData.acf.about_description}
        />

        <div
          className="post-content"
          dangerouslySetInnerHTML={{
            __html: aboutData.acf.bio_text,
          }}
        ></div>
      </div>
    </>
  );
};
export default About;

export async function getStaticProps() {
  const responseAbout = await axios.get(
    "https://staging6.ljferrand.com/wp-json/wp/v2/pages/346?_fields=acf&acf_format=standard"
  );
  const aboutData = responseAbout.data;

  return {
    props: { aboutData },
  };
}
