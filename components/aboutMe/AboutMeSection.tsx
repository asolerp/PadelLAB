import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

export const AboutMeSection = () => {
  return (
    <ParallaxBanner
      style={{ height: 700 }}
      layers={[{ image: '/about_bg.png', speed: -15 }]}
      className="aspect-[2/1]"
    >
      <div className="absolute w-full h-full flex flex-row">
        <div className="flex flex-1 items-center justify-center">
          <div className="pl-40">
            <h4 className="font-sans text-white text-3xl mb-16">Sobre mi</h4>
            <p className="font-sans text-white text-3xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <img
            style={{ height: 500 }}
            className="object-cover"
            src="/entrenador.png"
          ></img>
        </div>
      </div>
    </ParallaxBanner>
  );
};
