import { useEffect } from 'react';
import anime from 'animejs';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAnimateMethodBoxes = () => {
  useEffect(() => {
    const boxAnimation1 = anime.timeline();
    const boxAnimation2 = anime.timeline();

    boxAnimation1.add({
      targets: '#method_box1',
      easing: 'linear',
      rotate: [-230, 0],
      duration: 200000,
      loop: true,
      changeComplete: (anim) => setTimeout(() => anim.restart()),
    });

    boxAnimation2.add({
      targets: '#method_box2',
      easing: 'linear',
      rotate: [170, -360],
      duration: 200000,
      loop: true,
      changeComplete: (anim) => setTimeout(() => anim.restart()),
    });
  }, []);
};
