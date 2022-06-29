/* eslint-disable @next/next/no-img-element */
const ProjectList = ({ data }) => {
  return (
    <ul className="container mx-auto">
      {data.map((project) => (
        <li
          key={project.id}
          className="mx-auto lg:flex justify-center gap-4 p-4 m-4"
        >
          <div className="shadow-2xl rounded-md overflow-hidden ">
            <img
              className="w-96 h-96 object-cover"
              src={project.acf.project_images.project_image_1.url}
              alt={
                project.acf.project_images.project_image_1.alt ||
                project.acf.project_images.project_image_1.filename
              }
            />
          </div>

          <div className="relative ml-6 pt-24 pl-8 pr-4 max-w-md">
            <h2>{project.acf.project_title}</h2>
            <h3 className="absolute top-20 pl-8">{project.acf.type}</h3>
            <p className="pt-4">{project.acf.excerpt}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
