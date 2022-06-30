const SingleProject = ({ workInfo }) => {
  return (
    <div id="main-content">
      <h1>{workInfo.acf.project_title}</h1>
      <h2>{workInfo.acf.type}</h2>
      <p>{workInfo.acf.excerpt}</p>

      {/* Styles for this are set via "./styles/globals.css" */}
      <div
        id="post-content"
        dangerouslySetInnerHTML={{ __html: workInfo.acf.project_content }}
      ></div>
    </div>
  );
};

export default SingleProject;
