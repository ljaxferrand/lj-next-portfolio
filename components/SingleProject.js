import Cover from "./Cover";
import Pagination from "./Pagination";

const SingleProject = ({ workInfo, projectPagination }) => {
  return (
    <div id="main-content">
      <Cover
        title={workInfo.acf.project_title}
        description={workInfo.acf.excerpt}
      />
      {/* Required Project Sections */}
      <div className="container mx-auto">
        <h2 className="text-center">{workInfo.acf.content_heading_1}</h2>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: workInfo.acf.project_content_1 }}
        ></div>

        <h2 className="text-center">{workInfo.acf.content_heading_2}</h2>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: workInfo.acf.project_content_2 }}
        ></div>

        <h2 className="text-center">{workInfo.acf.content_heading_3}</h2>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: workInfo.acf.project_content_3 }}
        ></div>

        <h2 className="text-center">{workInfo.acf.content_heading_4}</h2>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: workInfo.acf.project_content_4 }}
        ></div>

        {/* Optional Project Sections */}
        {workInfo.acf.project_content_5 && (
          <>
            <h2 className="text-center">{workInfo.acf.content_heading_5}</h2>
            <div
              className="post-content"
              dangerouslySetInnerHTML={{
                __html: workInfo.acf.project_content_5,
              }}
            ></div>
          </>
        )}
        {workInfo.acf.project_content_6 && (
          <>
            <h2 className="text-center">{workInfo.acf.content_heading_6}</h2>
            <div
              className="post-content"
              dangerouslySetInnerHTML={{
                __html: workInfo.acf.project_content_6,
              }}
            ></div>
          </>
        )}
      </div>
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
