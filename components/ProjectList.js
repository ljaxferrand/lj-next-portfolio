/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { fadeIn, inView, quickSlide } from "../utilities/animations";
import Link from "next/link";

const ProjectList = ({ data }) => {
  return (
    <ul className="container mx-auto">
      {data.map((project) => (
        <motion.li
          key={project.id}
          initial={fadeIn.initial}
          whileInView={inView}
          viewport={{ once: true }}
          className="lg:flex justify-center group py-8"
        >
          <Link href={`/work/?id=${project.id}`} as={`/work/${project.id}`}>
            <a className="flex flex-col items-center lg:items-start lg:flex-row gap-12">
              <div className="w-96 h-96 shadow-2xl rounded-md overflow-hidden lg:group-odd:order-2 group-even:bg-secondaryAccent group-odd:bg-primaryAccent">
                <motion.img
                  initial={quickSlide.initial}
                  whileInView={quickSlide.animate}
                  viewport={{ once: true }}
                  className="w-96 h-96 object-cover group-even:bg-secondaryAccent group-odd:bg-primaryAccent"
                  src={project.acf.project_featured_img.url}
                  alt={
                    project.acf.project_featured_img.alt ||
                    project.acf.project_featured_img.filename
                  }
                />
              </div>

              <div className="relative max-w-md lg:py-8 lg:mt-8 ">
                <h2>{project.acf.project_title}</h2>
                <h3 className="absolute -top-4 lg:top-4 left-6">
                  {project.acf.type}
                </h3>
                <p className="">{project.acf.excerpt}</p>
              </div>
            </a>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
};

export default ProjectList;
