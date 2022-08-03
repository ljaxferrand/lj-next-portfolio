import { getPageData } from "../utilities/dataFetch";
import Head from "next/head";
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
  // Get home page data, page ID from WordPress backend
  const aboutData = await getPageData(346);

  return {
    props: { aboutData },
  };
}
