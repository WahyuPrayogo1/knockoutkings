"use client"
import { useEffect, useState, useRef } from "react";

export default function Service() {

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
          ref.current.querySelectorAll('.tersembunyi-footer').forEach((el) => {
            el.classList.add('slide-up');
          });
        } else {
            ref.current.querySelectorAll(".tersembunyi-footer").forEach((el) => {
              el.classList.remove("slide-up");
            });
        }
      }, [isIntersecting]);

    return (
        <section className="pt-4 z-10 px-12 -mt-2.5 w-full dark:bg-[#121212] transition duration-500 bg-[#f5f5f5]" id="Services" ref={ref}>

            <div className="tersembunyi-footer">
                <div className="dark:text-white flex flex-row uppercase lg:gap-2 md:gap-1.5 gap-1 lg:text-6xl text-4xl text-black justify-center md:py-11 py-6 transition duration-500" style={{fontFamily: 'Bebas Neue'}}>Our<h3>Services</h3></div>

                <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-6 max-w-7xl mx-auto">

                    <div id="card-left" className="dark:bg-white bg-red-600 shadow-black shadow-lg rounded-md px-6 py-10 hover:scale-105 transition duration-500">
                        <img src="glove icon.png" alt="" className="lg:w-32 lg:h-32 lg:mt-28 md:w-28 md:h-28 md:mt-20 w-16 h-16 mt-14 mx-auto"/>
                        <div style={{fontFamily: 'Bebas Neue'}} className="text-center my-4 lg:text-4xl md:text-2xl text-xl font-medium dark:font-bold dark:text-red-600 text-white transition duration-500" >One Day  Intensive Workshop</div>
                        <p className="text-center my-2 lg:text-base text-xs font-medium dark:font-bold dark:text-black text-white transition duration-500" style={{fontFamily: 'Roboto'}}>Knockout Kings can host one-day intensive workshops focused on specific  aspects of martial arts and combat sports. </p>
                    </div>

                    <div id="card-center" className="dark:bg-white bg-red-600 shadow-black shadow-lg rounded-md px-6 py-10 hover:scale-105 transition duration-500">
                        <img src="sparring.png" alt="" className="lg:w-32 lg:h-32 lg:mt-28 md:w-28 md:h-28 md:mt-20 w-16 h-16 mt-14 mx-auto" />
                        <div style={{fontFamily: 'Bebas Neue'}} className="text-center my-4 lg:text-4xl md:text-2xl text-xl font-medium dark:font-bold dark:text-red-600 text-white transition duration-500" >Open  Sparring Sessions</div>
                        <p className="text-center my-2 lg:text-base text-xs font-medium dark:font-bold dark:text-black text-white transition duration-500" style={{fontFamily: 'Roboto'}}>These sessions allow members to test their  skills,  gain practical experience,  and adapt their training to real-life  scenarios.</p>
                    </div>

                    <div id="card-right" className="dark:bg-white bg-red-600 shadow-black shadow-lg rounded-md px-6 py-10 hover:scale-105 transition duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="lg:w-32 lg:h-32 lg:mt-28 md:w-28 md:h-28 md:mt-20 w-16 h-16 mt-14 mx-auto">
                            <path strokeLinecap="round"  strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <div style={{fontFamily: 'Bebas Neue'}} className="text-center my-4 lg:text-4xl md:text-2xl text-xl font-medium dark:font-bold dark:text-red-600 text-white transition duration-500" >Private  Sparring Sessions</div>
                        <p className="text-center my-2 lg:text-base text-xs font-medium dark:font-bold dark:text-black text-white transition duration-500" style={{fontFamily: 'Roboto'}}>These one-on-one or small group sessions allow members to receive personalized attention, feedback, and instruction. </p>
                    </div>

                </div>
                </div>{}

        </section>
    )
}