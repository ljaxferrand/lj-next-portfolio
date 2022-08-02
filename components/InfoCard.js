import Tools from "./icons/Tools";
import LinkIcon from "./icons/LinkIcon";
import ProjectType from "./icons/ProjectType";

const InfoCard = ({ type, tools, liveLink, gitLink }) => {
  return (
    <section className="info-block container mx-auto md:pb-8 flex flex-col md:flex-row justify-evenly items-center content-center text-center">
      <div className="p-4 mb-12 md:mb-0 max-w-md md:max-w-xs md:w-1/3 h-60 flex flex-col content-start">
        <div className="self-center">
          <ProjectType />
        </div>
        <h3 className="text-center font-medium">Project Type</h3>
        <p>{type}</p>
      </div>
      <div className="p-4 mb-12 md:mb-0 max-w-md md:max-w-xs md:w-1/3 h-60 flex flex-col content-start">
        <div className="self-center">
          <Tools />
        </div>
        <h3 className="text-center font-medium">Tools</h3>
        <p>{tools}</p>
      </div>
      <div className="p-4 mb-12 md:mb-0 max-w-md md:max-w-xs md:w-1/3 h-60 flex flex-col content-start">
        <div className="self-center">
          <LinkIcon />
        </div>

        {(liveLink || gitLink) && (
          <>
            <h3 className="font-medium">Links</h3>
            {liveLink ? (
              <p className="pb-0">
                View <a href={liveLink}>Live Site</a>
              </p>
            ) : (
              <div className="h-11"></div>
            )}

            {gitLink ? (
              <p className="pt-0">
                View on <a href={gitLink}>GitHub</a>
              </p>
            ) : (
              <div className="h-11"></div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default InfoCard;
