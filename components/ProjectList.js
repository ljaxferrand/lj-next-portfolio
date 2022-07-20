/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { fadeIn, inView, quickSlide } from "../utilities/animations";
import Link from "next/link";

const ProjectList = ({ data }) => {
  return (
    <ul className="md:container md:mx-auto">
      {data.map((project) => (
        <motion.li
          key={project.id}
          initial={fadeIn.initial}
          whileInView={inView}
          viewport={{ once: true }}
          className="pt-24 py-8 lg:flex justify-center group"
        >
          <div className="flex flex-col items-center lg:items-start lg:flex-row gap-12">
            <div className="w-full s:w-96 s:h-96 shadow-2xl s:rounded-md overflow-hidden lg:group-odd:order-2 group-even:bg-secondaryAccent group-odd:bg-primaryAccent">
              <motion.img
                initial={quickSlide.initial}
                whileInView={quickSlide.animate}
                viewport={{ once: true }}
                className="w-full s:w-96 s:h-96 object-cover"
                src={project.acf.project_featured_img.url}
                alt={
                  project.acf.project_featured_img.alt ||
                  project.acf.project_featured_img.filename
                }
              />
            </div>

            <div className="relative max-w-md px-4 lg:py-8 lg:mt-8 ">
              <h2>{project.acf.project_title}</h2>
              <h3 className="absolute -top-4 lg:top-4 left-6">
                {project.acf.type}
              </h3>
              <p>{project.acf.excerpt}</p>

              <Link
                href={`/work/?id=${project.id}`}
                as={`/work/${project.id}`}
                passHref={true}
              >
                <a className="font-bold bg-primaryAccent py-2 px-4 rounded-full text-offWhite shadow-lg">
                  View Project
                </a>
              </Link>
            </div>
          </div>
        </motion.li>
      ))}
    </ul>
  );
};

export default ProjectList;
