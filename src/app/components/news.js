"use client"
import Link from "next/link"
import { useState, useEffect, useRef } from "react";

export default function News() {

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
        <section id="gallery" className="w-full -mt-2.5 bg-[#f5f5f5] px-6 transition duration-500 dark:bg-[#121212] overflow-x-hidden" ref={ref}>

        <div id="tittle" className="dark:text-white tersembunyi-hero text-black text-center hidden lg:block transition duration-500 uppercase md:text-6xl text-4xl justify-center py-8" style={{fontFamily: 'Bebas Neue'}}>news</div>

        <div className="flex flex-col lg:flex-row justify-center items-center max-w-7xl mx-auto">

            <div id="hero-landing-left" className="max-w-3xl tersembunyi-hero">

                    <div className="flex-col px-6 py-4 lg:border-r border-b lg:border-b-transparent border-r-black dark:border-r-white border-b-black transition duration-500">

                        <div>

                            <div className="dark:text-white text-black transition duration-500 text-center text-4xl lg:text-left uppercase lg:text-6xl py-4" style={{fontFamily: 'Bebas Neue'}}>popular news</div>

                        </div>

                        <Link href="/News/mike_tyson">

                            <div className="flex flex-col lg:flex-row gap-5 items-center py-4 group">

                                <div className="z-30 shadow-black shadow-lg">

                                    <div className="border-black dark:border-white border h-[275px] absolute -z-10  group-hover:translate-x-2 group-hover:translate-y-6 opacity-0 group-hover:opacity-100 transition duration-500 w-[275px] hidden lg:block"></div>

                                    <div className="relative overflow-hidden">

                                        <img src="mike sparring.jpg" alt="" className="h-72 group-hover:scale-105 transition object-cover duration-500 w-[400px]"/>

                                    </div>

                                </div>

                                <div className="flex flex-col gap-5 items-center lg:items-start">

                                    <div>

                                        <div className="lg:text-5xl text-black dark:text-white text-3xl transition duration-500 font-black text-center lg:text-left leading-relaxed" style={{fontFamily: 'Bebas Neue'}}>MIKE TYSON IS THE NEW WORLD CHAMPION</div>

                                    </div>

                                    <hr className="bg-black dark:bg-white transition duration-500 w-full h-0.5 border-none"/>
                                    
                                    <div className="flex gap-3">

                                        <img src="aku banget.jpg" alt="" className="w-14 h-14 object-cover" />

                                        <div className="flex flex-col gap-2 md:text-base text-sm justify-center text-black dark:text-white transition duration-500" style={{fontFamily: 'Roboto'}}>

                                            <h3 className="font-bold">Alexander Reynolds</h3>

                                            <h4 className="font-light">News Author</h4>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </Link>

                        <Link href="/News/tyson_fury">

                            <div className="flex flex-col lg:flex-row-reverse gap-5 items-center py-6 group">

                                <div className="z-30 shadow-black shadow-lg">

                                    <div className="border-black dark:border-white border absolute h-[275px] -z-10 group-hover:translate-x-2 group-hover:translate-y-6 opacity-0 group-hover:opacity-100 transition duration-500 w-[285px] hidden lg:block"></div>

                                <div className="relative overflow-hidden">

                                    <img src="tyson fury spar.jpg" alt="" className="h-72 object-cover group-hover:scale-105 transition duration-500 w-[400px]"/>

                                </div>

                                </div>

                                <div className="flex flex-col gap-5 items-center lg:items-start">

                                    <div>

                                        <div className="lg:text-5xl text-black dark:text-white text-3xl transition duration-500 font-black text-center lg:text-left" style={{fontFamily: 'Bebas Neue'}}>Tyson Fury defeated Deontay Wilder</div>

                                    </div>

                                    <hr className="bg-black dark:bg-white transition duration-500 w-full h-0.5 border-none"/>
                                    
                                    <div className="flex gap-3">

                                        <img src="aku banget.jpg" alt="" className="w-14 h-14 object-cover" />

                                        <div className="flex flex-col gap-2 md:text-base text-sm justify-center text-black dark:text-white transition duration-500" style={{fontFamily: 'Roboto'}}>

                                            <h3 className="font-bold">Jackson Mercer</h3>

                                            <h4 className="font-light">News Author</h4>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </Link>

                        <Link href="/News/daud_yordan">

                            <div className="flex flex-col gap-5 items-center py-6 group">

                                <div className="z-30 shadow-black shadow-lg">

                                    <div className="border-black dark:border-white border absolute h-[275px] -z-10 group-hover:translate-x-2 group-hover:translate-y-6 opacity-0 group-hover:opacity-100 transition duration-500 w-[600px] hidden lg:block"></div>

                                <div className="relative overflow-hidden">

                                    <img src="daud yordan.jpg" alt="" className="h-72 object-cover group-hover:scale-105 transition duration-500 w-[600px]"/>

                                </div>

                                </div>

                                <div className="flex flex-col gap-5 text-black dark:text-white transition duration-500">

                                    <div className="gap-5">

                                        <div className="lg:text-5xl text-black dark:text-white text-3xl transition duration-500 font-black text-center lg:text-center uppercase" style={{fontFamily: 'Bebas Neue'}}>Local Boxer Achieves Stunning Victory with <p> Knockout Kings Boxing Center Training</p></div>

                                        <div className="leading-relaxed text-black dark:text-white transition duration-500 text-justify lg:text-left lg:text-base text-sm" style={{fontFamily: 'Roboto'}}>In the world of professional boxing, reaching the pinnacle of the sport and becoming a world champion is an accomplishment that only a select few achieve. Daud "Cino" Yordan, the Indonesian boxing sensation, recently etched his name in the annals of boxing history as he succeeded in becoming a world champion. His journey is nothing short of remarkable, marked by dedication, perseverance, and an unrelenting passion for the sweet science Daud Yordan, hailing ...<p className="font-bold underline"> More</p></div>

                                    </div>

                                    
                                    <div className="flex gap-3 justify-center py-4">

                                        <img src="aku banget.jpg" alt="" className="w-14 h-14 object-cover" />

                                        <div className="flex flex-col gap-2 md:text-base text-sm justify-center text-black dark:text-white transition duration-500" style={{fontFamily: 'Roboto'}}>

                                            <h3 className="font-bold">Samuel Whitman</h3>

                                            <h4 className="font-light">News Author</h4>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </Link>

                </div>

            </div>

            <div id="hero-landing-right" className="max-w-lg tersembunyi-hero">

                <div className="flex-col px-6 py-4">

                    <div>

                        <div className="dark:text-white transition duration-500 text-black text-center text-4xl lg:text-left uppercase lg:text-6xl py-4" style={{fontFamily: 'Bebas Neue',}}>hot news</div>

                    </div>

                    <Link href="/News/kk-on-top">

                        <div className="flex flex-col gap-5 items-center py-4 group">

                            <div className="z-30 shadow-black shadow-lg">

                                <div className="border-black dark:border-white border h-[275px] absolute -z-10 group-hover:translate-x-2 group-hover:translate-y-6 opacity-0 group-hover:opacity-100 transition duration-500 w-[450px] hidden lg:block"></div>

                                <div className="relative overflow-hidden">

                                <img src="mma.webp" alt="" className="h-72 object-cover group-hover:scale-105 transition duration-500 w-[450px]"/>

                            </div>

                            </div>

                            <div className="flex flex-col gap-5 items-center lg:items-start">

                                <div className="text-black dark:text-white transition duration-500">

                                    <div className="lg:text-5xl text-black dark:text-white text-3xl transition duration-500 font-black text-center lg:text-left uppercase" style={{fontFamily: 'Bebas Neue'}}>knockout kings is on top: <p>A Rising Force in the World of Fighting</p></div>

                                    <div className="leading-relaxed text-black dark:text-white transition duration-500 text-justify lg:text-left lg:text-base text-sm">In the world of professional boxing, one name has been making waves and capturing the attention of fight fans and critics alike: Knockout Kings. This rising force in the boxing world has consistently demonstrated excellence ... <p className="font-bold underline">More</p></div>

                                </div>
                                
                                <div className="flex justify-between w-full items-center py-4">

                                    <div className="flex justify-start gap-2">

                                        <img src="aku banget.jpg" alt="" className="w-14 h-14 object-cover" />

                                            <div className="flex flex-col gap-2 md:text-base text-sm justify-center text-black dark:text-white transition duration-500" style={{fontFamily: 'Roboto'}}>

                                                <h3 className="font-bold">Muhammad Iqbal Alghifari</h3>

                                                <h4 className="font-light">News Author</h4>

                                            </div>

                                    </div>

                                    <div className="flex justify-end gap-5">

                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-black dark:text-white transition duration-500"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>

                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-black dark:text-white transition duration-500"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                        </svg>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </Link>

                    <Link href="/News/tank_davis">

                        <div className="flex flex-col gap-5 items-center py-4 group">

                            <div className="z-30 shadow-black shadow-lg">

                                <div className="border-black dark:border-white border h-[275px] absolute -z-10 group-hover:translate-x-2 group-hover:translate-y-6 opacity-0 group-hover:opacity-100 transition duration-500 w-[450px] hidden lg:flex"></div>

                                <div className="relative overflow-hidden">

                                <img src="tank davis.jpg" alt="" className="h-72 object-cover group-hover:scale-105 transition duration-500 w-[450px]"/>

                            </div>

                            </div>

                            <div className="flex flex-col gap-5 items-center lg:items-start">

                                <div>

                                    <div className="lg:text-5xl text-black dark:text-white text-3xl transition duration-500 font-black text-center lg:text-left uppercase" style={{fontFamily: 'Bebas Neue'}}>Knockout King's<p> Champion Makes Boxing History!</p></div>

                                    <div className="leading-relaxed text-black dark:text-white transition duration-500 text-justify lg:text-left lg:text-base text-sm" style={{fontFamily: 'Roboto'}}>In an electrifying turn of events, the Knockout Kings Boxing Center has crowned its newest champion, sending shockwaves through the world of boxing. Rising star, Gervonta "Tank" Davis, etched his name ... <p className="font-bold underline">More</p></div>

                                </div>
                                
                                <div className="flex justify-between w-full items-center py-4">

                                    <div className="flex justify-start gap-2">

                                        <img src="aku banget.jpg" alt="" className="w-14 h-14 object-cover" />

                                            <div className="flex flex-col gap-2 md:text-base text-sm justify-center text-black dark:text-white transition duration-500" style={{fontFamily: 'Roboto'}}>

                                                <h3 className="font-bold">Charlotte Hayes</h3>

                                                <h4 className="font-light">News Author</h4>

                                            </div>

                                    </div>

                                    <div className="flex justify-end gap-5">

                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-black dark:text-white transition duration-500"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>

                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-black dark:text-white transition duration-500"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                        </svg>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </Link>

                </div>

            </div>

        </div>

        </section>
    )
}

