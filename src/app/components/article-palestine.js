"use client"
import Link from "next/link"
import { useState, useEffect, useRef } from "react";

export default function ArticlePalestine() {

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

    const otherArticles = [
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
            link: "/News/tips",
            tittle: "Training Tips for Aspiring Boxers From the Experts at Knockout Kings.",
            caption: "Trending news about Training Tips for Aspiring  Boxers From the Experts at Knockout Kings.",
            image: "/boxing training.jpg"
        },
        {
            link: "/News/bts",
            tittle: "Behind the Gloves: Stories of Success from Knockout King's Rising Stars",
            caption: "Trending news about Behind the Gloves : Stories of Success from Knockout King's Rising Stars",
            image: "/behind the gloves.jpg"
        },
        {
            link: "/News/international-boxer",
            tittle: "International Boxing Stars Visit Knockout King's for Special Exhibition Matches ",
            caption: "Trending news about International  Boxing Stars Visit Knockout King's for Special Exhibition Matches",
            image: "/boxing international.jpeg"
        },
    ]

    return (
        <section id="gallery" className="w-full py-10 -mt-2.5 dark:bg-[#121212] bg-[#f5f5f5] transition duration-500" ref={ref}>

        <div className="flex flex-col lg:flex-row lg:items-start items-center justify-between gap-32 px-6 py-4 max-w-7xl mx-auto">

            <div id="hero-landing-left" className="tersembunyi-hero flex justify-start w-full text-black dark:text-white transition duration-500">

                <div className="flex flex-col justify-start gap-4 py-8">

                        <div className="flex flex-col justify-start items-center">
                            <h3 className="dark:text-white flex flex-col justify-start transition duration-500 text-black lg:text-left uppercase text-center lg:text-6xl text-4xl  py-8 max-w-4xl mx-auto" style={{fontFamily: 'Bebas Neue'}}>Knockout Kings Extends a Helping Hand: Donating for Our Muslim Brothers and Sisters in Palestine</h3>

                                <div className="flex justify-start items-center gap-6">
                                    <p className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black transition lg:text-base text-sm leading-relaxed font-bold " style={{fontFamily: 'Roboto'}}>TRENDING NEWS</p>
                                    <p className="lg:text-base text-sm leading-relaxed font-bold" style={{fontFamily: 'Roboto'}}>November 10, 2023</p>
                                </div>
                        </div>

                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>In a powerful display of compassion and solidarity, Knockout Kings, the renowned boxing institution, is reaching beyond the ring to extend a helping hand to our Muslim brothers and sisters in Palestine. Recognizing the urgency of the situation and the impact it has on families and communities, Knockout Kings has pledged support through a heartfelt initiative aimed at making a difference. This article explores the significance of this charitable endeavor and the positive impact it aims to create.</p>
                    <h3 className="lg:text-3xl text-xl lg:text-left text-center font-bold leading-relaxed" style={{fontFamily: 'Roboto'}}>A Global Community Unites</h3>
                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>The situation in Palestine has garnered attention and concern from people worldwide, transcending geographic boundaries. Knockout Kings, with its global influence, recognizes the responsibility to contribute to the well-being of those affected. By leveraging its platform, the institution aims to unite the global boxing community and beyond in a collective effort to bring relief and support to our Muslim brothers and sisters in Palestine.</p>
                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>Knockout Kings, known for its commitment to excellence in the sport of boxing, is stepping beyond the confines of the ring to make a meaningful impact on real-world issues. The initiative to support Palestine reflects the institution's dedication to being a force for positive change, demonstrating that the spirit of charity and compassion is as crucial as the pursuit of athletic achievement.</p>
                    <img src="/palestine.jpg" className="w-full h-80 object-cover py-4" alt="" />
                    <h3 className="lg:text-3xl text-xl lg:text-left text-center font-bold leading-relaxed" style={{fontFamily: 'Roboto'}}>Raising Awareness and Funds</h3>
                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>Knockout Kings is not merely offering symbolic support; the institution is actively engaged in raising awareness and funds for the cause. Through a combination of charity events, donation drives, and collaborative efforts with partners, Knockout Kings aims to make a tangible difference in the lives of those affected by the challenges in Palestine. The funds raised will be directed towards humanitarian aid, medical assistance, and community support initiatives.</p>
                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>As athletes and fans alike look up to institutions like Knockout Kings, this initiative serves as an inspiration for individuals to contribute in their own capacity. By aligning the values of sportsmanship, discipline, and compassion, Knockout Kings is setting an example for the broader community, encouraging everyone to join hands and make a positive impact, regardless of their background or affiliation.</p>
                    <img src="/Palestine.webp" className="w-full h-96 object-cover object-top py-4" alt="" />
                    <h3 className="lg:text-3xl text-xl lg:text-left text-center font-bold leading-relaxed" style={{fontFamily: 'Roboto'}}>A Message of Hope and Solidarity</h3>
                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>Beyond the financial support, Knockout Kings is sending a powerful message of hope and solidarity to the people of Palestine. By standing together in the face of adversity, the global community, led by institutions like Knockout Kings, is expressing its unwavering support for the rights and well-being of our Muslim brothers and sisters. This message transcends borders, fostering a sense of unity and shared humanity.</p>
                    <img src="/solidarity.jpg" className="w-full h-96 object-cover object-top py-4" alt="" />


                </div>

            </div>

            <div id="hero-landing-right" className="flex tersembunyi-hero lg:justify-end justify-center w-full text-black dark:text-white transition duration-500">

                <div className="flex flex-col justify-start gap-10">

                    <div className="py-4 flex flex-col justify-start bg-black dark:bg-white max-w-xl transition px-6">

                        <div className="flex justify-start items-center gap-8">

                            <img src="/aku banget.jpg" alt="" className="w-28 h-28 object-cover rounded-full" />

                            <div className="flex flex-col text-white gap-2 dark:text-black transition duration-500">

                                <h3 className="font-bold lg:text-base text-sm uppercase" style={{fontFamily: 'Roboto'}}>about the author</h3>

                                <h4 className="font-light lg:text-3xl text-xl">Mia Sterling</h4>

                            </div>

                        </div>


                        <div className="flex py-4 gap-5 flex-row items-center">

                            <p className="lg:text-base text-sm leading-relaxed  text-white dark:text-black" >Mia is a UI/UX Designer based in Orange County, California. With dreams of moving to San Francisco. He is an avid user of avid user of Adobe products, especially XD and Illustrator</p>

                        </div>

                    </div>

                    <div className="py-4 bg-black px-4 dark:bg-white flex flex-col justify-center max-w-xl gap-6 transition">

                        <h3 className="text-white dark:text-black py-4 lg:text-3xl text-xl font-bold transition text-center lg:text-left" style={{fontFamily: 'Roboto'}}>Other Articles</h3>

                        {otherArticles.map ((item, index) => (

                            <Link key={index} href={item.link}>
                            
                                <div className="flex md:flex-row flex-col-reverse justify-center items-center gap-5 py-4">

                                    <div className="flex flex-col justify-center gap-3 text-white dark:text-black transition duration-500 max-w-xs">

                                    <h3 className="font-bold lg:text-base text-sm leading-relaxed md:text-left text-center" style={{fontFamily: 'Roboto'}}>{item.tittle}</h3>

                                        <p className="font-extralight transition duration-500 lg:text-sm text-xs text-white dark:text-black dark:font-light overflow-hidden leading-relaxed md:text-left text-center">{item.caption}</p>

                                    </div>

                                    <div>

                                        <img src={item.image} className="w-full sm:w-40 h-40 object-cover" />

                                    </div>

                                </div>

                            </Link>

                        ))}

                    </div>

                </div>

            </div>

        </div>


        <Link href="/News" className="" style={{fontFamily: 'Roboto'}}>

            <div className="flex justify-start gap-2 items-center px-6 py-4 text-black dark:text-white transition duration-500 group tersembunyi-hero" id="hero-landing-left">
            
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:-translate-x-1 transition">
                <   path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>

                <p className="lg:text-base text-sm"> Back To News</p> 

            </div>

        </Link>

        </section>
    )
}

