import React from 'react';
import { Transition } from 'react-transition-group';
import { useAnimateHomeBoxes } from '../../pages/hooks/useAnimateHomeBoxes';

import { OverlayBox } from '../layout/OverlayBox';

export const HomeSection = ({ animation }) => {
  useAnimateHomeBoxes();

  const defaultStyle = {
    transition: `transform ${1500}ms ease-in-out`,
    transform: `translate(0px, 1000px)`,
  };

  const transitionStyles = {
    entering: { transform: `translate(0px, 1000px)` },
    entered: { transform: `translate(0px, 0px)` },
    exiting: { transform: `translate(0px, 0px)` },
    exited: { transform: `translate(0px, 1000px)` },
  };

  return (
    <OverlayBox url="/bg_home.jpeg">
      <>
        <Transition in={animation} timeout={300}>
          {(state) => (
            <div
              style={{ ...defaultStyle, ...transitionStyles[state] }}
              className="z-50 px-24 self-end"
            >
              <h2
                style={{ marginBottom: -60, marginLeft: 15 }}
                className="text-white font-sans text-4xl"
              >
                Conoce el método
              </h2>
              <h1
                style={{ fontSize: 280 }}
                className="text text-white font-sans tracking-wider w-full p-0"
              >
                PADEL <span className="text-orange-600">LAB</span>
              </h1>
            </div>
          )}
        </Transition>
        <div
          id="box1"
          style={{
            width: 700,
            height: 700,
            bottom: -100,
            transform: `rotate(140deg)`,
            backgroundColor: '#FF9900',
          }}
          className="absolute bottom-10 opacity-50 overflow-hidden"
        ></div>
        <div
          id="box2"
          style={{
            width: 700,
            height: 700,
            right: 400,
            bottom: -100,
            backgroundColor: '#FF9900',
          }}
          className="absolute bottom-0  opacity-50 overflow-hidden"
        ></div>
      </>
    </OverlayBox>
  );
};
