import Link from "next/link";
import { motion } from "framer-motion";
import { buttonNoTurn } from "../utilities/animations";
import Github from "../components/socials/Github";
import LinkedIn from "../components/socials/LinkedIn";
import Email from "../components/socials/Email";

const Footer = ({ text, btnText }) => {
  // Dates for Copyright
  const firstYear = new Date("Nov 20, 21 00:20:18");
  const today = new Date();

  return (
    <footer className="bg-darkestAccent pb-14 sm:pb-0">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col items-center gap-4 p-6 bg-tertiaryAccent rounded-lg shadow-lg sm:flex-row sm:justify-between">
            <strong className="text-xl text-primaryDarker sm:text-xl">
              {text}
            </strong>

            <motion.div
              variants={buttonNoTurn}
              whileHover={buttonNoTurn.hover}
              whileTap={buttonNoTurn.tap}
            >
              <Link href="/contact" passHref={true}>
                <a className="inline-flex items-center px-8 py-3 text-primaryDarker bg-white border border-white rounded-full hover:bg-transparent  active:bg-white/90 focus:outline-none focus:ring">
                  <span className="text-sm font-medium">{btnText}</span>

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

          <div>
            <div className="flex flex-nowrap justify-evenly">
              <Email />
              <Github />
              <LinkedIn />
            </div>
            <p className="ml-4 mt-8 sm:mt-0 text-sm text-center text-gray-400 lg:text-right">
              Copyright &copy; {firstYear.getFullYear()} - {today.getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
