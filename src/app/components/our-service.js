"use client"
import { useEffect, useState, useRef } from "react";

export default function OurService({ OpenModal }) {

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

      const ourServiceData = [
        {
            image: "/samsak.jpg",
            tittle: "BOYS TRAINING MATCH",
            description: "we provide the best quality training match for boys here",
        },
        {
            image: "/girls boxing.jpg",
            tittle: "girls TRAINING MATCH",
            description: "we provide the best quality training match for girls here",
        },
        {
            image: "/boxer-training.jpg",
            tittle: "workout for men",
            description: "we provide the best quality workout training for men here",
        },
        {
            image: "/girls workout.jpg",
            tittle: "workout for women",
            description: "we provide the best quality workout training for women here",
        },
      ]

    return (
        <section className="lg:px-12 px-6 bg-[#f5f5f5]" ref={ref}>

            <div className="tersembunyi-fade">

                <div className="uppercase text-6xl text-black py-6 text-center" style={{ fontFamily: 'Bebas Neue'}}><h1>our service</h1></div>

                <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">

                    {ourServiceData.map((item, index) => (
                        <div key={index} className="relative overflow-hidden shadow-black shadow-lg w-full lg:h-[350px] md:h-[200px] h-[250px] group">

                            <div className="absolute bg-black w-full z-10 h-full opacity-50"></div>

                            <img src={item.image} className="absolute group-hover:scale-105 w-full h-full transition duration-500 object-cover object-center" alt="" />

                            <div className="bottom-0 left-0 absolute z-20 px-3 py-3">
                                
                                <div className="text-white lg:text-5xl text-3xl md:text-2xl" style={{ fontFamily: 'Bebas Neue'}}>{item.tittle}</div>
                                <div className="text-white lg:text-sm text-xs uppercase lg:py-2 md:py-1 py-1.5" style={{ fontFamily: 'Roboto'}}>{item.description}</div>
                                <button onClick={OpenModal} className="text-white hover:text-black lg:px-6 lg:py-2 px-3 py-1 lg:text-base md:text-xs text-sm opacity-0 group-hover:opacity-100 bg-red-600 hover:bg-white transition duration-500 uppercase">register now</button>
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}