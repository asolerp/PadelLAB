import { useEffect } from 'react';
import anime from 'animejs';

export const useAnimateHomeTitle = () => {
  useEffect(() => {
    // anime
    //   .timeline({ loop: true })
    //   .add({
    //     targets: '.ml4 .letters-1',
    //     translateX: [40, 0],
    //     translateZ: 0,
    //     opacity: [0, 1],
    //     easing: 'easeOutExpo',
    //     duration: 1200,
    //     delay: (el, i) => 500 + 30 * i,
    //   })
    //   .add({
    //     targets: '.ml4 .letters-1',
    //     translateX: [0, -30],
    //     opacity: [1, 0],
    //     easing: 'easeInExpo',
    //     duration: 1100,
    //     delay: (el, i) => 100 + 30 * i,
    //   });
    //   .add({
    //     targets: '.ml4 .letters-2',
    //     translateX: [40, 0],
    //     translateZ: 0,
    //     opacity: [0, 1],
    //     easing: 'easeOutExpo',
    //     duration: 1200,
    //     delay: (el, i) => 500 + 30 * i,
    //   })
    //   .add({
    //     targets: '.ml4 .letters-2',
    //     translateX: [40, 0],
    //     translateZ: 0,
    //     opacity: [0, 1],
    //     easing: 'easeOutExpo',
    //     duration: 1200,
    //     delay: (el, i) => 500 + 30 * i,
    //   })
    //   .add({
    //     targets: '.ml4 .letters-3',
    //     translateX: [40, 0],
    //     translateZ: 0,
    //     opacity: [0, 1],
    //     easing: 'easeOutExpo',
    //     duration: 1200,
    //     delay: (el, i) => 500 + 30 * i,
    //   })
    //   .add({
    //     targets: '.ml4 .letters-3',
    //     translateX: [40, 0],
    //     translateZ: 0,
    //     opacity: [0, 1],
    //     easing: 'easeOutExpo',
    //     duration: 1200,
    //     delay: (el, i) => 500 + 30 * i,
    //   });
  }, []);
};
