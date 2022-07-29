import Link from "next/link";
import { motion } from "framer-motion";
import { buttonNoTurn } from "../utilities/animations";
import Github from "../components/socials/Github";
import LinkedIn from "../components/socials/LinkedIn";
import Email from "../components/socials/Email";

const Footer = ({ data }) => {
  // Dates for Copyright
  const firstYear = new Date("Nov 20, 21 00:20:18");
  const today = new Date();

  return (
    <footer className="bg-darkestAccent pb-12 sm:pb-0">
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between gap-x-8">
          <div className="flex flex-col items-center gap-4 p-6 mb-4 sm:mb-0 sm:ml-4 bg-tertiaryAccent rounded-lg shadow-lg sm:flex-row sm:justify-between">
            <strong className="text-xl text-primaryDarker sm:text-xl">
              {data.acf.footer_cta}
            </strong>

            <motion.div
              variants={buttonNoTurn}
              whileHover={buttonNoTurn.hover}
              whileTap={buttonNoTurn.tap}
            >
              <Link href="/contact" passHref={true}>
                <a className="inline-flex items-center px-8 py-3 text-primaryDarker bg-white border border-white rounded-full hover:bg-transparent  active:bg-white/90 focus:outline-none focus:ring">
                  <span className="text-sm font-medium">
                    {data.acf.footer_cta_btn}
                  </span>

                  <svg
                    className="w-5 h-5 ml-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-nowrap justify-evenly">
              <a
                className="p-4"
                href={`mailto:${data.acf.email}?subject=Reaching%20out%20via%20your%20website%20re%3A&body=Hey%20LJ%2C%20%0A%0AI%27d%20love%20to%20chat%20about%20...`}
              >
                <Email />
              </a>
              <a
                className="p-4"
                href={data.acf.social_link_2}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile – link opens in a new tab."
              >
                <Github />
              </a>
              <a
                className="p-4"
                href={data.acf.social_link_1}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile – link opens in a new tab."
              >
                <LinkedIn />
              </a>
            </div>
            <p className="mx-4 sm:mt-0 text-sm text-center text-gray-400 lg:text-right">
              Copyright &copy; {firstYear.getFullYear()} - {today.getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
