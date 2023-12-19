"use client"

export default function OurTraining() {
    return (
        <section className="lg:px-12 px-6 bg-[#f5f5f5]">

            <div className="py-10">

                <div className="grid lg:grid-cols-6 grid-cols-3 shadow-black shadow-lg max-w-7xl mx-auto">

                    <div className="relative overflow-hidden w-full lg:h-[120px] h-[90px] group">

                        <div className="absolute bg-black w-full h-full z-10 opacity-50"></div>

                        <img src="/boxing training.jpg" className="absolute group-hover:scale-105 transition duration-500 object-cover object-center w-full h-full" alt="" />

                        <div className="inset-x-0 bottom-0 absolute z-20 px-3 py-3">
                            
                            <div className="text-white lg:text-xl text-lg" style={{ fontFamily: 'Bebas Neue'}}>Boxing Training</div>
                        </div>

                    </div>

                    <div className="relative overflow-hidden w-full lg:h-[120px] h-[90px] group">

                        <div className="absolute bg-black w-full h-full z-10 opacity-50"></div>

                        <img src="/mma.jpg" className="absolute object-cover group-hover:scale-105 transition duration-500 object-center w-full h-full" alt="" />
                            
                        <div className="inset-x-0 bottom-0 absolute z-20 px-3 py-3">
                            
                            <div className="text-white lg:text-xl text-lg" style={{ fontFamily: 'Bebas Neue'}}>mma Training </div>
                        </div>


                    </div>

                    <div className="relative overflow-hidden w-full lg:h-[120px] h-[90px] group">

                        <div className="absolute bg-black w-full h-full z-10 opacity-50"></div>

                        <img src="/taekwondo.jpg" className="absolute group-hover:scale-105 transition duration-500 object-cover object-center w-full h-full" alt="" />
                            
                            <div className="inset-x-0 bottom-0 absolute z-20 px-3 py-3">
                            
                            <div className="text-white lg:text-xl text-lg" style={{ fontFamily: 'Bebas Neue'}}>taekwondo training</div>
                        </div>


                    </div>


                    <div className="relative overflow-hidden w-full lg:h-[120px] h-[90px] group">

                        <div className="absolute bg-black w-full h-full z-10 opacity-50"></div>

                        <img src="/kickboxing.jpg" className="absolute group-hover:scale-105 transition duration-500 object-cover object-center w-full h-full" alt="" />
                            
                            <div className="inset-x-0 bottom-0 absolute z-20 px-3 py-3">
                            
                            <div className="text-white lg:text-xl text-lg" style={{ fontFamily: 'Bebas Neue'}}>kickboxing training</div>
                        </div>


                    </div>

                    <div className="relative overflow-hidden w-full lg:h-[120px] h-[90px] group">

                        <div className="absolute bg-black w-full h-full z-10 opacity-50"></div>

                        <img src="/bjj.jpg" className="absolute group-hover:scale-105 h-full w-full transition duration-500 object-cover object-center" alt="" />
                            
                            <div className="inset-x-0 bottom-0 absolute z-20 px-3 py-3">
                            
                            <div className="text-white lg:text-xl text-lg" style={{ fontFamily: 'Bebas Neue'}}>jiu jitsu training</div>
                        </div>


                    </div>

                    <div className="relative overflow-hidden w-full lg:h-[120px] h-[90px] group">

                        <div className="absolute bg-black w-full h-full z-10 opacity-50"></div>

                        <img src="/krav maga.jpg" className="absolute group-hover:scale-105 h-full w-full transition duration-500 object-cover object-center" alt="" />
                            
                            <div className="inset-x-0 bottom-0 absolute z-20 px-3 py-3">
                            
                            <div className="text-white lg:text-xl text-lg" style={{ fontFamily: 'Bebas Neue'}}>krav maga training</div>
                        </div>


                    </div>


                </div>

            </div>


        </section>
    )
}