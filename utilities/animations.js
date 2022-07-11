export const fadeIn = {
  initial: {
    y: -25,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export const quickSlide = {
  initial: {
    x: 250,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.35, duration: 0.4 },
  },
};

export const inView = {
  opacity: 1,
  x: 0,
  transition: {
    duration: 0.8,
  },
};

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
    scale: 1.1,
    rotate: 5,
  },
  tap: {
    scale: 0.9,
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
