import Link from "next/link";
import { motion } from "framer-motion";
import { buttonNoTurn } from "../utilities/animations";

const Pagination = ({ next, prev, counter, current }) => {
  // to display current page number
  const getCurrentPage = (element) => {
    if (element.id === current) {
      return element.id;
    }
  };

  return (
    <div className="pb-4 flex items-center justify-center space-x-3">
      {next ? (
        <Link
          href={`/work/?id=${next.id}` || null}
          as={`/work/${next.id}`}
          passHref
        >
          <motion.a
            className="inline-flex items-center justify-center w-8 h-8 border border-offBlack dark:border-offWhite rounded"
            whileTap={buttonNoTurn.tap}
            whileHover={buttonNoTurn.hover}
            initial={buttonNoTurn.initial}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>
        </Link>
      ) : (
        <span className="w-8"></span>
      )}

      <p className="text-xs">
        {counter.findIndex(getCurrentPage) + 1}
        <span className="mx-0.25">/</span>
        {counter.length}
      </p>

      {prev ? (
        <Link
          href={`/work/?id=${prev.id}` || null}
          as={`/work/${prev.id}`}
          passHref
        >
          <motion.a
            className="inline-flex items-center justify-center w-8 h-8 border border-offBlack dark:border-offWhite rounded"
            whileTap={buttonNoTurn.tap}
            whileHover={buttonNoTurn.hover}
            initial={buttonNoTurn.initial}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>
        </Link>
      ) : (
        <span className="w-8"></span>
      )}
    </div>
  );
};

export default Pagination;
