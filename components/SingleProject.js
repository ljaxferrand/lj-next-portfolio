import Cover from "./Cover";
import Pagination from "./Pagination";

const SingleProject = ({ workInfo, projectPagination }) => {
  return (
    <div id="main-content">
      <Cover
        title={workInfo.acf.project_title}
        description={workInfo.acf.excerpt}
      />
      <div
        id="post-content"
        dangerouslySetInnerHTML={{ __html: workInfo.acf.project_content }}
      ></div>
      <Pagination
        current={workInfo.id}
        prev={workInfo.previous}
        next={workInfo.next}
        counter={projectPagination}
      />
    </div>
  );
};

export default SingleProject;
