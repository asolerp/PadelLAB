import React from 'react';

interface OverlayBoxProps {
  color: string;
  opacity: number;
  url: string;
  children: React.ReactNode;
}

export const OverlayBox: React.FC<OverlayBoxProps> = ({
  url,
  children,
  color,
  opacity,
}) => {
  return (
    <>
      <div
        className="relative"
        style={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          background: `url(${url}) no-repeat`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="flex justify-center items-center w-full h-full"
          style={{
            background: `${color}${opacity}`,
            zIndex: 2,
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};
