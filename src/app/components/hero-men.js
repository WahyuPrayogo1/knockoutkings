"use client"

import React, { useEffect } from 'react';

export default function HeroWorkoutForMen() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const parallaxElement = document.getElementById('parallax-element');
      parallaxElement.style.transform = `translateY(-${scrollValue * 0.5}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <section className="w-full bg-[#f5f5f5] dark:bg-[#121212] transition duration-500">
        <div className='relative overflow-hidden'>
      <div
      id="parallax-element"
        className="absolute w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('/backround black.png')` }}
      ></div>
      <main className="flex flex-col justify-between p-64 items-center lg:p-64 md:py-96 sm:py-80 sm:px-6 py-72 px-6 z-10 w-full h-full relative">
        <div id="hero-left">
          <div
            className="text-white lg:text-7xl md:text-5xl text-4xl flex flex-row lg:gap-4 md:gap-3 sm:gap-2 gap-1"
            style={{ fontFamily: 'Bebas Neue' }}
          >
            workout for <h3 style={{ color: 'red' }}>men</h3>
          </div>
        </div>
        <div id="hero-right">
          <h3 className="text-white text-center uppercase lg:text-base md:text-base sm:text-sm text-[10px]" style={{ fontFamily: 'Roboto' }}>
          SCROLL DOWN TO ARRAnGE your workout schedule for men
          </h3>
        </div>
      </main>
      </div>
    </section>

  );
}