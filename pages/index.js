/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Head from "next/head";

const Home = ({ homeData }) => {
  return (
    <>
      <Head>
        <title>{homeData.acf.seo_title}</title>
        <meta name="description" content={homeData.acf.seo_description}></meta>
      </Head>
      <div className="container mx-auto flex items-center justify-around pt-16">
        <div>
          <h1 className="text-6xl">{homeData.acf.intro}</h1>
          <p>{homeData.acf.short_about}</p>
        </div>

        <img
          className="w-96  rounded-full"
          src={homeData.acf.owner_image.url}
          alt={homeData.acf.owner_image.alt}
        />
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

  // const responseAllWork = await axios.get(
  //   `https://`
  // );
  // const allWorks = responseAllWork.data;

  return {
    props: { homeData },
  };
}
