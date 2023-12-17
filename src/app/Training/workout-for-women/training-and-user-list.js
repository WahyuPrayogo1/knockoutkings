"use client"
import React from "react"
import Link from "next/link"
import Card from "./card"

const WorkoutForWomenList = () => {

    return (
        <section id="gallery" className="w-full -mt-2.5 px-6 lg:px-12 dark:bg-[#121212] bg-[#f5f5f5] transition duration-500">


        <div className="dark:text-white text-black flex flex-row uppercase gap-2 lg:text-6xl text-4xl justify-center py-8 text-center transition duration-500" style={{fontFamily: 'Bebas Neue'}}>arrange your workout schedule for Women </div>
        <p className="text-center dark:text-white text-black font-medium md:text-base text-sm leading-relaxed px-6 pb-8 max-w-7xl mx-auto transition duration-500" style={{fontFamily: 'Roboto'}}>Our intensive 5-day training program designed to provide you with comprehensive knowledge and skills in Martial Arts. This program is scheduled to run from Monday to Friday, and it's an excellent opportunity to enhance your expertise and advance your Martial Arts skill, each day has 6 training programs you can choose them by your favorite. Once you choose one of them the training will appear at your training list.</p>
        

        <div className="dark:text-white text-black flex flex-row uppercase md:text-6xl text-3xl justify-center px-6 transition duration-500" style={{fontFamily: 'Bebas Neue'}}>mon<h3 >day</h3></div>

            <div>

                <Card/>
  
            </div>

            <hr className="bg-black dark:bg-white transition duration-500 w-full h-1 my-10"/>

        <div className="dark:text-white text-black flex flex-row-reverse uppercase md:text-6xl text-3xl justify-center px-6 transition duration-500" style={{fontFamily: 'Bebas Neue'}}>day<h3 >tues</h3></div>

            <div>

                <Card/>

            </div>

            <hr className="bg-black dark:bg-white transition duration-500 w-full h-1 my-10"/>

        <div className="dark:text-white text-black flex flex-row uppercase md:text-6xl text-3xl justify-center px-6 transition duration-500" style={{fontFamily: 'Bebas Neue'}}>wednes<h3 >day</h3></div>

            <div>

                <Card/>

            </div>

            <hr className="bg-black dark:bg-white transition duration-500 w-full h-1 my-10"/>

        <div className="dark:text-white text-black flex flex-row uppercase md:text-6xl text-3xl justify-center px-6 transition duration-500" style={{fontFamily: 'Bebas Neue'}}>thurs<h3 >day</h3></div>

            <div>

                <Card/>

            </div>

            <hr className="bg-black dark:bg-white transition duration-500 w-full h-1 my-10"/>


        <div className="dark:text-white text-black flex flex-row uppercase md:text-6xl text-3xl justify-center px-6 transition duration-500" style={{fontFamily: 'Bebas Neue'}}>fri<h3 >day</h3></div>

            <div className="px-6 py-6">

                <Card/>

            </div>

            <hr className="bg-black dark:bg-white transition duration-500 w-full h-1 my-10"/>

            <div className="flex justify-between items-center py-6 px-6">

                <Link href='/Training'>
                <div className="flex justify-start items-center" style={{fontFamily: 'Roboto'}}>

                    <button className="flex justify-center items-center gap-4 font-medium text-black group dark:text-white transition duration-500 md:text-base text-sm bg-transparent px-4 py-2">
                        
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:-translate-x-2 transition duration-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>


                    Back To Training Page</button>
                    
                </div>
                </Link>

                <div className="flex justify-end items-center gap-3">



                </div>

            </div>

        </section>
    )
}

export default WorkoutForWomenList;
