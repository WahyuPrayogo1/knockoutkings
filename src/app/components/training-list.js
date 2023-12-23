"use client"

import React from "react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

const TrainingListandUserTrainingList = () => {

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

    const TrainingList = [
        {
            image: "/samsak.jpg",
            name: "Boys Training Match",
            description: "we provide the best quality training match for boys here",
            href: "/Training/boys-training-match",
        },
        {
            image: "/girls boxing.jpg",
            name: "Girl's Training Match",
            description: "we provide the best quality training match for girl's here",
            href: "/Training/girls-training-match",
        },
        {
            image: "/boxer-training.jpg",
            name: "Workout For Men",
            description: "we provide the best quality workout men here",
            href: "/Training/workout-for-men",
        },
        {
            image: "/girls workout.jpg",
            name: "Workout For Women",
            description: "we provide the best quality workout women here",
            href: "/Training/workout-for-women",
        },
    ]

    return (
        <section id="gallery" className="w-full lg:px-12 px-6 py-12  -mt-2.5 dark:bg-[#121212] bg-[#f5f5f5] transition duration-500" ref={ref}>

        <div className="dark:text-white text-black tersembunyi-fade uppercase gap-2 text-center lg:text-6xl text-4xl md:py-8 py-4 transition duration-500" style={{fontFamily: 'Bebas Neue'}}>choose your martial arts training schedule</div>
        <p className="text-center dark:text-white tersembunyi-fade text-black font-medium lg:text-md md:text-sm text-xs leading-relaxed py-4 transition duration-500 max-w-7xl mx-auto" style={{fontFamily: 'Roboto'}}>Welcome to Knocknout King's Training Section. We are committed to providing high-quality training programs that empower individuals and organizations to achieve their goals. Below, you will find information about our training offerings, schedules, and how to enroll.</p>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 py-12 max-w-7xl mx-auto">

            {TrainingList.map((item,index) => (

                <div key={index} className="relative overflow-hidden tersembunyi-fade shadow-black shadow-lg w-full md:h-[350px] h-[250px] group">

                    <div className="absolute bg-black w-full h-full z-20 opacity-50"></div>

                    <img src={item.image} className="absolute group-hover:scale-105 transition duration-500 w-full h-full object-cover object-center" alt="" />

                    <div className="bottom-0 left-0 absolute z-20 px-3 py-3">
                        
                        <div className="text-white lg:text-5xl md:text-3xl text-2xl" style={{ fontFamily: 'Bebas Neue'}}>{item.name}</div>
                        <div className="text-white md:text-sm text-xs uppercase py-2 max-w-xs" style={{ fontFamily: 'Roboto'}}>{item.description}</div>
                        <Link href={item.href}>
                            <button className="text-white hover:text-black md:px-6 md:py-2 px-3 py-1 md:text-base text-sm opacity-0 group-hover:opacity-100 bg-red-600 hover:bg-white transition duration-500 uppercase">train now</button>
                        </Link>
                    </div>

                </div>

            ))}

        </div>

        </section>
    )
}

export default TrainingListandUserTrainingList;
