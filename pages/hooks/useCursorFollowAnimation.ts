import { useEffect, useRef } from 'react';
import { useMousePosition } from './useMousePosition';

export const useCursorFollowAnimation = () => {
  const mainCursor = useRef(null);

  const { position } = useMousePosition();

  useEffect(() => {
    if (!position) return;
    const mouseX = position.x;
    const mouseY = position.y;

    mainCursor.current.style.transform = `translate3d(${
      mouseX - mainCursor.current.clientWidth / 2
    }px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
  }, [position]);

  return {
    mainCursor,
  };
};
