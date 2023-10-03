export const fadeIn = (direction: string, delay: number) => {
  const setYDirection = (dir: string) => {
    if (dir === 'up') return 80;
    if (dir === 'down') return -80;
    return 0;
  };

  const setXDirection = (dir: string) => {
    if (dir === 'left') return 80;
    if (dir === 'right') return -80;
    return 0;
  };

  return {
    hidden: {
      y: setYDirection(direction),
      opacity: 0,
      x: setXDirection(direction),
      transition: {
        type: 'tween',
        duration: 1.5,
        delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.4,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
