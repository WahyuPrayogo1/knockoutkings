"use client"

export default function LastStand({ OpenModal }){
    return (
        
        <section className="w-full bg-[#f5f5f5] relative py-10">   
            <img src="/last stand.jpg" alt="" className="absolute h-[430px] w-full object-cover object-center bg-no-repeat"/>
            <div className=" w-full bg-black h-[430px] absolute opacity-60"></div>
            <main className="relative flex flex-col px-6 text-center gap-3 justify-center my-32 items-center w-full h-full">
                <div id="hero-left">
                    <div className="text-white lg:text-5xl text-2xl" style={{fontFamily: 'Bebas Neue'}}>only the chosen one will be the last one standing</div>
                </div>
                <div id="hero-right">
                    <h3 className="text-white lg:text-sm text-xs uppercase lg:max-w-2xl" style={{fontFamily: 'Roboto'}}>Embrace the Challenge, Stand Victorious. In the arena of Knockout Kings, only the chosen one will be the last one standing, etching their legacy in the art of combat. Are you ready to be the champion?</h3>
                </div>
                <div id="hero-right">
                <div className="text-base py-3" style={{fontFamily: 'Roboto'}}><button onClick={OpenModal} className="text-black hover:text-white lg:text-base text-sm lg:px-6 lg:py-2 py-1 px-3 bg-white hover:bg-red-600 transition duration-500 uppercase">join knockout kings now</button></div>
                </div>
            </main>
        </section>
    )
}