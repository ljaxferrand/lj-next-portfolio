export const fadeIn = {
  initial: {
    y: -15,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    type: "tween",
    ease: "easeIn",
    transition: { duration: 0.8 },
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
    transition: { type: "tween", ease: "backInOut", delay: 0.3, duration: 0.9 },
  },
};

export const inView = {
  opacity: 1,
  y: 0,
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
