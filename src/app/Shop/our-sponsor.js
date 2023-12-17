export default function OurSponsor() {

    const SponsorData = [
        {
            image: "/Adidas Logo.png",
        },
        {
            image: "/Puma Logo.png",
        },
        {
            image: "/Nike Logo.png",
        },
        {
            image: "/Everlast Logo.png",
        },
    ]

    return (
        
        <section className="lg:px-12 px-6 bg-[#f5f5f5]">

            <h1 className="md:text-6xl text-4xl text-center text-black" style={{fontFamily: "Bebas Neue"}}>SPONSORSHIP</h1>

            <div className="flex flex-col justify-center items-center">

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-self-center gap-10 max-w-7xl mx-auto py-8">

                    {SponsorData.map((item, index) => (

                        <div key={index} className="w-full">

                            <img src={item.image} className="object-cover w-full"/>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    )
}