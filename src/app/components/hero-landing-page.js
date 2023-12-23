"use client"
import { useState, useEffect, useRef } from "react";

export default function HeroLandingPage({ OpenModal }) {

    const [isIntersecting, setIsIntersecting] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
          },
          { rootMargin: "-10px" }
        );
        console.log(isIntersecting);
        observer.observe(ref.current);
    
        return () => observer.disconnect();
      }, [isIntersecting]);
    
      useEffect(() => {
        if (isIntersecting) {
          ref.current.querySelectorAll('.tersembunyi-hero').forEach((el) => {
            el.classList.add('slide');
          });
        } else {
            ref.current.querySelectorAll(".tersembunyi-hero").forEach((el) => {
              el.classList.remove("slide");
            });
        }
      }, [isIntersecting]);

    return (
        <section className="w-full relative" ref={ref}>   
            <img src="/backround black.png" alt="" className="absolute -z-10 overflow-y-scroll w-full h-full object-cover bg-center bg-no-repeat"/>
            <main className="flex flex-col lg:flex-row pt-24 lg:pt-0 justify-between px-6 lg:px-12 items-center z-10 lg:max-w-7xl w-full mx-auto">
                <div id="hero-landing-left" className="lg:-mt-[150px] lg:max-w-lg tersembunyi-hero">
                    <div className="text-white text-5xl md:text-6xl text-center lg:text-8xl py-2 lg:text-left" style={{fontFamily: 'Bebas Neue'}}>train your martial arts</div>
                    <div className="text-white text-sm text-center lg:text-base lg:text-left py-2" style={{fontFamily: 'Roboto'}}>The goal of our martial arts program is to help you develop the skills. This is the place where you are taught how to be beast with your  body and guard yourself against everything</div>
                    <div className="flex lg:justify-start justify-center items-center text-sm lg:text-sm lg:gap-5 gap-2 py-5" style={{fontFamily: 'Roboto'}}>
                        <div className="text-white py-2 px-3 uppercase md:text-base text-xs text-center">Start Your Journey</div>
                        <button onClick={OpenModal} className="text-black hover:text-white px-3 lg:px-6 py-2 bg-white hover:bg-red-600 transition duration-500 md:text-base text-xs uppercase">join knockout kings now</button>
                    </div>
                </div>
                <div id="hero-landing-right" className="flex gap-4 pt-[100px] lg:max-w-2xl w-full tersembunyi-hero">
                    <div className="flex flex-col gap-2 w-full pt-[200px]">
                        <div id="hero left" className="relative overflow-hidden bg-no-repeat shadow-black h-48 md:w-full lg:w-full w-full shadow-xl group">
                            <img src="Khabib-Nurmagomedov.jpg" alt="" className=" h-full w-full absolute object-cover group-hover:scale-105 transition duration-500  "/>
                            <main className="flex justify-center py-2 w-full opacity-0">
                                <div style={{fontFamily: 'Bebas Neue', color: 'red'}} className="lg:text-4xl z-40 pointer-events-none">MIKE <p className="text-white">TYSON</p> </div>
                            </main>
                        </div>
                        <div id="hero left" className="relative overflow-hidden bg-no-repeat shadow-black h-48 md:w-full lg:w-full w-full shadow-xl group">
                            <img src="khabib.jpg" alt="" className=" h-full w-full absolute object-cover group-hover:scale-105 transition duration-500  "/>
                            <main className="flex justify-center py-2 w-full opacity-0">
                                <div style={{fontFamily: 'Bebas Neue', color: 'red'}} className="lg:text-4xl z-40 pointer-events-none">MIKE <p className="text-white">TYSON</p> </div>
                            </main>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full pt-[80px]">
                        <div id="hero left" className="relative overflow-hidden bg-no-repeat shadow-black h-48 md:w-full lg:w-full w-full shadow-xl group">
                            <img src="floyd.jpg" alt="" className=" h-full w-full absolute object-cover group-hover:scale-105 transition duration-500  "/>
                            <main className="flex justify-center py-2 w-full opacity-0">
                                <div style={{fontFamily: 'Bebas Neue', color: 'red'}} className="lg:text-4xl z-40 pointer-events-none">MIKE <p className="text-white">TYSON</p> </div>
                            </main>
                        </div>
                        <div id="hero left" className="relative overflow-hidden bg-no-repeat shadow-black h-64 md:w-full lg:w-full shadow-xl group">
                            <img src="manny pacman.jpg" alt="" className=" h-full w-full absolute object-cover group-hover:scale-105 transition duration-500  "/>
                            <main className="flex justify-center py-2 w-full opacity-0 ">
                                <div style={{fontFamily: 'Bebas Neue', color: 'red'}} className="lg:text-4xl z-40 pointer-events-none">MIKE <p className="text-white">TYSON</p> </div>
                            </main>
                        </div>
                        <div id="hero left" className="relative overflow-hidden bg-no-repeat shadow-black h-48 md:w-full lg:w-full w-full shadow-xl group">
                            <img src="canelo.jpg" alt="" className=" h-full w-full absolute object-cover group-hover:scale-105 transition duration-500  "/>
                            <main className="flex justify-center py-2 w-full opacity-0">
                                <div style={{fontFamily: 'Bebas Neue', color: 'red'}} className="lg:text-4xl z-40 pointer-events-none">MIKE <p className="text-white">TYSON</p> </div>
                            </main>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full" >
                        <div id="hero left" className="relative overflow-hidden bg-no-repeat shadow-black h-80 md:w-full lg:w-full shadow-xl group">
                            <img src="mike tyson.jpg" alt="" className=" h-full w-full absolute object-cover group-hover:scale-105 transition duration-500  "/>
                            <main className="flex justify-center py-2 w-full opacity-0">
                                <div style={{fontFamily: 'Bebas Neue', color: 'red'}} className="lg:text-4xl z-40 pointer-events-none">MIKE <p className="text-white">TYSON</p> </div>
                            </main>
                        </div>
                        <div id="hero left" className="relative overflow-hidden bg-no-repeat shadow-black h-48 md:w-full lg:w-full w-full shadow-xl group">
                            <img src="joshua.jpg" alt="" className=" h-full w-full absolute object-cover group-hover:scale-105 transition duration-500  "/>
                            <main className="flex justify-center py-2 w-full opacity-0">
                                <div style={{fontFamily: 'Bebas Neue', color: 'red'}} className="lg:text-4xl z-40 pointer-events-none">MIKE <p className="text-white">TYSON</p> </div>
                            </main>
                        </div>
                        <div id="hero left" className="relative overflow-hidden bg-no-repeat shadow-black h-64 md:w-full lg:w-full shadow-xl group">
                            <img src="deontay.jpg" alt="" className=" h-full w-full absolute lg:object-center object-center object-cover group-hover:scale-105 transition duration-500  "/>
                            <main className="flex justify-center py-2 w-full opacity-0 ">
                                <div style={{fontFamily: 'Bebas Neue', color: 'red'}} className="lg:text-4xl z-40 pointer-events-none">MIKE <p className="text-white">TYSON</p> </div>
                            </main>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full pt-[80px]">
                        <div id="hero left" className="relative overflow-hidden bg-no-repeat shadow-black h-64 md:w-full lg:w-full shadow-xl group">
                            <img src="tyson fury.jpg" alt="" className=" h-full w-full absolute object-cover group-hover:scale-105 transition duration-500  "/>
                            <main className="flex justify-center py-2 w-full opacity-0 ">
                                <div style={{fontFamily: 'Bebas Neue', color: 'red'}} className="lg:text-4xl z-40 pointer-events-none">MIKE <p className="text-white">TYSON</p> </div>
                            </main>
                        </div>
                        <div id="hero left" className="relative overflow-hidden bg-no-repeat shadow-black h-80 md:w-full lg:w-full shadow-xl group">
                            <img src="evander.jpg" alt="" className=" h-full w-full absolute object-cover group-hover:scale-105 transition duration-500  "/>
                            <main className="flex justify-center py-2 w-full opacity-0">
                                <div style={{fontFamily: 'Bebas Neue', color: 'red'}} className="lg:text-4xl z-40 pointer-events-none">MIKE <p className="text-white">TYSON</p> </div>
                            </main>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full pt-[200px]">
                        <div id="hero left" className="relative overflow-hidden bg-no-repeat shadow-black h-48 md:w-full lg:w-full w-full shadow-xl group">
                            <img src="tank davis.jpg" alt="" className=" h-full w-full absolute object-cover lg:object-left group-hover:scale-105 transition duration-500  "/>
                            <main className="flex justify-center py-2 w-full opacity-0">
                                <div style={{fontFamily: 'Bebas Neue', color: 'red'}} className="lg:text-4xl z-40 pointer-events-none">MIKE <p className="text-white">TYSON</p> </div>
                            </main>
                        </div>
                        <div id="hero left" className="relative overflow-hidden bg-no-repeat shadow-black h-48 md:w-full lg:w-full w-full shadow-xl group">
                            <img src="connor.jpg" alt="" className=" h-full w-full absolute object-cover group-hover:scale-105 transition duration-500  "/>
                            <main className="flex justify-center py-2 w-full opacity-0">
                                <div style={{fontFamily: 'Bebas Neue', color: 'red'}} className="lg:text-4xl z-40 pointer-events-none">MIKE <p className="text-white">TYSON</p> </div>
                            </main>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}