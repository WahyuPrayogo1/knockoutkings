"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Features() {

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
        <section className="w-full py-10 z-10 lg:px-12 px-6 -mt-2.5 dark:bg-[#121212] transition duration-500 bg-[#f5f5f5] overflow-x-hidden" ref={ref}>
            <div className="flex flex-col lg:flex-row justify-between items-center py-16 max-w-7xl lg:gap-6 md:gap-4 gap-2 mx-auto">
                <div id="hero-landing-left" className="my-auto max-w-xl tersembunyi-hero">
                    <div className="flex flex-col lg:items-start items-center">
                        <div className="uppercase dark:text-white lg:text-left text-center text-black transition duration-500 flex justify-center flex-col text-4xl lg:text-5xl" style={{fontFamily: 'Bebas Neue'}}>unleash your inner champion at knockout kings with our best facilities  </div>
                        <p className="lg:text-left text-center dark:text-white text-black transition duration-500 mt-3 md:text-sm text-xs" style={{fontFamily: 'Roboto'}}>Join Knockout Kings Boxing Center and experience the incredible benefits of boxing. Our expert trainers will help you improve your your fitness, learn self defense skills, and boost your self-confidence</p>
                        
                        <div className="flex flex-col lg:items-start md:flex-row items-center justify-center gap-10 mt-10" style={{fontFamily: 'Roboto'}}>
                            <div id="fitur-left" className="text-white rounded-xl px-4 flex flex-col justify-center items-center lg:items-start gap-2 py-2 shadow-black shadow-lg hover:text-red-600 hover:bg-white transition ease-in-out duration-500 bg-red-600 hover:scale-105" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                </svg>
                                <div className="uppercase font-semibold">F i t n e s s</div>
                                <p className="text-sm lg:text-left text-center">Get in the best shape of your life with our intense boxing workouts.</p>
                            </div>
                            <div id="fitur-right" style={{fontFamily: 'Roboto'}} className="text-white rounded-xl px-4 flex flex-col justify-center items-center lg:items-start gap-2 py-2 shadow-black shadow-lg hover:text-red-600 hover:bg-white transition ease-in-out duration-500 bg-red-600 hover:scale-105" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                </svg>
                                <div className="uppercase font-semibold">S e l f - D e f e n s e</div>
                                <p className=" text-sm text-center lg:text-left" >Learn valuable self-defense techniques that will keep you safe in any situation.</p>
                            </div>
                        </div>
                        
                        <div className="mt-6 mx-2 " style={{fontFamily: 'Roboto'}}>
                            <Link href='/About'><button className="px-4 py-2 outline-red-600 outline dark:text-white text-black  hover:scale-105 transition duration-500 rounded font-medium">Learn More</button></Link>
                            <Link href='/About' ><button className="px-4 py-2 dark:text-white text-black transition duration-500">Contact Us </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div id="hero-landing-right" className="lg:max-w-xl tersembunyi-hero lg:w-full md:w-1/2 w-5/6 py-4 flex justify-between items-start gap-3">
                    <div className="flex flex-col justify-start items-start gap-2">
                        <img src="boxing.jpg" alt="" className="object-top object-cover shadow-black shadow-lg w-80 h-48" />
                        <img src="boxer-training.jpg" alt="" className="object-center object-cover shadow-black shadow-lg w-80 h-48" />
                        <img src="mma.jpg" alt="" className="object-center object-cover shadow-black shadow-lg w-80 h-36" />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2">
                        <img src="mike sparring.jpg" alt="" className="object-top object-cover shadow-black shadow-lg w-80 h-36" />
                        <img src="alex pereira.webp" alt="" className="object-center object-cover shadow-black shadow-lg w-80 h-52" />
                        <img src="gervonta spar.jpg" alt="" className="object-center object-cover shadow-black shadow-lg w-80 h-44" />
                    </div>
                </div>
            </div>
        </section>
    )
}
