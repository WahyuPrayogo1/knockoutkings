export default function OurBrands() {
    return (
        <section className="bg-[#f5f5f5] lg:px-12 px-6 lg:py-6 py-4">

            <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:max-w-7xl w-full mx-auto py-6">

                <div className="max-w-xl">
                    <img src="/Knockout Kings.jpg" className="object-cover rounded-xl shadow-black shadow-lg"/>
                </div>

                <div className="flex flex-col justify-start max-w-xl lg:gap-6 md:gap-4 gap-3 lg:items-start pb-10 lg:pb-0 items-center" style={{fontFamily: 'Roboto'}}>

                    <h2 className="text-black lg:text-6xl text-4xl font-black">Our Own Brand</h2>
                    <p className="text-black lg:text-lg text-md lg:text-left text-center">Experience the ultimate in martial arts prowess with Knockout Kings, where every move is a masterpiece. Bring your martial arts to the next level and embrace the power of precision and strength.</p>
                    <p className="text-black lg:text-lg text-md lg:text-left text-center">Our innovative gear and equipment are designed with precision and expertise, providing you with the tools you need to hone your technique, enhance your strength, and reach new milestones in your martial arts practice. Join the league of champions who trust Knockout Kings to amplify their performance and take on the challenges of the mat with confidence and style.</p>
                    <a className="px-6 py-2 rounded-lg bg-black text-white md:text-base text-sm" href='#Promo'>Buy Now</a>

                </div>

            </div>

        </section>
    )
}