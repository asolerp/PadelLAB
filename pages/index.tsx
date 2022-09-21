import React, { useRef, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { useAnimateHomeBoxes } from './hooks/useAnimateHomeBoxes';
import { useAnimateHomeTitle } from './hooks/useAnimateHomeTitle';
import { WebMenu } from '../components/navigation/WebMenu';
import { CustomCursor } from '../components/navigation/CustomCursor';

import { HomeSection } from '../components/home/HomeSection';
import { AboutMeSection } from '../components/aboutMe/AboutMeSection';

const Home: NextPage = () => {
  useAnimateHomeBoxes();
  useAnimateHomeTitle();

  const [lastVisibleSection, setLastVisibleSection] = useState('home');

  return (
    <div className="cursor-none" style={{ scrollBehavior: 'smooth' }}>
      <CustomCursor />
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Head>
          <title>PadelLAB</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex w-full flex-1 flex-col">
          <div className="absolute top-0 left-20 z-50 bg-white p-3">
            <img className="w-24 h-24" src="/logo_padel_lab.png"></img>
          </div>
          <WebMenu lastVisibleSection={lastVisibleSection} />
          <section id="home" className="z-10">
            <HomeSection setLastVisibleSection={setLastVisibleSection} />
          </section>
          <section id="aboutMe" className="z-20">
            <AboutMeSection setLastVisibleSection={setLastVisibleSection} />
          </section>
        </main>

        {/* <footer className="flex h-24 w-full items-center justify-center border-t">
      </footer> */}
      </div>
    </div>
  );
};

export default Home;
