/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const ProjectList = ({ data }) => {
  return (
    <ul className="container mx-auto">
      {data.map((project) => (
        <li key={project.id} className="lg:flex justify-center group py-8">
          <Link href={`/work/?id=${project.id}`} as={`/work/${project.id}`}>
            <a className="flex flex-col items-center lg:items-start lg:flex-row gap-6">
              <div className="w-96 h-96 shadow-2xl rounded-md overflow-hidden lg:group-odd:order-2">
                <img
                  className="w-96 h-96 object-cover"
                  src={project.acf.project_featured_img.url}
                  alt={
                    project.acf.project_featured_img.alt ||
                    project.acf.project_featured_img.filename
                  }
                />
              </div>

              <div className="relative lg:py-8  max-w-md">
                <h2>{project.acf.project_title}</h2>
                <h3 className="absolute ">{project.acf.type}</h3>
                <p className="">{project.acf.excerpt}</p>
              </div>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
