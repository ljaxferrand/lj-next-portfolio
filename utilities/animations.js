export const fadeIn = {
  initial: {
    y: -15,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    type: "tween",
    ease: "easeOut",
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
    type: "tween",
    ease: "easeOut",
    transition: { delay: 0.2, duration: 0.6 },
  },
};

export const inView = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.8,
  },
};
