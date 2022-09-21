import { useEffect, useState } from 'react';
import anime from 'animejs';

export const useHomeAnimations = () => {
  useEffect(() => {
    const mainAnimation = anime.timeline();
    mainAnimation.add({
      targets: '#mainMask',
      delay: 500,
      duration: 5000,
      opacity: [1, 0],
      changeBegin: () => setAnimationBegin(true),
    });
  }, []);

  const [animationBegin, setAnimationBegin] = useState(false);

  const defaultStyle = {
    transition: `transform ${1000}ms ease-in-out`,
    transform: `translate(0px, -200px)`,
  };

  const transitionStyles = {
    entering: { transform: `translate(0px, -200px)` },
    entered: { transform: `translate(0px, 0px)` },
    exiting: { transform: `translate(0px, 0px)` },
    exited: { transform: `translate(0px, -200px)` },
  };

  return {
    defaultStyle,
    animationBegin,
    transitionStyles,
  };
};
