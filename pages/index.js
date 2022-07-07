/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Head from "next/head";
import ProjectList from "../components/ProjectList";

const Home = ({ homeData, allWorks }) => {
  return (
    <>
      <Head>
        <title>{homeData.acf.seo_title}</title>
        <meta name="description" content={homeData.acf.seo_description}></meta>
      </Head>

      <div id="main-content">
        <div className="container mx-auto flex items-center justify-around pt-16">
          <div>
            <h1 className="text-6xl">{homeData.acf.intro}</h1>
            <p className="pt-4">{homeData.acf.short_about}</p>
          </div>

          <img
            id="bio-img-home"
            className="w-96 shadow-2xl"
            src={homeData.acf.owner_image.url}
            alt={homeData.acf.owner_image.alt}
          />
        </div>

        <section id="work" className="pt-8">
          <h2 className="text-center text-4xl">Work</h2>
          <ProjectList data={allWorks} />
        </section>
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const responseHome = await axios.get(
    "https://staging6.ljferrand.com/wp-json/wp/v2/pages/281?_fields=acf&acf_format=standard"
  );
  const homeData = responseHome.data;

  const responseAllWork = await axios.get(
    `https://staging6.ljferrand.com/wp-json/wp/v2/lj-project?_fields=id,slug,acf&acf_format=standard`
  );
  const allWorks = responseAllWork.data;

  return {
    props: { homeData, allWorks },
  };
}
