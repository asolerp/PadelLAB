import React from 'react';

import { OverlayBox } from '../layout/OverlayBox';

export const HomeSection = () => {
  return (
    <OverlayBox url="/bg_home.jpeg" color="#202020" opacity={95}>
      {/* <div>
          <h1
            style={{ width: '100vw' }}
            className="ml4 tracking-wider bg-slate-600 relative z-20 font-bold text-white text-9xl self-end text-center"
          >
            <span className="absolute bottom-0 left-0 right-0 opacity-0 m-auto inline-block letters-1 z-10">
              METODOLOGÍA
            </span>
          </h1>
        </div> */}

      {/* <h1 className="z-20 font-bold text-white text-9xl self-end pb-10">
        METODOLOGÍA
      </h1> */}
      <div
        id="box1"
        style={{
          width: 600,
          height: 600,
          backgroundColor: '#FF9900',
        }}
        className="absolute bottom-10 opacity-50 overflow-hidden"
      ></div>
      <div
        id="box2"
        style={{
          width: 600,
          height: 600,
          right: 400,
          backgroundColor: '#FF9900',
        }}
        className="absolute bottom-0  opacity-50 overflow-hidden"
      ></div>
    </OverlayBox>
  );
};
