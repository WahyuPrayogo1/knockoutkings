"use client"

import React, { useEffect } from 'react';

export default function HeroAthletes() {
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
            our <h3 style={{ color: 'red' }}>athletes</h3>
          </div>
        </div>
        <div id="hero-right">
          <h3 className="text-white text-center uppercase lg:text-base md:text-base sm:text-sm text-[10px]" style={{ fontFamily: 'Roboto' }}>
          SCROLL DOWN TO SEE knockout kings athletes
          </h3>
        </div>
      </main>
      </div>
    </section>

    // <section className="w-full relative overflow-hidden">
    //   <div
    //     id="parallax-element"
    //     className="fixed top-0 left-0 right-0 bottom-0 -z-10 bg-cover bg-center"
    //     style={{ backgroundImage: `url('/backround black.png')` }}
    //   ></div>
    //   <main className="flex flex-col justify-between p-64 items-center z-10 w-full h-full relative">
    //     <div id="hero-left">
    //       <div
    //         className="text-white text-7xl flex flex-row gap-4"
    //         style={{ fontFamily: 'Bebas Neue' }}
    //       >
    //         our <h3 style={{ color: 'red' }}>athletes</h3>
    //       </div>
    //     </div>
    //     <div id="hero-right">
    //       <h3 className="text-white uppercase" style={{ fontFamily: 'Roboto' }}>
    //       SCROLL DOWN TO SEE knockout kings athletes
    //       </h3>
    //     </div>
    //   </main>
    // </section>
  );
}


// export default function HeroAthletes(){
//     return (
        
//         <section className="w-full">   
//             <img src="/backround black.png" alt="" className="absolute -z-10 overflow-y-scroll w-full bg-center bg-no-repeat"/>
//             <main className="flex flex-col justify-between p-64 items-center z-10 w-full h-full">
//                 <div id="hero-left">
//                     <div className="text-white text-7xl flex flex-row gap-4" style={{fontFamily: 'Bebas Neue'}}>Our <h3 style={{color: 'red'}}>Athletes</h3></div>
//                 </div>
//                 <div id="hero-right">
//                     <h3 className="text-white uppercase" style={{fontFamily: 'Roboto'}}>SCROLL DOWN TO SEE knockout kings athletes</h3>
//                 </div>
//             </main>
//         </section>
//     )
// }