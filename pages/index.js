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
        <div className="container mx-auto p-4 lg:pt-12 flex flex-col lg:flex-row">
          <div className="mx-auto pb-4 max-w-xl">
            <h1 className="text-3xl s:text-5xl md:text-6xl">
              {homeData.acf.intro}
            </h1>
            <p>{homeData.acf.short_about}</p>
          </div>

          <img
            id="bio-img-home"
            className="mx-auto s:max-w-sm shadow-2xl"
            src={homeData.acf.owner_image.url}
            alt={homeData.acf.owner_image.alt}
          />
        </div>

        <section id="work">
          <h2 className="text-center text-3xl s:text-4xl md:text-5xl py-12 px-4">
            Recent Work
          </h2>
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
