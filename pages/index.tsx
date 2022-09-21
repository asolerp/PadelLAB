import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Transition } from 'react-transition-group';

import { WebMenu } from '../components/navigation/WebMenu';
import { CustomCursor } from '../components/navigation/CustomCursor';

import { HomeSection } from '../components/home/HomeSection';
import { AboutMeSection } from '../components/aboutMe/AboutMeSection';
import { useHomeAnimations } from './hooks/useHomeAnimations';
import { MethodSection } from '../components/method/MethodSection';

const Home: NextPage = () => {
  const { defaultStyle, transitionStyles, animationBegin } =
    useHomeAnimations();

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
          className="absolute top-0 left-0 bg-black z-30"
          style={{
            width: '100vw',
            height: '100vh',
          }}
        ></div>
        <main id="main" className="flex w-full flex-1 flex-col">
          <Transition in={animationBegin} timeout={300}>
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
            <HomeSection animation={animationBegin} />
          </section>
          <section id="about" className="z-20">
            <AboutMeSection />
          </section>
          <section id="method" className="z-20">
            <MethodSection />
          </section>
        </main>

        {/* <footer className="flex h-24 w-full items-center justify-center border-t">
      </footer> */}
      </div>
    </div>
  );
};

export default Home;
