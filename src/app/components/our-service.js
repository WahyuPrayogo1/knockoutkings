"use client"

export default function OurService({ OpenModal }) {
    return (
        <section className="lg:px-12 px-6 bg-[#f5f5f5]">

            <div className="uppercase text-6xl text-black py-6 text-center" style={{ fontFamily: 'Bebas Neue'}}><h1>our service</h1></div>

            <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">

                <div className="relative overflow-hidden shadow-black shadow-lg w-full lg:h-[350px] md:h-[200px] h-[250px] group">

                    <div className="absolute bg-black w-full z-10 h-full opacity-50"></div>

                    <img src="/samsak.jpg" className="absolute group-hover:scale-105 w-full h-full transition duration-500 object-cover object-center" alt="" />

                    <div className="bottom-0 left-0 absolute z-20 px-3 py-3">
                        
                        <div className="text-white lg:text-5xl text-3xl md:text-2xl" style={{ fontFamily: 'Bebas Neue'}}>Boys Training Match</div>
                        <div className="text-white lg:text-sm text-xs uppercase lg:py-2 md:py-1 py-1.5" style={{ fontFamily: 'Roboto'}}>we provide the best quality training <br/> match for boys here</div>
                        <button onClick={OpenModal} className="text-white hover:text-black lg:px-6 lg:py-2 px-3 py-1 lg:text-base md:text-xs text-sm opacity-0 group-hover:opacity-100 bg-red-600 hover:bg-white transition duration-500 uppercase">register now</button>
                    </div>

                </div>

                <div className="relative overflow-hidden shadow-black shadow-lg w-full lg:h-[350px] md:h-[200px] h-[250px] group">

                    <div className="absolute bg-black w-full z-10 h-full opacity-50"></div>

                    <img src="/girls boxing.jpg" className="absolute object-cover group-hover:scale-105 w-full h-full transition duration-500 object-center" alt="" />
                        
                    <div className="bottom-0 left-0 absolute z-20 px-3 py-3">
                        
                        <div className="text-white lg:text-5xl text-3xl md:text-2xl" style={{ fontFamily: 'Bebas Neue'}}>Girl's Training Match</div>
                        <div className="text-white lg:text-sm text-xs uppercase lg:py-2 md:py-1 py-1.5" style={{ fontFamily: 'Roboto'}}>we provide the best quality training <br/> match for girl's here</div>
                        <button onClick={OpenModal} className="text-white hover:text-black lg:px-6 lg:py-2 px-3 py-1 lg:text-base md:text-xs text-sm opacity-0 group-hover:opacity-100 bg-red-600 hover:bg-white transition duration-500 uppercase">register now</button>
                    </div>


                </div>

                <div className="relative overflow-hidden shadow-black shadow-lg w-full lg:h-[350px] md:h-[200px] h-[250px] group">

                    <div className="absolute bg-black w-full z-10 h-full opacity-50"></div>

                    <img src="/boxer-training.jpg" className="absolute object-cover object-center group-hover:scale-105 w-full h-full transition duration-500" alt="" />
                        
                        <div className="bottom-0 left-0 absolute z-20 px-3 py-3">
                        
                        <div className="text-white lg:text-5xl text-3xl md:text-2xl" style={{ fontFamily: 'Bebas Neue'}}>Workout For Boys</div>
                        <div className="text-white lg:text-sm text-xs uppercase lg:py-2 md:py-1 py-1.5" style={{ fontFamily: 'Roboto'}}>we provide the best quality workout <br/> training for boys here</div>
                        <button onClick={OpenModal} className="text-white hover:text-black lg:px-6 lg:py-2 px-3 py-1 lg:text-base md:text-xs text-sm opacity-0 group-hover:opacity-100 bg-red-600 hover:bg-white transition duration-500 uppercase">register now</button>
                    </div>


                </div>


                <div className="relative overflow-hidden shadow-black shadow-lg w-full lg:h-[350px] md:h-[200px] h-[250px] group">

                    <div className="absolute bg-black w-full z-10 h-full opacity-50"></div>

                    <img src="/girls workout.jpg" className="absolute group-hover:scale-105 w-full h-full transition duration-500 object-cover object-center" alt="" />
                        
                        <div className="bottom-0 left-0 absolute z-20 px-3 py-3">
                        
                        <div className="text-white lg:text-5xl text-3xl md:text-2xl" style={{ fontFamily: 'Bebas Neue'}}>Workout For Women</div>
                        <div className="text-white lg:text-sm text-xs uppercase lg:py-2 md:py-1 py-1.5" style={{ fontFamily: 'Roboto'}}>we provide the best quality workout <br/> training for women here</div>
                        <button onClick={OpenModal} className="text-white hover:text-black lg:px-6 lg:py-2 px-3 py-1 lg:text-base md:text-xs text-sm opacity-0 group-hover:opacity-100 bg-red-600 hover:bg-white transition duration-500 uppercase">register now</button>
                    </div>

                </div>

            </div>

        </section>
    )
}