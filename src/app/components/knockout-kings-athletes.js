export default function GalleryAthletes() {

    const boxingAthletes = [
        {
            name: "Mike Tyson",
            image: "mike tyson.jpg",
        },
        {
            name: "floyd mayweather",
            image: "floyd.jpg",
        },
        {
            name: "deontay wilder",
            image: "deontay wilder.jpg",
        },
        {
            name: "tyson fury",
            image: "tyson fury.jpg",
        },
        {
            name: "pacquiao",
            image: "manny pacman.jpg",
        },
        {
            name: "canelo alvarez",
            image: "canelo.jpg",
        },
        {
            name: "anthony joshua",
            image: "joshua.jpg",
        },
        {
            name: "wladimir klitschko",
            image: "wladimir.jpeg",
        },
        {
            name: "vitali klitschko",
            image: "vitali.jpg",
        },
        {
            name: "larry holmes",
            image: "larry holmes.jpg",
        },
        {
            name: "evander holyfield",
            image: "evander.jpg",
        },
        {
            name: "lennox lewis",
            image: "lennox.jpg",
        },
    ]

    const mmaAthletes = [
        {
            name: "Khabib",
            image: "khabib.jpg"
        },
        {
            name: "connor mcgregor",
            image: "connor.jpg"
        },
        {
            name: "francis ngannou",
            image: "francis ngannou.jpg"
        },
        {
            name: "anderson silva",
            image: "anderson silva.jpeg"
        },
        {
            name: "khamzat chimaev",
            image: "khamzat chimaev.jpg"
        },
        {
            name: "justin gaethje",
            image: "justin gaethje.jpg"
        },
        {
            name: "dustin poirier",
            image: "dustin poirier.jpg"
        },
        {
            name: "alex pereira",
            image: "alex pereira.webp"
        },
    ]

    return (

        <section id="gallery" className="z-10 -mt-2.5 lg:px-12 px-6 pb-6 w-full bg-[#f5f5f5] dark:bg-[#121212] transition duration-500">

            <div className="dark:text-white text-black text-center uppercase md:text-6xl text-4xl py-8 transition duration-500" style={{fontFamily: 'Bebas Neue'}}>knockout kings athletes</div>
            <p className="text-center dark:text-white text-black font-medium transition duration-500" style={{fontFamily: 'Roboto'}}>These are the athletes from Knockout Kings who are succeed to become world champions.</p>
            <div className="mx-auto px-5 py-2 lg:px-12 lg:pt-1 lg:my-8">
            <div className="dark:text-white text-black uppercase lg:text-5xl text-4xl justify-center py-4 transition duration-500 text-center" style={{fontFamily: 'Bebas Neue'}}>boxing athletes </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-4 lg:gap-6 gap-4 max-w-7xl mx-auto">
                    
                    {boxingAthletes.map((boxing, index) => (
                    
                        <div id="hero left" className="relative overflow-hidden bg-no-repeat shadow-black h-96 w-full shadow-lg group">
                            <img src={boxing.image} alt="" className=" h-full w-full absolute object-cover object-top group-hover:scale-105 transition duration-500  "/>
                            <main className="flex justify-center py-2 opacity-0 group-hover:opacity-100 transition duration-500">
                                <div style={{fontFamily: 'Bebas Neue'}} className="lg:text-4xl text-3xl z-40 pointer-events-none text-white">{boxing.name}</div>
                            </main>
                        </div>

                    ))}

                </div>
            <div className="dark:text-white text-black text-center uppercase lg:text-5xl text-3xl py-4 transition duration-500" style={{fontFamily: 'Bebas Neue'}}>mma athletes</div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-4 lg:gap-6 gap-4 max-w-7xl mx-auto">

                    {mmaAthletes.map((mma,index) => (

                        <div id="hero left" className="relative overflow-hidden bg-no-repeat shadow-black h-96 w-full shadow-lg group">
                            <img src={mma.image} alt="" className=" h-full w-full absolute object-cover group-hover:scale-105 transition duration-500  "/>
                            <main className="flex justify-center py-2 w-full opacity-0 group-hover:opacity-100 transition duration-500">
                                <div style={{fontFamily: 'Bebas Neue', color: 'white'}} className="lg:text-4xl text-3xl z-40 pointer-events-none uppercase text-white"> {mma.name} </div>
                            </main>
                        </div>

                    ))}

                </div>
            </div>
        </section>
    )
}