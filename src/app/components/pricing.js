"use client"

import { useState, useEffect, useRef } from "react";

export default function Pricing({ OpenModal }) {

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

        <section className="lg:px-12 px-6 -mt-32 bg-[#f5f5f5]" ref={ref}>

            <div className="flex-col flex lg:flex-row justify-between items-center pb-14 max-w-7xl mx-auto">

                <div id="hero-landing-left" className="flex justify-center flex-col md:mt-48 mt-32 lg:mt-40 max-w-xl tersembunyi-hero">

                    <div className="lg:text-3xl py-1 text-center text-2xl lg:text-left" style={{fontFamily: 'Bebas Neue', color: 'red'}}>Our Pricing Plans</div>
                    <div className="text-black lg:text-6xl py-1 lg:text-left text-4xl text-center" style={{fontFamily: 'Bebas Neue'}}>Affordable Pricing  plans for you</div>
                    <div className="text-black lg:text-base py-3 lg:text-left text-sm text-center" style={{fontFamily: 'Roboto'}}>If you want to pay for our training plan, come to Knockout King's gym, and register  your account first. </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 py-2 lg:gap-3 gap-6">

                        <div className="flex flex-col py-6 bg-black shadow-black shadow-lg hover:scale-105 hover:bg-gray-900 transition duration-500">

                                <div className="flex flex-col justify-start lg:items-start items-center gap-1 px-4">

                                    <div className="text-white lg:text-3xl py-1 lg:text-left text-2xl text-center" style={{fontFamily: 'Bebas Neue',}}>Amateur</div>

                                    <div className="text-white lg:text-4xl flex items-end text-3xl text-center" style={{fontFamily: 'Bebas Neue', color: 'red'}}>$5<h3 className="text-white lg:text-2xl text-xl">/day</h3></div>

                                    <hr className="bg-white w-full h-0.5 my-4"/>

                                </div>

                                <div className="flex flex-col justify-start items-start gap-2 px-4">

                                    <div className="flex flex-row justify-center items-start gap-2">

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>

                                        <div className="text-white text-sm" style={{fontFamily: 'Roboto'}}>Basic Session Fee</div>

                                    </div>

                                    <div className="flex flex-row justify-start items-center gap-2">

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>

                                        <div className="text-white text-sm" style={{fontFamily: 'Roboto'}}>Standard Class Rate</div>

                                    </div>

                                    <div className="flex flex-row justify-start items-center gap-2">

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>

                                        <div className="text-white text-sm" style={{fontFamily: 'Roboto'}}>Entry-Level Package</div>

                                    </div>

                                    <div className="flex flex-row justify-start items-center gap-2">

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>

                                        <div className="text-white text-sm" style={{fontFamily: 'Roboto'}}>Casual Membership Cost</div>

                                    </div>

                                    <div className="flex flex-row justify-start items-center gap-2 opacity-0">

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>

                                        <div className="text-white text-sm" style={{fontFamily: 'Roboto'}}>Casual Membership Cost</div>

                                    </div>

                                </div>

                                <div className="flex flex-col justify-end items-start py-6">

                                    <button onClick={OpenModal} className="text-white bg-red-600 flex justify-start gap-2 items-center py-2 px-8 text-sm uppercase group" style={{ fontFamily: 'Roboto'}}>Register Now
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  group-hover:translate-x-2 tranition duration-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                    </svg>

                                    </button>

                                </div>

                        </div>

                        <div className="flex flex-col py-6 bg-black hover:scale-105 shadow-black shadow-lg hover:bg-gray-900 transition duration-500">

                            <div className="flex flex-col justify-start lg:items-start items-center gap-1 px-4">

                                <div className="text-white lg:text-3xl py-1 lg:text-left text-2xl text-center" style={{fontFamily: 'Bebas Neue',}}>Professional</div>

                                <div className="text-white lg:text-4xl flex items-end text-3xl text-center" style={{fontFamily: 'Bebas Neue', color: 'red'}}>$15.99<h3 className="text-white text-2xl">/month</h3></div>

                                <hr className="bg-white w-full h-0.5 my-4"/>

                            </div>

                            <div className="flex flex-col justify-center items-start gap-2 px-4">

                                <div className="flex flex-row justify-start items-center gap-2">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <div className="text-white text-sm" style={{fontFamily: 'Roboto'}}>Elite Training Package</div>

                                </div>

                                <div className="flex flex-row justify-start items-center gap-2">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <div className="text-white text-sm" style={{fontFamily: 'Roboto'}}>Premium Membership Fee</div>

                                </div>

                                <div className="flex flex-row justify-start items-center gap-2">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <div className="text-white text-sm" style={{fontFamily: 'Roboto'}}>Pro Coaching Plan</div>

                                </div>

                                <div className="flex flex-row justify-start items-center gap-2">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <div className="text-white text-sm" style={{fontFamily: 'Roboto'}}>Advanced Class Rate</div>

                                </div>

                                <div className="flex flex-row justify-start items-center gap-2">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <div className="text-white text-sm" style={{fontFamily: 'Roboto'}}>Exclusive Program Cost</div>

                                </div>

                            </div>

                            <div className="flex flex-col justify-end items-start py-6">

                                <button onClick={OpenModal} className="text-white bg-red-600 flex justify-start gap-2 items-center py-2 px-8 text-sm uppercase group" style={{ fontFamily: 'Roboto'}}>Register Now
                                
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:translate-x-2 tranition duration-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                </svg>


                                </button>

                            </div>

                        </div>

                    </div>

                </div>


                <div id="hero-landing-right" className="flex h-full lg:pt-32 pt-16 max-w-xl tersembunyi-hero">

                    <div className="flex flex-col gap-2 z-10">

                        <div id="hero left" className="relative overflow-hidden bg-no-repeat shadow-black shadow-lg group">

                            <img src="mcgregor.jpg" className=" h-full w-full hover:scale-105 transition duration-500 object-cover"/>

                            <main className="flex justify-center py-2 w-full opacity-0 ">

                                <div style={{fontFamily: 'Bebas Neue', color: 'red'}} className="lg:text-4xl z-40 pointer-events-none">MIKE <p className="text-white">TYSON</p> </div>

                            </main>

                        </div>

                    </div>
                    
                </div>


            </div>

        </section>

    )
}