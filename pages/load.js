import { motion } from "framer-motion";

const Load = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.2,
      },
    },
  };

  const pathChild = {
    hidden: { opacity: 0, pathLength: 0 },
    show: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 2 },
    },
  };

  return (
    <div>
      <motion.svg
        variants={container}
        initial="hidden"
        animate="show"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 646 521"
      >
        <motion.path
          variants={pathChild}
          stroke="black"
          strokeWidth={12}
          strokeLinecap="round"
          d="M 301 452 L 266 392 ,
          M 301 452 L 265 515,
          M 266 392 L 195 392,
          M 301 452 L 158 452,
          M 265 515 L 43 515"
        />

        <motion.path
          variants={pathChild}
          stroke="black"
          strokeWidth={12}
          strokeLinecap="round"
          d="M 42 514 L 6 454,
          M 158 452 L 323 184,
          M 43 515 L 286 124, 
          M 6 454 L 286 6"
        />
        <motion.path
          variants={pathChild}
          stroke="black"
          strokeWidth={12}
          strokeLinecap="round"
          d="M 288 6 L 361 6,
          M 286 124 L 451 389,
          M 288 9 L 527 392,
          M 361 6 L 640 452"
        />
        <motion.path
          variants={pathChild}
          stroke="black"
          strokeWidth={12}
          strokeLinecap="round"
          d="M 640 452 L 603 515,
          M 603 515 L 378 515,
          M 636 452 L 418 452,
          M 527 392 L 453 392"
        />
        <motion.path
          variants={pathChild}
          stroke="black"
          strokeWidth={12}
          strokeLinecap="round"
          d="M 435 392 L 453 392,
          M 435 392 L 398 361
          M 418 452 L 378 515,
          M 378 515 L 323 428,
          M 418 452 L 361 361,
          M 398 361 L 361 361,
          M 361 361 L 323 428"
        />
      </motion.svg>
    </div>
  );
};

export default Load;