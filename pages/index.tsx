import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Transition } from 'react-transition-group';

import { WebMenu } from '../components/navigation/WebMenu';
import { CustomCursor } from '../components/navigation/CustomCursor';

import { HomeSection } from '../components/home/HomeSection';
import { AboutMeSection } from '../components/aboutMe/AboutMeSection';
import anime from 'animejs';

const Home: NextPage = () => {
  useEffect(() => {
    const mainAnimation = anime.timeline();
    mainAnimation.add({
      targets: '#mainMask',
      delay: 500,
      duration: 5000,
      opacity: [1, 0],
      changeBegin: () => setAnimationFinished(true),
    });
  }, []);

  const [animationFinished, setAnimationFinished] = useState(false);

  const defaultStyle = {
    transition: `transform ${1000}ms ease-in-out`,
    transform: `translate(0px, -200px)`,
  };

  const transitionStyles = {
    entering: { transform: `translate(0px, -200px)` },
    entered: { transform: `translate(0px, 0px)` },
    exiting: { transform: `translate(0px, 0px)` },
    exited: { transform: `translate(0px, -200px)` },
  };

  return (
    <div className="cursor-none" style={{ scrollBehavior: 'smooth' }}>
      <CustomCursor />
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Head>
          <title>PadelLAB</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div
          id="mainMask"
          className="absolute top-0 left-0 bg-black z-50"
          style={{
            width: '100vw',
            height: '100vh',
          }}
        ></div>
        <main id="main" className="flex w-full flex-1 flex-col">
          <Transition in={animationFinished} timeout={300}>
            {(state) => (
              <>
                <div
                  style={{ ...defaultStyle, ...transitionStyles[state] }}
                  className="absolute top-0 left-20 z-40 bg-white p-3 transition-all"
                >
                  <img className="w-24 h-24" src="/logo_padel_lab.png"></img>
                </div>
                <WebMenu
                  containerStyle={{
                    ...defaultStyle,
                    ...transitionStyles[state],
                  }}
                />
              </>
            )}
          </Transition>

          <section id="home" className="z-10">
            <HomeSection />
          </section>
          <section id="aboutMe" className="z-20">
            <AboutMeSection />
          </section>
        </main>

        {/* <footer className="flex h-24 w-full items-center justify-center border-t">
      </footer> */}
      </div>
    </div>
  );
};

export default Home;
