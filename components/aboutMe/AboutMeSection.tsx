import React from 'react';

export const AboutMeSection = () => {
  return (
    <div
      onChange={(inView) => console.log(inView, 'INVIEW')}
      style={{ width: '100vw', height: 1700 }}
      className="bg-orange-900"
    ></div>
  );
};
