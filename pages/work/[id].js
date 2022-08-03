import { getPostTypeData, getSingleCPTData } from "../../utilities/dataFetch";
import SingleProject from "../../components/SingleProject";

const WorkPage = ({ workInfo, posts }) => {
  return <SingleProject workInfo={workInfo} projectPagination={posts} />;
};

export default WorkPage;

export async function getStaticProps({ params }) {
  const responseSingleWork = await getSingleCPTData("lj-project", params.id);

  const pagination = await getPostTypeData("lj-project");

  return {
    props: {
      workInfo: responseSingleWork,
      posts: pagination,
    },
  };
}

export async function getStaticPaths() {
  const worksRes = await getPostTypeData("lj-project");

  const paths = worksRes.map((work) => {
    return { params: { id: work.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}
