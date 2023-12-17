"use client"

import Link from "next/link"

export default function Empower() {
    return (
        <section className="bg-[#f5f5f5] dark:bg-[#121212] lg:px-12 py-12 px-6 -my-5 transition duration-500">

            <div className="flex flex-col sm:flex-col lg:flex-row md:flex-row justify-between gap-6 lg:gap-none items-start max-w-7xl mx-auto">

                <div className="flex flex-col justify-start lg:items-start md:items-start items-center lg:gap-6 md:gap-4 sm:gap-2 gap-1 max-w-xl mx-auto" id="hero-left">

                    <h3 className="lg:text-3xl text-xl" style={{fontFamily: 'Bebas Neue', color: 'red'}}>Empower</h3>

                    <h1 className="text-black dark:text-white lg:text-5xl text-4xl  mx-auto lg:text-left md:text-left sm:text-left text-center transition duration-500" style={{fontFamily: 'Bebas Neue'}}>Unlock your full potential with martial arts</h1>

                    <div className="flex justify-start items-center gap-3">

                        <Link href='/Training'>

                            <button className="lg:px-6 lg:py-3 lg:text-base text-sm px-3 py-2 border-black border text-black dark:text-white dark:border-white transition duration-500">Enroll</button>

                        </Link>

                        <Link href="/About">

                            <button className="lg:px-6 lg:py-3 lg:text-base text-sm px-3 py-2 text-black dark:text-white transition duration-500 flex justify-center items-center group gap-3">Learn More
                            
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-black dark:text-white group-hover:translate-x-1 transition duration-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            
                            </button>

                        </Link>

                    </div>

                </div>

                <div id="hero-right" className="flex flex-col justify-start items-start max-w-2xl">

                    <div className="flex flex-col justify-start items-start gap-4">

                        <div className="flex justify-start items-start gap-12">

                            <div className="flex flex-col justify-start items-center gap-3">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 text-black dark:text-white transition duration-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>

                                <hr className="w-1 h-20 bg-black dark:bg-white transition duration-500"/>

                            </div>

                            <div className="flex flex-col justify-start items-start gap-4 text-black dark:text-white transition duration-500" style={{fontFamily: 'Roboto'}}>

                                <h1 className="lg:text-lg md:text-md text-sm font-bold">Enrollment Process</h1>
                                <h1 className="lg:text-left text-left lg:text-base md:text-sm text-xs md:text-left">Join our martial arts community and start your journey towards personal growth and self-defense.</h1>


                            </div>

                        </div>
                        <div className="flex justify-start items-start gap-12">

                            <div className="flex flex-col justify-start items-center gap-3">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 text-black dark:text-white transition duration-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>

                                <hr className="w-1 h-20 bg-black dark:bg-white transition duration-500"/>

                            </div>

                            <div className="flex flex-col justify-start items-start gap-4 text-black dark:text-white transition duration-500" style={{fontFamily: 'Roboto'}}>

                                <h1 className="lg:text-lg md:text-md text-sm font-bold">Training Benefits</h1>
                                <h1 className="lg:text-left text-left lg:text-base md:text-sm text-xs md:text-left">Improve your fitness, discipline, focus, and self-confidence through martial arts training.</h1>


                            </div>

                        </div>
                        <div className="flex justify-start items-start gap-12">

                            <div className="flex flex-col justify-start items-center gap-3">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 text-black dark:text-white transition duration-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>

                                <hr className="w-1 h-20 bg-black dark:bg-white transition duration-500"/>

                            </div>

                            <div className="flex flex-col justify-start items-start gap-4 text-black dark:text-white transition duration-500" style={{fontFamily: 'Roboto'}}>

                                <h1 className="lg:text-lg md:text-md text-sm font-bold">Class Structure</h1>
                                <h1 className="lg:text-left text-left lg:text-base md:text-sm text-xs md:text-left">Experience well-organized and engaging classes led by our experienced instructors.</h1>


                            </div>

                        </div>
                        <div className="flex justify-start items-start gap-12">

                            <div className="flex flex-col justify-start items-center gap-3">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 text-black dark:text-white transition duration-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>

                                <hr className="w-1 h-20 bg-black dark:bg-white transition duration-500"/>

                            </div>

                            <div className="flex flex-col justify-start items-start gap-4 text-black dark:text-white transition duration-500" style={{fontFamily: 'Roboto'}}>

                                <h1 className="lg:text-lg md:text-md text-sm font-bold">Progression System</h1>
                                <h1 className="lg:text-left text-left lg:text-base md:text-sm text-xs md:text-left">Our structured curriculum allows you to advance through the ranks and achieve your goals.</h1>


                            </div>

                        </div>

                    </div>
                    
                </div>

            </div>

        </section>
    )
}