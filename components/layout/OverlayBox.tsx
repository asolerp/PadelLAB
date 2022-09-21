import React from 'react';

interface OverlayBoxProps {
  url: string;
  children: React.ReactNode;
}

export const OverlayBox: React.FC<OverlayBoxProps> = ({ url, children }) => {
  return (
    <>
      <div
        className="relative"
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          background: `url(${url}) no-repeat`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="flex justify-center items-center w-full h-full"
          style={{
            background: `radial-gradient(circle, rgba(0,0,0,0.30) 0%, rgba(0,0,0,1) 100%)`,
            zIndex: 2,
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};
