"use client"
import { useEffect, useState, useRef } from "react";

export default function HeroShop() {

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
            <main className="flex flex-col lg:flex-row justify-center gap-10 px-6 items-center z-10 py-28 w-full lg:max-w-7xl mx-auto">
                <div id="hero-landing-left" className="max-w-lg lg:text-left text-center tersembunyi-hero">
                    <div className="text-white lg:text-8xl text-4xl py-2" style={{fontFamily: 'Bebas Neue'}}>welcome to knockout kings shop</div>
                    <div className="text-white md:text-base text-sm py-2" style={{fontFamily: 'Roboto'}}>Step into the world of champions at Knockout Kings Martial Arts Shop Center, where excellence meets style. Discover a curated selection of top-tier gear and apparel that empowers your journey to mastery.</div>
                    <div className="flex lg:justify-start justify-center items-center md:gap-5 gap-3 py-5 md:text-base text-sm" style={{fontFamily: 'Roboto'}}>
                        <div className="text-white py-2 uppercase">Start Ordering Equipment</div>
                        <a href="#Promo" className="text-black hover:text-white px-6 py-2 bg-white hover:bg-red-600 transition duration-500 uppercase">See Our Promo</a>
                    </div>
                </div>
                <div id="hero-landing-right" className="flex gap-4 tersembunyi-hero">
                    <div id="hero left" className="bg-no-repeat shadow-black shadow-xl">
                        <img src="/spar.webp" alt="" className=" h-[500px] lg:max-w-3xl object-cover"/>
                    </div>
                </div>
            </main>
        </section>
    )
}