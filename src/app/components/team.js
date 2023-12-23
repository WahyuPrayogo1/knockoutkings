"use client"
import Link from "next/link"
import { useEffect, useState, useRef } from "react";

export default function Team() {

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

    const TeamBiodata = [
        {
            image: "/man-5.jpeg",
            name: "John Doe",
            position: "Head Trainer",
            description: "John Doe is a highly skilled boxing trainer  with over 10 years of experience",
        },
        {
            image: "/man-1.jpg",
            name: "Jane Smith",
            position: "Assistant Trainer",
            description: "Jane Smith is a dedicated assistant trainer who brings and enthuasiasm ro every season",
        },
        {
            image: "/man-2.jpg",
            name: "Mike Johnson",
            position: "Strength Coach",
            description: "Mike Johnson specializes in strength and  conditioning training for boxer of  all  levels",
        },
        {
            image: "/woman-2.jpg",
            name: "Sarah Davis",
            position: "Nutritionist",
            description: "Sarah Davis provides personalized nutrition plans to optimize performance  and recovery",
        },
        {
            image: "/man-3.jpg",
            name: "David Lee",
            position: "Sport Therapist",
            description: "David Lee specializes in sports therapy to  prevent and treat injuries in boxers",
        },
        {
            image: "/woman-1.jpg",
            name: "Emily Watson",
            position: "Boxing Coach",
            description: "Emily Wilson is a former professional  boxer who now shares her expertise with with aspiring fighters",
        },
        {
            image: "/man-4.jpg",
            name: "Michael Brown",
            position: "Youth Trainer",
            description: "Michael Brown is passionate about  teaching young boxers the fundamentals  of the sports",
        },
    ]

    return (
        <section id="gallery" className="pb-16 z-10 bg-[#f5f5f5] px-6 lg:px-12 -mt-2.5 w-full dark:bg-[#121212] transition duration-500" ref={ref}>

        <div className="dark:text-white tersembunyi-fade text-black transition duration-500 flex flex-row uppercase gap-2 lg:text-6xl text-4xl justify-center py-8" style={{fontFamily: 'Bebas Neue'}}>Meet our<h3>team</h3></div>
        <p className="text-center tersembunyi-fade lg:text-base md:text-sm text-xs dark:text-white text-black transition duration-500 font-medium mx-auto leading-relaxed px-6 max-w-7xl" style={{fontFamily: 'Roboto'}}>The heart of Knockout Kings is our dedicated team of professional trainers and staff who bring a wealth of experience and knowledge to the gym. They are passionate about boxing and are committed to helping you achieve your goals. Whether you're interested in improving your boxing skills, getting in shape, or just having fun while working out, our team is here to guide you.</p>

            <div className="flex flex-col justify-center mt-10 gap-6 items-center tersembunyi-fade">

                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  px-6 max-w-7xl lg:gap-6 gap-4">

                    {TeamBiodata.map((item, index) => (

                        <div key={index} style={{fontFamily: 'Roboto'}} className="text-white text-center mx-auto bg-red-600 md:px-4 md:py-4 px-3 py-2 shadow-black shadow-lg rounded-md hover:text-black hover:bg-white hover:scale-105 transition duration-500">
                            <img src={item.image} alt="" className="rounded-full w-20 h-20 object-cover mx-auto mt-8 mb-4"/>
                            <h3 className="font-bold mb-1 md:text-base text-sm">{item.name}</h3>
                            <h3 className="md:text-sm text-xs">{item.position}</h3>
                            <p className="md:text-sm text-xs mt-4">{item.description}</p>
                        </div>

                    ))}

                    <div id="card-8" style={{fontFamily: 'Roboto'}} className="text-white text-center mx-auto bg-green-600 md:px-4 md:py-4 px-3 py-2 shadow-black shadow-lg rounded-md hover:text-black hover:bg-white hover:scale-105 transition duration-500">
                        <img src="question.png" alt="" className="rounded-full w-20 h-20 object-contain mx-auto mt-8 mb-4"/>    
                        <h3 className="font-bold mb-1 md:text-base text-sm">We're Hiring</h3>
                        <h3 className="md:text-sm text-xs">Join our team and make a difference  in the boxing comunity, and make the  become the champions</h3>
                        <p className="md:text-sm text-xs mt-4">Open position</p>
                    </div>

                </div>

            </div>

            <div className="dark:text-white tersembunyi-fade transition duration-500 uppercase gap-2 lg:text-6xl text-center text-4xl mt-20 py-4" style={{fontFamily: 'Bebas Neue'}}>We're Hiring!</div>
            <p className="text-center tersembunyi-fade dark:text-white lg:text-md text-sm transition duration-500 mb-6 font-semibold" style={{fontFamily: 'Roboto'}}>Join our team and make a difference in the boxing comunity.</p>
            <Link href='/hiring' className="flex tersembunyi-fade justify-center"><button style={{fontFamily: 'Roboto'}} className="md:px-4 md:py-2 px-2 py-1 md:text-md text-sm outline-red-600 hover:text-white outline dark:text-white hover:outline-none hover:bg-red-600 font-medium hover:font-semibold transition duration-500">Open position</button></Link>
        </section>
    )
}