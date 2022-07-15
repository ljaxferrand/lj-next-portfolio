import axios from "axios";
import Cover from "../components/Cover";

const About = ({ aboutData }) => {
  return (
    <div id="main-content">
      <Cover
        title={aboutData.acf.title}
        description={"Tinker Coder Creative Try"}
      />

      <div
        className="post-content"
        dangerouslySetInnerHTML={{
          __html: aboutData.acf.bio_text,
        }}
      ></div>
    </div>
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
