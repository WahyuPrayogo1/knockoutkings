"use client"
import Link from "next/link"
import { useState, useEffect, useRef } from "react";

export default function ArticleBts() {

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
            link: "/News/international-boxer",
            tittle: "International Boxing Stars Visit Knockout King's for Special Exhibition Matches ",
            caption: "Trending news about International  Boxing Stars Visit Knockout King's for Special Exhibition Matches",
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
        <section id="gallery" className="w-full py-10 -mt-2.5 dark:bg-[#121212] bg-[#f5f5f5] transition duration-500" ref={ref}>

        <div id="tittle" className="dark:text-white tersembunyi-hero transition duration-500 text-black mx-auto text-center uppercase lg:text-6xl text-4xl justify-center py-8 max-w-4xl" style={{fontFamily: 'Bebas Neue'}}>Behind the Gloves: Stories of Success from Knockout Kings' Rising Stars</div>

        <div className="flex flex-col-reverse lg:flex-row justify-between px-6 py-4 max-w-7xl mx-auto">

            <div className="flex lg:justify-start justify-center w-full text-black dark:text-white transition duration-500 tersembunyi-hero" id="hero-landing-left">

                <div className="flex flex-col justify-between">

                    <div className="py-4 flex flex-col justify-start">

                        <img src="/mike sparring.jpg" className="w-full h-80 object-cover py-4" alt="" />

                        <p className="lg:text-base text-sm leading-relaxed font-semibold" style={{fontFamily: 'Roboto'}}>Share with friends</p>

                        <div className="flex py-4 gap-5 flex-row items-center">
                            
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                            
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                            
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                            
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>

                        </div>

                    </div>

                    <div className="py-4 bg-black px-4 dark:bg-white flex flex-col justify-center max-w-xl gap-6 transition">

                        <h3 className="text-white dark:text-black py-4 lg:text-3xl text-xl font-bold transition text-center lg:text-left" style={{fontFamily: 'Roboto'}}>Other Articles</h3>

                        {otherArticles.map ((item, index) => (

                            <Link key={index} href={item.link}>
                            
                                <div  className="flex md:flex-row flex-col-reverse justify-center items-center gap-5 py-4">

                                    <div className="flex flex-col justify-center gap-3 text-white dark:text-black transition duration-500 max-w-xs">

                                    <h3 className="font-bold lg:text-base text-sm leading-relaxed md:text-left text-center" style={{fontFamily: 'Roboto'}}>{item.tittle}</h3>

                                        <p className="font-extralight lg:text-sm text-xs transition duration-500 text-white dark:text-black dark:font-light overflow-hidden leading-relaxed md:text-left text-center">{item.caption}</p>

                                    </div>

                                    <div>

                                        <img src={item.image} className="w-full sm:w-40 h-40 object-cover" />

                                    </div>

                                </div>

                            </Link>

                        ))}

                    </div>

                    <div className="py-4  flex flex-col justify-end">

                        <div className="flex gap-6">

                            <img src="/aku banget.jpg" alt="" className="w-14 h-14 object-cover rounded-full" />

                            <div className="flex flex-col gap-2 text-black dark:text-white lg:text-base text-sm transition duration-500" style={{fontFamily: 'Roboto'}}>

                                <h3 className="font-bold">Ethan Donovan</h3>

                                <h4 className="font-light">News Author</h4>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="flex justify-center w-full text-black dark:text-white transition duration-500 tersembunyi-hero" id="hero-landing-right">

                <div className="flex flex-col lg:justify-start lg:items-start items-center gap-4 py-8">

                    <div className="flex flex-row lg:justify-start justify-center lg:gap-6 gap-3 items-center">
                        <p className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black transition text-base leading-relaxed font-bold " style={{fontFamily: 'Roboto'}}>TRENDING NEWS</p>
                        <p className="text-base leading-relaxed font-bold" style={{fontFamily: 'Roboto'}}>November 10, 2023</p>
                    </div>

                    <h3 className="lg:text-3xl text-xl text-center lg:text-left font-bold leading-relaxed" style={{fontFamily: 'Roboto'}}>From the Streets to the Ring: The Remarkable Rise of Mike Tyson</h3>
                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>Many of Knockout Kings' rising stars have overcome challenging backgrounds, turning adversity into fuel for success. Mike Tyson, for instance, grew up in the tough streets of Philadelphia, where the odds were stacked against him.</p>
                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>Knockout Kings provided him with an opportunity to channel his energy positively. Through hard work and determination, he transformed his life, rising through the ranks and becoming a symbol of hope for his community.</p>
                    <img src="/behind the gloves.jpg" className="w-full h-80 object-cover py-4" alt="" />
                    <h3 className="lg:text-3xl text-xl text-center lg:text-left font-bold leading-relaxed" style={{fontFamily: 'Roboto'}}>Community Champions: Khabib Nurmagomedov Gives Back</h3>
                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>Knockout Kings' rising stars understand the significance of giving back to the communities that shaped them. Khabib Nurmagomedov has become a community champion, using his/her platform to inspire the next generation of aspiring boxers. Through outreach programs, motivational talks, and youth training initiatives, Khabib Nurmagomedov is contributing to the growth of the sport beyond the ring. </p>
                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>The stories behind Knockout Kings' rising stars serve as testaments to the transformative power of boxing. Beyond the dazzling knockouts and championship belts, there are tales of perseverance, mentorship, and community impact. These athletes embody the spirit of resilience, proving that success in the ring is as much about the battles fought outside it. As we continue to witness the ascent of Knockout Kings' rising stars, we are reminded that the true measure of a champion goes far beyond the gloves and into the heart of their journey. </p>
                    <img src="/Khabib-Nurmagomedov.jpg" className="w-full h-80 object-cover object-top py-4" alt="" />


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

