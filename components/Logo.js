import Link from "next/link";
import { motion } from "framer-motion";
import { buttonPress } from "../utilities/animations";

const Logo = () => {
  return (
    <Link href="/">
      <motion.a
        whileTap={buttonPress.tap}
        whileHover={buttonPress.hover}
        initial={buttonPress.initial}
      >
        <svg
          className="w-16 h-16 m-4 stroke-offBlack dark:stroke-offWhite"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 646 521"
        >
          <path
            strokeWidth="16"
            strokeLinecap="round"
            d="m301 452-35-60m35 60-36 63m1-123h-71m106 60H158m107 63H43m-1-1L6 454m152-2 165-268M43 515l243-391M6 454 286 6m2 0h73m-75 118 165 265M288 9l239 383M361 6l279 446m0 0-37 63m0 0H378m258-63H418m109-60h-74m-18 0h18m-18 0-37-31m20 91-40 63m0 0-55-87m95 24-57-91m37 0h-37m0 0-38 67"
          />
        </svg>
      </motion.a>
    </Link>
  );
};

export default Logo;
