import '../globals.css'
import '../design.css'

export default function Loading(){
    return (
        
        <section className="w-full h-full md:h-full">   
            <img src="/backround black.png" alt="" className="absolute -z-10 h-full object-cover md:h-full overflow-y-scroll w-full bg-center bg-no-repeat"/>
            <main className="flex flex-col justify-between lg:p-64 py-60 px-6 md:py-60 md:px-6 items-center z-10 w-full h-full">
                <div id="hero-left">
                    <div className="text-white lg:text-7xl text-3xl md:text-5xl flex flex-row" style={{fontFamily: 'Bebas Neue'}}>LOAD<h3 style={{color: 'red'}}>ING</h3></div>
                </div>
                <div id="hero-right">
                    <h3 className="text-white lg:text-base text-xs md:text-sm uppercase" style={{fontFamily: 'Roboto'}}>YOUR SITE IS CURRENTLY LOADING, PLEASE WAIT....</h3>
                </div>
            </main>
        </section>
    )
}