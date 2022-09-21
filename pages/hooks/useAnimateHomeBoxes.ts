import { useEffect } from 'react';
import anime from 'animejs';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAnimateHomeBoxes = () => {
  useEffect(() => {
    const boxAnimation1 = anime.timeline();
    const boxAnimation2 = anime.timeline();

    boxAnimation1.add({
      targets: '#box1',
      easing: 'linear',
      rotate: [-360, 0],
      duration: 300000,
      loop: true,
      changeComplete: (anim) => setTimeout(() => anim.restart()),
    });

    boxAnimation2.add({
      targets: '#box2',
      easing: 'linear',
      rotate: [0, -360],
      duration: 300000,
      loop: true,
      changeComplete: (anim) => setTimeout(() => anim.restart()),
    });
  }, []);
};
