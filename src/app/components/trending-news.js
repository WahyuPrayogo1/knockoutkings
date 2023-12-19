"use client"
import Link from "next/link"


export default function TrendingNews() {

    return (
        <section id="gallery" className="w-full px-6 py-10 -mt-2.5 dark:bg-[#121212] bg-[#f5f5f5] transition duration-500">

        <div className="dark:text-white transition duration-500 text-black text-center uppercase lg:text-6xl text-4xl justify-center py-8" style={{fontFamily: 'Bebas Neue'}}>Trending News</div>

        <div className="flex flex-col lg:flex-row justify-between gap-10 items-start px-6 max-w-7xl mx-auto">

            <div className="flex justify-start w-full text-black dark:text-white transition duration-500">

                <div className="flex flex-col justify-start">

                    <Link href="/News/tips">

                    <div className="py-4">

                        <div className="lg:text-4xl text-3xl lg:text-left text-center leading-tight font-black" style={{fontFamily: 'Bebas Neue'}}>Training Tips for Aspiring Boxers: From the Experts at Knockout Kings</div>

                        <div className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>In this informative blog post, we'll delve into the world of boxing training with expert tips and advice from the trainers at Knockout Kings. Learn about the fundamentals of boxing, strength and conditioning...<p className="font-bold underline">More</p> </div>

                        <div className="flex py-4 justify-between items-center">

                            <hr className="sm:w-[250px] w-[220px] h-0.5 bg-black hidden md:flex border-none dark:bg-white transition duration-500"/>

                            <p className="text-xs hidden md:flex" style={{fontFamily: 'Roboto'}}>8 Minutes Read</p>


                        </div>

                    </div>

                    </Link>

                    <Link href='/News/bts'>

                    <div>

                        <div className="lg:text-4xl text-3xl lg:text-left text-center leading-tight font-black" style={{fontFamily: 'Bebas Neue'}}>Behind the Gloves: Stories of Success <p>from Knockout Kings' Rising Stars</p></div>

                        <div className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>Get inspired by the incredible journeys of some of Knockout Kings' most promising talents. This blog post will feature interviews...<p className="font-bold underline">More</p> </div>

                        <div className="flex py-10 justify-between items-center">


                            <div className="flex justify-start gap-2">

                            <img src="aku banget.jpg" alt="" className="w-14 h-14 rounded-full object-cover" />

                                <div className="flex flex-col justify-center md:text-base text-sm gap-2" style={{fontFamily: 'Roboto'}}>

                                    <h3 className="font-bold">Ethan Donovan</h3>

                                    <h4 className="font-light">News Author</h4>

                                </div>

                            </div>

                            <div className="flex justify-end gap-5">

                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>

                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>

                            </div>


                        </div>

                    </div>

                    </Link>

                </div>

            </div>

            <div className="flex justify-center w-full text-black dark:text-white transition duration-500">

                <Link href='/News/international-boxer'>

                <div className="flex flex-col justify-start group">

                    <div className="relative overflow-hidden rounded-lg w-full h-full">

                        <img src="boxing international.jpeg" alt="" className="object-cover  my-4 group-hover:scale-105 transition duration-500"/>
                        
                    </div>

                        <div className="lg:text-4xl text-3xl lg:text-left text-center leading-tight font-black" style={{fontFamily: 'Bebas Neue'}}>International Boxing Stars Visit <p >Knockout Kings for Special Exhibition Matches</p></div>

                        <div className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>Excitement is brewing as Knockout Kings hosts a series of special exhibition matches featuring international boxing stars. This news article will provide details about the visiting athletes, the matchups, and the anticipated showdowns. Fans can look forward to witnessing world-class boxing action right in their own backyard.</div>

                    <div className="flex py-10 justify-between items-center">

                            <div className="flex justify-start gap-2">

                            <img src="aku banget.jpg" alt="" className="w-14 h-14 rounded-full object-cover" />

                                <div className="flex flex-col justify-center md:text-base text-sm gap-2" style={{fontFamily: 'Roboto'}}>

                                    <h3 className="font-bold">Lucas Parker</h3>

                                    <h4 className="font-light">News Author</h4>

                                </div>

                            </div>

                            <div className="flex justify-end gap-5">

                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>

                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>

                            </div>


                        </div>
                
                </div>

                </Link>

            </div>

            <div className="flex justify-end w-full text-black dark:text-white transition duration-500">

                <Link href="/News/palestine">

                <div className="flex flex-col justify-start group">

                    <div>

                        <div className="lg:text-4xl text-3xl lg:text-left text-center leading-tight font-black" style={{fontFamily: 'Bebas Neue'}}>Knockout Kings Extends a Helping Hand: <p>Donating for Our Muslim Brothers and Sisters in Palestine</p></div>

                        <div className="relative overflow-hidden w-full h-full">

                            <img src="palestine.webp" alt="" className="object-cover my-4 group-hover:scale-105 transition duration-500"/>

                        </div>

                        <div className="flex py-4 justify-between items-center">


                            <div className="flex justify-start gap-2">

                            <img src="aku banget.jpg" alt="" className="w-14 h-14 rounded-full object-cover" />

                                <div className="flex flex-col justify-center md:text-base text-sm gap-2" style={{fontFamily: 'Roboto'}}>

                                    <h3 className="font-bold">Mia Sterling</h3>

                                    <h4 className="font-light">News Author</h4>

                                </div>

                            </div>

                            <div className="flex justify-end gap-5">

                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>

                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>

                            </div>


                        </div>

                        <div className="lg:text-base text-sm lg:text-left text-justify leading-relaxed " style={{fontFamily: 'Roboto'}}>In a remarkable display of compassion and solidarity, Knockout Kings Boxing Center has announced a generous donation to support our Muslim brothers and sisters in Palestine during...<p className="font-bold text-black dark:text-white transition duration-500 underline">More</p> </div>

                        <div className="flex py-4 justify-between items-center">

                            <hr className="sm:w-[250px] w-[220px] hidden md:flex h-0.5 bg-black border-none dark:bg-white transition duration-500"/>

                            <p className="text-xs hidden md:flex text-black dark:text-white transition duration-500" style={{fontFamily: 'Roboto'}}>8 Minutes Read</p>


                        </div>

                    </div>


                </div>

                </Link>

            </div>

        </div>

        </section>
    )
}

