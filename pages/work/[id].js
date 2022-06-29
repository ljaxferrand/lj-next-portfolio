import axios from "axios";
import SingleProject from "../../components/SingleProject";

const WorkPage = ({ workInfo }) => {
  return (
    <div id="main-content">
      <SingleProject workInfo={workInfo} />
    </div>
  );
};

export default WorkPage;

export async function getStaticProps({ params }) {
  const responseSingleWork = await axios.get(
    `https://staging6.ljferrand.com/wp-json/wp/v2/lj-project/${params.id}?_fields=id,slug,acf&acf_format=standard`
  );

  return {
    props: {
      workInfo: responseSingleWork.data,
    },
  };
}

export async function getStaticPaths() {
  const worksRes = await axios.get(
    "https://staging6.ljferrand.com/wp-json/wp/v2/lj-project?_fields=id,slug"
  );

  const paths = worksRes.data.map((work) => {
    return { params: { id: work.id.toString() } };
  });

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}
