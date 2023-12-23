"use client"
import Link from "next/link"
import { useState, useEffect, useRef } from "react";

export default function ArticleTips() {

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

    const OtherArticle = [
        {
            link: "/News/mike_tyson",
            tittle: "How Mike Tyson is the new world champion.",
            caption: "Popular news about Mike Tyson achieve a great victory and be the world champion",
            image: "/mike sparring.jpg"
        },
        {
            link: "/News/tyson_fury",
            tittle: "How Tyson Fury Defeated Deontay  Wilder at New York America and be the world champion",
            caption: "Popular news about tyson fury succeded to defeat deontay wilder and be the world champion",
            image: "/tyson fury spar.jpg"
        },
        {
            link: "/News/daud_yordan",
            tittle: "How local boxer Daud 'Cino'  Yordan achieve stunning victory with knockout kings boxing center",
            caption: "Popular news about Daud Yordan achieve stunning victory with knockout kings boxing center.",
            image: "/daud yordan.jpg"
        },
        {
            link: "/News/kk-on-top",
            tittle: "Knockout King's is on top  a rising force in the world of fighting.",
            caption: "Hot news about Knockout King's is on top. a rising force in the world of fighting.",
            image: "/mma.webp"
        },
        {
            link: "/News/tank_davis",
            tittle: "How Knockout King's athlete be the world champion that makes history.",
            caption: "Popular news about how Gervonta 'Tank' Davis succeded to be the world champion and makes history",
            image: "/tank davis.jpg"
        },
        {
            link: "/News/bts",
            tittle: "Behind the Gloves: Stories of Success from Knockout King's Rising Stars",
            caption: "Trending news about Behind the Gloves : Stories of Success from Knockout King's Rising Stars",
            image: "/behind the gloves.jpg"
        },
        {
            link: "/News/international-boxer",
            tittle: "International Boxing Stars Visit  Knockout King's for Special  Exhibition Matches ",
            caption: "Trending news about International  Boxing Stars Visit Knockout King's  for Special Exhibition Matches ",
            image: "/boxing international.jpeg"
        },
        {
            link: "/News/palestine",
            tittle: "Knockout King's Extends a Helping Hand: Donating for Our Muslim  Brothers and Sisters in Palestine.",
            caption: "Trending news about Knockout King's Extends a Helping Hand:  Donating for Our People in Palestine.",
            image: "/Palestine.webp"
        },
    ]

    return (
        <section id="gallery" className="w-full -mt-2.5 py-10 dark:bg-[#121212] bg-[#f5f5f5] transition duration-500" ref={ref}>

        <div className="dark:text-white transition duration-500 text-black tersembunyi-footer text-center uppercase lg:text-6xl text-4xl justify-center py-8 max-w-4xl mx-auto" style={{fontFamily: 'Bebas Neue'}}>training tips for aspiring boxer from experts at knockout kings</div>

        <div className="flex justify-center lg:gap-20 gap-6 items-center tersembunyi-footer">

            <div>

                <h3 className="lg:text-base text-sm sm:flex lg:gap-3 gap-1.5 text-black dark:text-white leading-tight hidden" style={{fontFamily: 'Roboto'}}>AUTHOR: <p className="font-black"> Ethan Donovan</p> </h3>

            </div>

            <div>

                <h3 className="lg:text-base text-sm sm:flex lg:gap-3 gap-1.5 text-black dark:text-white leading-tight hidden" style={{fontFamily: 'Roboto'}}>PUBLISHED ON: <p className="font-black"> November 10, 2023</p> </h3>

            </div>

        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-40 gap-0 px-6 py-8" tersembunyi-footer>

            <div className="flex justify-start w-full text-black dark:text-white transition duration-500">

                <div className="flex flex-col items-center lg:items-center lg:justify-start justify-center">

                    <div className="lg:py-4">

                        <h3 className="text-4xl text-center lg:text-left leading-tight font-black" style={{fontFamily: 'Bebas Neue'}}>Master the Basics</h3>

                        <hr className="w-full h-0.5 bg-black border-none dark:bg-white transition duration-500 my-4"/>

                        <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed font-semibold" style={{fontFamily: 'Roboto'}}>Becoming a skilled boxer requires more than just throwing punches; it demands dedication, discipline, and a comprehensive training regimen. If you're an aspiring boxer looking to elevate your skills to championship levels, who better to turn to than the experts at Knockout Kings? In this article, we'll delve into the training tips provided by these seasoned professionals to help you step into the ring with confidence and skill.</p>

                    </div>

                </div>

            </div>

            <div className="flex justify-center w-full text-black dark:text-white transition duration-500">

                <div className="flex flex-col justify-start lg:gap-4 gap-2 lg:py-8 py-1">

                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>Before diving into advanced techniques, focus on mastering the fundamentals. Footwork, stance, and basic punches are the building blocks of boxing. According to Knockout Kings trainers, spending ample time perfecting these basics sets the foundation for advanced skills.</p>
                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>Endurance and stamina are crucial for any boxer. Knockout Kings emphasizes the importance of cardiovascular conditioning, including running, jump rope exercises, and high-intensity interval training (HIIT). Building a strong cardiovascular foundation ensures you can maintain peak performance throughout a match.</p>
                
                </div>

            </div>

            <div className="flex justify-end w-full text-black dark:text-white transition duration-500">

                <div className="flex flex-col justify-start lg:py-4 py-1">
    
                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>While strength and speed are valuable assets, technical proficiency is what truly sets champions apart. Work on perfecting your jab, cross, hook, and uppercut under the guidance of experienced trainers. Pay attention to proper form and precision to maximize the impact of each punch.</p>

                <div className="w-full">

                    <img src="/boxing training.jpg" className="h-[220px] object-cover w-full" alt="" />

                </div>

                </div>

            </div>

        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-40 gap-0 px-6 py-8 tersembunyi-footer">

            <div className="flex flex-col w-full items-center lg:items-center lg:justify-start justify-center">

                <div className="flex flex-col justify-start text-black dark:text-white">

                    <div className="lg:py-4">

                        <h3 className="text-4xl text-center  lg:text-left leading-tight font-black" style={{fontFamily: 'Bebas Neue'}}>Sparring Sessions</h3>

                        <hr className="w-full h-0.5 bg-black border-none dark:bg-white transition duration-500 my-4"/>

                        <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed font-semibold" style={{fontFamily: 'Roboto'}}>Becoming a skilled boxer requires more than just throwing punches; it demands dedication, discipline, and a comprehensive training regimen. If you're an aspiring boxer looking to elevate your skills to championship levels, who better to turn to than the experts at Knockout Kings? In this article, we'll delve into the training tips provided by these seasoned professionals to help you step into the ring with confidence and skill.</p>

                    </div>

                </div>

            </div>

            <div className="flex justify-center w-full text-black dark:text-white transition duration-500">

                <div className="flex flex-col justify-start lg:gap-4 gap-2 lg:py-8 py-1">

                    <p className="lg:text-base text-sm lg:text-left text-justify" style={{fontFamily: 'Roboto'}}>Engaging in controlled sparring sessions is a vital aspect of a boxer's training routine. Knockout Kings experts recommend regular sparring to develop your defensive skills, adaptability, and strategic thinking in a real-time scenario. This hands-on experience is invaluable for refining your technique and learning to read your opponent.</p>
                    <p className="lg:text-base text-sm lg:text-left text-justify" style={{fontFamily: 'Roboto'}}>Incorporate strength training to enhance your overall power and resilience. Knockout Kings trainers suggest a combination of weightlifting, bodyweight exercises, and plyometrics to build strength without sacrificing agility. A well-rounded strength and conditioning program also helps prevent injuries and accelerates recovery.</p>
                
                </div>

            </div>
            

            <div className="flex justify-end w-full text-black lg:py-8 dark:text-white transition duration-500">

                <div className="flex flex-col gap-2 justify-start lg:py-4 py-1">

                    
                <p className="lg:text-base text-sm lg:text-left text-justify" style={{fontFamily: 'Roboto'}}>Boxing is as much a mental game as it is physical. The experts at Knockout Kings emphasize the importance of developing mental toughness to withstand the challenges of the ring. Visualization, meditation, and focus drills can help you stay calm under pressure and maintain a strategic mindset during a match.</p>
                <p className="lg:text-base text-sm lg:text-left text-justify" style={{fontFamily: 'Roboto'}}>Your training is only as effective as your ability to recover. Knockout Kings stresses the significance of proper nutrition and recovery strategies. Adequate hydration, a balanced diet rich in protein and essential nutrients, and sufficient sleep are all crucial elements to support your training efforts and ensure optimal performance.</p>

                </div>

            </div>

        </div>

        <div className="flex justify-end px-6 -mt-8 tersembunyi-footer">

            <img src="/boxing-training.jpg" className="h-[320px] object-cover w-[815px]" alt="" />

        </div>

        <div className="flex flex-col lg:flex-row justify-between lg:gap-40 gap-0 px-6 py-8 tersembunyi-footer">

            <div className="flex justify-start w-full text-black dark:text-white transition duration-500">

                <div className="flex flex-col items-center lg:items-center lg:justify-start justify-center">

                    <div className="lg:py-4">

                        <h3 className="text-4xl text-center lg:text-left leading-tight font-black" style={{fontFamily: 'Bebas Neue'}}>Continuous Learning</h3>

                        <hr className="w-full h-0.5 bg-black border-none dark:bg-white transition duration-500 my-4"/>

                        <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed font-semibold" style={{fontFamily: 'Roboto'}}>Becoming a skilled boxer requires more than just throwing punches; it demands dedication, discipline, and a comprehensive training regimen. If you're an aspiring boxer looking to elevate your skills to championship levels, who better to turn to than the experts at Knockout Kings? In this article, we'll delve into the training tips provided by these seasoned professionals to help you step into the ring with confidence and skill.</p>

                    </div>

                </div>

            </div>

            <div className="flex justify-center w-full text-black dark:text-white transition duration-500">

                <div className="flex flex-col justify-start lg:gap-4 gap-2 lg:py-8 py-1">

                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>Your training is only as effective as your ability to recover. Knockout Kings stresses the significance of proper nutrition and recovery strategies.</p>
                    
                    <div className="w-full">

                        <img src="/boxer-training.jpg" className="h-[220px] object-cover w-full" alt="" />

                    </div>
                    
                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>Adequate hydration, a balanced diet rich in protein and essential nutrients, and sufficient sleep are all crucial elements to support your training efforts and ensure optimal performance.</p>
                
                </div>

            </div>

            <div className="flex justify-end w-full text-black dark:text-white transition duration-500">

                <div className="flex flex-col justify-start lg:gap-4 gap-2 lg:py-8 py-1">
    
                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>Even the most seasoned boxers continue to learn and evolve. Knockout Kings encourages aspiring boxers to stay open to new techniques, strategies, and training methods.</p>
                    
                    <div className="w-full">

                        <img src="/samsak.jpg" className="h-[220px] object-cover w-full" alt="" />

                    </div>
                    
                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>Becoming a successful boxer is a journey that requires dedication, perseverance, and the right guidance. The training tips provided by the experts at Knockout Kings encompass a holistic approach, addressing both the physical and mental aspects of the sport. So, lace up your gloves, embrace the challenge, and start your journey towards becoming a true knockout king or queen.</p>

                </div>

            </div>

        </div>

        <h3 className="text-black dark:text-white text-center py-4 lg:text-3xl text-xl font-bold transition tersembunyi-footer" style={{fontFamily: 'Roboto'}}>Other Articles</h3>


        <div className="py-4 bg-black px-4 dark:bg-white grid grid-cols-1 md:grid-cols-2 tersembunyi-footer lg:grid-cols-4 w-full gap-6 transition">

            {OtherArticle.map((item, index) => (

                <Link key={index} href={item.link}>

                    <div  className="flex flex-col-reverse justify-between py-4">

                        <div className="flex flex-col justify-between text-center py-4 gap-2 text-white dark:text-black transition duration-500">

                            <h3 className="font-bold lg:text-base text-sm leading-relaxed" style={{fontFamily: 'Roboto'}}>{item.tittle}</h3>

                            <p className="font-extralight transition duration-500 text-white lg:text-sm text-xs dark:text-black dark:font-light overflow-hidden leading-relaxed">{item.caption}</p>

                        </div>

                        <div>

                            <img src={item.image} className="w-full h-60 object-cover" />

                        </div>

                    </div>

                </Link>

                ))}

        </div>

        <Link href="/News" className="" style={{fontFamily: 'Roboto'}}>

            <div className="flex justify-start gap-2 items-center px-6 py-4 text-black dark:text-white transition duration-500 group">
            
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:-translate-x-1 transition">
                <   path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>

                <p> Back To News</p> 

            </div>

        </Link>

        </section>
    )
}