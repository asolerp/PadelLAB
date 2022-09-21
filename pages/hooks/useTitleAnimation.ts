export const useTitleAnimation = () => {
  const defaultStyle = {
    transition: `transform ${1000}ms ease-in-out`,
    transform: `translate(0px, 500px)`,
  };

  const transitionStyles = {
    entering: { transform: `translate(0px, 500px)` },
    entered: { transform: `translate(0px, 0px)` },
    exiting: { transform: `translate(0px, 0px)` },
    exited: { transform: `translate(0px, 500px)` },
  };

  return {
    defaultStyle,
    transitionStyles,
  };
};
