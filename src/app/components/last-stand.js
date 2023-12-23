"use client"
import { useEffect, useState, useRef } from "react";

export default function LastStand({ OpenModal }){

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
          ref.current.querySelectorAll('.tersembunyi-fade').forEach((el) => {
            el.classList.add('fade');
          });
        } else {
            ref.current.querySelectorAll(".tersembunyi-fade").forEach((el) => {
              el.classList.remove("fade");
            });
        }
      }, [isIntersecting]);

    return (
        
        <section className="w-full bg-[#f5f5f5] relative py-10" ref={ref}>   
            <img src="/last stand.jpg" alt="" className="absolute h-[430px] w-full tersembunyi-fade object-cover object-center bg-no-repeat"/>
            <div id="bg-black" className=" w-full bg-black h-[430px] absolute tersembunyi-fade opacity-60"></div>
            <main className="relative flex tersembunyi-fade flex-col px-6 text-center gap-3 justify-center my-32 items-center w-full h-full">
                <div id="hero-left">
                    <div className="text-white lg:text-5xl text-2xl" style={{fontFamily: 'Bebas Neue'}}>only the chosen one will be the last one standing</div>
                </div>
                <div id="hero-right">
                    <h3 className="text-white lg:text-sm text-xs uppercase lg:max-w-2xl" style={{fontFamily: 'Roboto'}}>Embrace the Challenge, Stand Victorious. In the arena of Knockout Kings, only the chosen one will be the last one standing, etching their legacy in the art of combat. Are you ready to be the champion?</h3>
                </div>
                <div id="hero-right">
                <div className="text-base py-3" style={{fontFamily: 'Roboto'}}><button onClick={OpenModal} className="text-black hover:text-white lg:text-base text-sm lg:px-6 lg:py-2 py-1 px-3 bg-white hover:bg-red-600 transition duration-500 uppercase">join knockout kings now</button></div>
                </div>
            </main>
        </section>
    )
}