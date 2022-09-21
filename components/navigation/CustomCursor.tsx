import React from 'react';
import { useCursorFollowAnimation } from '../../pages/hooks/useCursorFollowAnimation';

export const CustomCursor = () => {
  const { mainCursor } = useCursorFollowAnimation();

  return (
    <div>
      <div
        ref={mainCursor}
        style={{
          transform: 'translate3d(0,0,0)',
          transition: 'opacity 1s cubic-bezier(0.77, 0, 0.175, 1)',
          animation: 'fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards',
          mixBlendMode: 'difference',
        }}
        className="fixed z-50 w-8 h-8 rounded-full pointer-events-none bg-orange-400"
      ></div>
    </div>
  );
};
