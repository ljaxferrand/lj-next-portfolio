export const fadeIn = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: [0, 0.25, 0.4, 1],
    transition: { type: "tween", ease: "easeIn", delay: 0.6, duration: 0.8 },
  },
};

// export const quickSlide = {
//   initial: {
//     x: 250,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: { delay: 0.35, duration: 0.4 },
//   },
// };

export const errorShake = {
  animate: {
    x: [0, -4],
    transition: { yoyo: 3, stiffness: 1000, duration: 0.2 },
  },
};

export const successBounce = {
  animate: {
    y: [0, 4],
    transition: { yoyo: 3, stiffness: 1000, duration: 0.2 },
  },
};

export const buttonPress = {
  hover: {
    scale: 1.2,
    rotate: 5,
  },
  tap: {
    scale: 0.85,
  },
  initial: {
    scale: 1,
  },
};

export const buttonNoTurn = {
  hover: {
    scale: 1.05,
  },
  tap: {
    scale: 0.9,
  },
  initial: {
    scale: 1,
  },
};
