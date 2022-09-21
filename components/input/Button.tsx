import React from 'react';

export const Button = ({ text, ...props }) => {
  return (
    <button
      style={{ backgroundColor: '#FFC266' }}
      className="px-5 py-3 rounded-sm"
      {...props}
    >
      <p className="flex text-white text-2xl">{text}</p>
    </button>
  );
};
