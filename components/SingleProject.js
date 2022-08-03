/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import dynamic from "next/dynamic";
import Cover from "./Cover";
import Pagination from "./Pagination";
import InfoCard from "./InfoCard";

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
    <>
      <Head>
        <title>{workInfo.acf.seo_title}</title>
        <meta name="description" content={workInfo.acf.seo_description}></meta>
      </Head>
      <article id="main-content">
        <Cover
          title={workInfo.acf.project_title}
          description={workInfo.acf.excerpt}
        />

        <InfoCard
          type={workInfo.acf.type}
          tools={workInfo.acf.tools}
          liveLink={workInfo.acf.live_site_link}
          gitLink={workInfo.acf.github_link}
        />

        <div className="relative container mx-auto lg:grid grid-cols-12">
          <div className="hidden lg:inline lg:sticky top-24 left-0 pl-10 pt-4 w-52 h-fit col-start-1 col-end-3">
            <ScrollSpyNav
              scrollTargetIds={sectionIDs}
              offset={858}
              scrollDuration="200"
              activeNavClass="scrollspy-is-active"
              headerBackground="true"
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

          <div className="container mx-auto col-start-3 col-end-11">
            <section id="section_1">
              <h2 className="text-center">{workInfo.acf.content_heading_1}</h2>
              <div
                className="post-content"
                dangerouslySetInnerHTML={{
                  __html: workInfo.acf.project_content_1,
                }}
              ></div>
              {/* section1_image */}

              {workInfo.acf.section1_image && (
                <img
                  className="mx-auto w-full shadow-2xl rounded-md mb-8"
                  sizes="(min-width: 1280px) 853px, (min-width: 1040px) 683px, (min-width: 780px) 768px, (min-width: 640px) 640px, (min-width: 500px) 485px, (min-width: 400px) 320px, calc(25vw + 225px)"
                  srcSet={`${workInfo.acf.section1_image.url}&w=320 320w, ${workInfo.acf.section1_image.url}&w=460 460w, ${workInfo.acf.section1_image.url}&w=683 683w, ${workInfo.acf.section1_image.url}&w=853 853w, ${workInfo.acf.section1_image.url}&w=1600 1600w`}
                  src={workInfo.acf.section1_image.url}
                  alt={
                    workInfo.acf.section1_image.alt ||
                    workInfo.acf.section1_image.filename
                  }
                />
              )}
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
                <h2 className="text-center">
                  {workInfo.acf.content_heading_5}
                </h2>
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
                <h2 className="text-center">
                  {workInfo.acf.content_heading_6}
                </h2>
                <div
                  className="post-content"
                  dangerouslySetInnerHTML={{
                    __html: workInfo.acf.project_content_6,
                  }}
                ></div>
              </section>
            )}

            <Pagination
              className="col-span-3"
              current={workInfo.id}
              prev={workInfo.previous}
              next={workInfo.next}
              counter={projectPagination}
            />
          </div>
        </div>
      </article>
    </>
  );
};

export default SingleProject;
