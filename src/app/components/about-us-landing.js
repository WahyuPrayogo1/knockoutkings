"use client"

export default function AboutUs() {
    return (
        <section className="px-12 -mt-32 bg-[#f5f5f5]">

            <div className="flex flex-col-reverse lg:flex-row justify-between items-center py-14 max-w-7xl mx-auto">

                <div id="hero-right" className="flex h-full max-w-lg lg:pt-[125px] py-10">
                    <div className="flex flex-col gap-2 z-10">
                        <div id="hero left" className="relative overflow-hidden bg-no-repeat shadow-black shadow-lg group">
                            <img src="boxing.jpg" className=" h-full w-full hover:scale-105 transition duration-500 object-cover"/>
                            <main className="flex justify-center py-2 w-full opacity-0 ">
                                <div style={{fontFamily: 'Bebas Neue', color: 'red'}} className="lg:text-4xl z-40 pointer-events-none">MIKE <p className="text-white">TYSON</p> </div>
                            </main>
                        </div>
                    </div>
                </div>

                <div id="hero-left" className="flex justify-center flex-col mt-40 max-w-2xl">

                    <div className="lg:text-3xl text-2xl py-1 text-center lg:text-left" style={{fontFamily: 'Bebas Neue', color: 'red'}}>About us</div>
                    <div className="text-black lg:text-6xl text-4xl py-1 text-center lg:text-left" style={{fontFamily: 'Bebas Neue'}}>Best boxing school and martial  arts since 2004</div>
                    <div className="text-black lg:text-base text-center lg:text-left text-sm py-3" style={{fontFamily: 'Roboto'}}>Unleashing Champions Since 2004. Our story is a journey of grit, discipline, and triumph.  Discover the heartbeat of our best-in-class boxing school and martial arts sanctuary in every punch,  kick, and victory. Welcome to a legacy forged in passion where greatness becomes a way of life.</div>

                        <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 py-6 gap-2">

                            <div className="flex flex-col gap-3 py-1 items-center lg:items-start">

                                <div className="flex flex-row justify-start items-center gap-3">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>

                                    <div className="text-black text-3xl py-1 text-left" style={{fontFamily: 'Bebas Neue',}}>best training</div>

                                </div>

                                <div className="text-black lg:text-base text-sm lg:text-left text-center" style={{fontFamily: 'Roboto'}}>We provide the highest quality martial arts  training here.</div>


                            </div>

                            <div className="flex flex-col gap-3 py-1 items-center lg:items-start">

                                <div className="flex flex-row justify-start items-center gap-3">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>

                                    <div className="text-black text-3xl py-1 text-left" style={{fontFamily: 'Bebas Neue',}}>best pricing</div>

                                </div>

                                <div className="text-black lg:text-base text-sm lg:text-left text-center" style={{fontFamily: 'Roboto'}}>We serve affordable prices for everyone here.</div>

                            </div>

                            <div className="flex flex-col gap-3 py-1 items-center lg:items-start">

                                <div className="flex flex-row justify-start items-center gap-3">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>

                                    <div className="text-black text-3xl py-1 text-left" style={{fontFamily: 'Bebas Neue',}}>best equipment</div>

                                </div>

                                <div className="text-black lg:text-base text-sm lg:text-left text-center" style={{fontFamily: 'Roboto'}}>We provide best equipment for martial arts training here.</div>

                            </div>

                            <div className="flex flex-col gap-3 py-1 items-center lg:items-start">

                                <div className="flex flex-row justify-start items-center gap-3">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>

                                    <div className="text-black text-3xl py-1 text-left" style={{fontFamily: 'Bebas Neue',}}>best trainers</div>

                                </div>

                                <div className="text-black lg:text-base lg:text-left text-sm text-center" style={{fontFamily: 'Roboto'}}>We provide expert and experienced trainers  for martial arts here.</div>

                            </div>

                        </div>

                </div>

            </div>

        </section>
    )
}