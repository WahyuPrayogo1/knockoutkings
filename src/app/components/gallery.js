"use client"
import { useEffect, useState, useRef } from "react";

export default function Gallery() {

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

    const Gallery = [
        {
            image: "/boxing.jpg"
        },
        {
            image: "/mike fight.jpg"
        },
        {
            image: "/floyd spar.jpg"
        },
        {
            image: "/paquiao.jpg"
        },
        {
            image: "/tyson fury spar.jpg"
        },
        {
            image: "/deontay.jpg"
        },
    ]

    return (
        <section id="gallery" className="z-10 w-full h-full -mt-2.5 bg-[#f5f5f5] dark:bg-[#121212] transition duration-500 pb-14" ref={ref}>


            <div className="dark:text-white text-black flex tersembunyi-fade flex-row uppercase gap-2 lg:text-6xl text-4xl justify-center py-7 transition duration-500" style={{fontFamily: 'Bebas Neue'}}>Our<h3>gallery</h3></div>
            <div className=" mx-auto px-5 lg:px-32 lg:pt-1 tersembunyi-fade">
                <div className="-m-1 flex flex-wrap md:-m-2">

                    {Gallery.map((item, index) => (

                        <div key={index} className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-center object-cover shadow-black shadow-lg hover:scale-105 transition ease-in-out duration-500"
                                src={item.image} />
                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </section>
    )
}