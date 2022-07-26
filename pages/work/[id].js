import axios from "axios";
import SingleProject from "../../components/SingleProject";

const WorkPage = ({ workInfo, posts }) => {
  return <SingleProject workInfo={workInfo} projectPagination={posts} />;
};

export default WorkPage;

export async function getStaticProps({ params }) {
  const responseSingleWork = await axios.get(
    `https://staging6.ljferrand.com/wp-json/wp/v2/lj-project/${params.id}?_fields=id,slug,next,previous,acf&acf_format=standard`
  );

  const pagination = await axios.get(
    "https://staging6.ljferrand.com/wp-json/wp/v2/lj-project?_fields=id,slug"
  );

  return {
    props: {
      workInfo: responseSingleWork.data,
      posts: pagination.data,
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

  return {
    paths,
    fallback: false,
  };
}
