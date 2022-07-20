import dynamic from "next/dynamic";
import Cover from "./Cover";
import Pagination from "./Pagination";

const ScrollSpyNav = dynamic(() => import("react-scrollspy-nav"), {
  ssr: false,
});

const SingleProject = ({ workInfo, projectPagination }) => {
  // ScrollSpy ID array for required sections
  const sectionIDs = ["section_1", "section_2", "section_3", "section_4"];

  // Add the optional section fields to the ScrollSpy array if they exsist
  workInfo.acf.project_content_5 && sectionIDs.push("section_5");
  workInfo.acf.project_content_6 && sectionIDs.push("section_6");

  return (
    <div id="main-content">
      <Cover
        title={workInfo.acf.project_title}
        description={workInfo.acf.excerpt}
      />
      {/* Required Project Sections */}

      <div className="container mx-auto relative lg:grid grid-cols-5 gap-2">
        <div className="hidden lg:sticky top-0 left-6 lg:inline col-start pt-2">
          <ScrollSpyNav
            scrollTargetIds={sectionIDs}
            offset={-100}
            scrollDuration="500"
            activeNavClass="scrollspy-is-active"
          >
            <p>Table of Contents</p>
            <ul id="scrollspy">
              <li>
                <a href="#section_1">{workInfo.acf.content_heading_1}</a>
              </li>
              <li>
                <a href="#section_2">{workInfo.acf.content_heading_2}</a>
              </li>
              <li>
                <a href="#section_3">{workInfo.acf.content_heading_3}</a>
              </li>
              <li>
                <a href="#section_4">{workInfo.acf.content_heading_4}</a>
              </li>
              {workInfo.acf.project_content_5 && (
                <li>
                  <a href="#section_5">{workInfo.acf.content_heading_5}</a>
                </li>
              )}
              {workInfo.acf.project_content_6 && (
                <li>
                  <a href="#section_6">{workInfo.acf.content_heading_6}</a>
                </li>
              )}
            </ul>
          </ScrollSpyNav>
        </div>

        <div className="col-span-3">
          <section id="section_1">
            <h2 className="text-center">{workInfo.acf.content_heading_1}</h2>
            <div
              className="post-content"
              dangerouslySetInnerHTML={{
                __html: workInfo.acf.project_content_1,
              }}
            ></div>
          </section>

          <section id="section_2">
            <h2 className="text-center">{workInfo.acf.content_heading_2}</h2>
            <div
              className="post-content"
              dangerouslySetInnerHTML={{
                __html: workInfo.acf.project_content_2,
              }}
            ></div>
          </section>

          <section id="section_3">
            <h2 className="text-center">{workInfo.acf.content_heading_3}</h2>
            <div
              className="post-content"
              dangerouslySetInnerHTML={{
                __html: workInfo.acf.project_content_3,
              }}
            ></div>
          </section>

          <section id="section_4">
            <h2 className="text-center">{workInfo.acf.content_heading_4}</h2>
            <div
              className="post-content"
              dangerouslySetInnerHTML={{
                __html: workInfo.acf.project_content_4,
              }}
            ></div>
          </section>

          {/* Optional Project Sections */}
          {workInfo.acf.project_content_5 && (
            <section id="section_5">
              <h2 className="text-center">{workInfo.acf.content_heading_5}</h2>
              <div
                className="post-content"
                dangerouslySetInnerHTML={{
                  __html: workInfo.acf.project_content_5,
                }}
              ></div>
            </section>
          )}
          {workInfo.acf.project_content_6 && (
            <section id="section_6">
              <h2 className="text-center">{workInfo.acf.content_heading_6}</h2>
              <div
                className="post-content"
                dangerouslySetInnerHTML={{
                  __html: workInfo.acf.project_content_6,
                }}
              ></div>
            </section>
          )}
        </div>
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
