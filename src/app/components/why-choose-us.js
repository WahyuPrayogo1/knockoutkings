"use client"

export default function WhyChooseUs() {
    return (
        <section className="lg:px-12 px-6 -mt-32 bg-[#f5f5f5]">

            <div className="flex-col lg:flex-row flex lg:justify-between justify-center items-center py-14 max-w-7xl mx-auto">

                <div id="hero-left" className="flex justify-center flex-col mt-40 max-w-2xl mx-auto">

                    <div className="text-black text-5xl md:text-7xl lg:text-8xl py-3 text-center lg:text-left" style={{fontFamily: 'Bebas Neue'}}>why choose us!</div>
                    <div className="text-black lg:text-base text-sm lg:text-left text-center py-3" style={{fontFamily: 'Roboto'}}>Individuals choose Knockout Kings as their martial arts gym for its unparalleled  combination of expert instruction, state-of-the-art facilities, and a supportive  community dedicated to fostering personal growth and excellence  in every practitioner.</div>

                    <div className="flex flex-col lg:flex-row lg:justify-between gap-5 items-center">

                        <img src="/sparring.png" alt="" className="w-20 h-20"/>

                        <div className="flex flex-col py-4 gap-2">

                            <div className="text-black lg:text-3xl text-xl text-center lg:text-left" style={{fontFamily: 'Bebas Neue'}}>Unmatched Expertise and Experience</div>                                
                            <div className="text-black lg:text-base text-sm text-center lg:text-left" style={{fontFamily: 'Roboto'}}>Choose Knockout Kings Martial Arts Gym for unparalleled expertise and  experience in martial arts training.</div>


                        </div>

                    </div>

                    <div className="flex flex-col lg:flex-row lg:justify-between gap-5 items-center">

                        <img src="/glove icon.png" alt="" className="w-20 h-20"/>

                        <div className="flex flex-col py-4 gap-2">

                            <div className="text-black lg:text-3xl text-xl text-center lg:text-left" style={{fontFamily: 'Bebas Neue'}}>Innovative Training Programs for Real Results</div>                                
                            <div className="text-black lg:text-base text-sm text-center lg:text-left" style={{fontFamily: 'Roboto'}}>Discover a transformative martial arts experience at Knockout Kings Gym with  our cutting-edge training programs designed for real, tangible results. </div>


                        </div>

                    </div>

                    <div className="flex flex-col lg:flex-row lg:justify-between gap-5 items-center">

                        <img src="/fire.webp" alt="" className="w-20 h-24"/>

                        <div className="flex flex-col py-4 gap-2">

                            <div className="text-black lg:text-3xl text-xl text-center lg:text-left" style={{fontFamily: 'Bebas Neue'}}>Community Spirit and Supportive Environment</div>                                
                            <div className="text-black lg:text-base text-sm text-center lg:text-left" style={{fontFamily: 'Roboto'}}>Join Knockout Kings Martial Arts Gym not just for the workouts, but for the  community.  </div>


                        </div>

                    </div>

                </div>

                <div id="hero-right" className="flex sm:flex-row xs:flex-row flex-col justify-center sm:gap-4 gap-0.5 lg:pt-[150px] pt-14 max-w-xl mx-auto">
                    <div className="flex flex-col gap-2 z-10">
                        <div id="hero left" className="relative overflow-hidden bg-no-repeat shadow-black lg:h-72 lg:w-72 sm:h-56 sm:w-56 w-48 h-48 md:w-64 md:h-64 shadow-xl group">
                            <img src="boxer-training.jpg" alt="" className=" h-full w-full absolute object-cover group-hover:scale-105 transition duration-500  "/>
                            <main className="flex justify-center py-2 w-full opacity-0 ">
                                <div style={{fontFamily: 'Bebas Neue', color: 'red'}} className="lg:text-4xl z-40 pointer-events-none">MIKE <p className="text-white">TYSON</p> </div>
                            </main>
                        </div>
                        <div id="hero left" className="relative overflow-hidden bg-no-repeat shadow-black lg:h-72 lg:w-72 sm:h-56 sm:w-56 w-48 h-48 md:w-64 md:h-64 shadow-xl group">
                            <img src="mma.jpg" alt="" className=" h-full w-full absolute object-cover group-hover:scale-105 transition duration-500  "/>
                            <main className="flex justify-center py-2 w-full opacity-0 ">
                                <div style={{fontFamily: 'Bebas Neue', color: 'red'}} className="lg:text-4xl z-40 pointer-events-none">MIKE <p className="text-white">TYSON</p> </div>
                            </main>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 z-10 lg:pt-10 md:pt-10 pt-6">
                        <div id="hero left" className="lg:-ml-14 md:-ml-14 sm:-ml-20 -ml-0 relative overflow-hidden bg-no-repeat shadow-black lg:h-72 lg:w-72 sm:h-56 sm:w-56 w-48 h-48 md:w-64 md:h-64 shadow-xl group">
                            <img src="taekwondo.jpg" alt="" className=" h-full w-full absolute object-cover group-hover:scale-105 transition duration-500  "/>
                            <main className="flex justify-center py-2 w-full opacity-0 ">
                                <div style={{fontFamily: 'Bebas Neue', color: 'red'}} className="lg:text-4xl z-40 pointer-events-none">MIKE <p className="text-white">TYSON</p> </div>
                            </main>
                        </div>
                        <div id="hero left" className="lg:-ml-20 md:-ml-20 sm:-ml-20 -ml-0  relative overflow-hidden bg-no-repeat shadow-black lg:h-72 lg:w-72 sm:h-56 sm:w-56 w-48 h-48 md:w-64 md:h-64 shadow-xl group">
                            <img src="kickboxing.jpg" alt="" className=" h-full w-full absolute object-cover group-hover:scale-105 transition duration-500  "/>
                            <main className="flex justify-center py-2 w-full opacity-0 ">
                                <div style={{fontFamily: 'Bebas Neue', color: 'red'}} className="lg:text-4xl z-40 pointer-events-none">MIKE <p className="text-white">TYSON</p> </div>
                            </main>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}