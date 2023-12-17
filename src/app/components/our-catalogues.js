export default function OurCatalogues() {

    const CatalogueData = [
        {
            image: "/Catalogue - 1.jpg",
            caption: "This Catalogue is about a Boxing product or equipment for Lightweight",
            button: "View this catalogue",
        },
        {
            image: "/Catalogue - 2.jpg",
            caption: "This Catalogue is about a Boxing product or equipment for Heavyweight",
            button: "View this catalogue",
        },
        {
            image: "/Catalogue - 3.jpg",
            caption: "This Catalogue is about a Boxing product or equipment for Heavyweight",
            button: "View this catalogue",
        },
        {
            image: "/Catalogue - 4.jpg",
            caption: "This Catalogue is about a Mixed Martial Arts (MMA) product or equipment for Lightweight",
            button: "View this catalogue",
        },
    ]

    return (
        <section className="bg-[#f5f5f5] lg:px-12 px-6 lg:py-6 py-4 -mt-10 lg:-mt-0">

            <h3 className="lg:text-6xl text-4xl text-black text-center py-6" style={{fontFamily: 'Bebas Neue'}}>our catalogs</h3>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto md:gap-8 gap-4 pt-24 justify-between items-center">

                {CatalogueData.map((item, index) => (  

                    <div key={index} className="flex flex-col items-start md:gap-4 gap-3 px-4 py-4 bg-white rounded-xl shadow-black shadow-lg mb-[85px] lg:mb-0" style={{fontFamily: 'Roboto'}}>

                        <img src={item.image}  className="object-cover shadow-black shadow-md -mt-20 rounded-xl"/>

                        <p className="font-semibold md:text-base text-sm text-black">{item.caption}</p>

                        <button className="py-2 text-red-600 font-medium md:text-base text-sm">{item.button}</button>

                    </div>

                ))}

            </div>

        </section>        
    )
}