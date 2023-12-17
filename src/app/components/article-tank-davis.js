"use client"
import Link from "next/link"

export default function ArticleTankDavis() {

    const otherArticles = [
        {
            link: "/News/mike_tyson",
            tittle: "How Mike Tyson is the new world champion.",
            caption: "Popular news about Mike Tyson achieve a great victory and be the world champion",
            image: "/mike sparring.jpg"
        },
        {
            link: "/News/tyson_fury",
            tittle: "How Tyson Fury Defeated Deontay  Wilder at New York America and be the world champion",
            caption: "Popular news about tyson fury succeded to defeat deontay wilder and be the world champion",
            image: "/tyson fury spar.jpg"
        },
        {
            link: "/News/daud_yordan",
            tittle: "How local boxer Daud 'Cino'  Yordan achieve stunning victory with knockout kings boxing center",
            caption: "Popular news about Daud Yordan achieve stunning victory with knockout kings boxing center.",
            image: "/daud yordan.jpg"
        },
        {
            link: "/News/kk-on-top",
            tittle: "Knockout King's is on top  a rising force in the world of fighting.",
            caption: "Hot news about Knockout King's is on top. a rising force in the world of fighting.",
            image: "/mma.webp"
        },
        {
            link: "/News/tips",
            tittle: "Training Tips for Aspiring Boxers From the Experts at Knockout Kings.",
            caption: "Trending news about Training Tips for Aspiring  Boxers From the Experts at Knockout Kings.",
            image: "/boxing training.jpg"
        },
        {
            link: "/News/bts",
            tittle: "Behind the Gloves: Stories of Success from Knockout King's Rising Stars",
            caption: "Trending news about Behind the Gloves : Stories of Success from Knockout King's Rising Stars",
            image: "/behind the gloves.jpg"
        },
        {
            link: "/News/international-boxer",
            tittle: "International Boxing Stars Visit Knockout King's for Special Exhibition Matches ",
            caption: "Trending news about International  Boxing Stars Visit Knockout King's for Special Exhibition Matches",
            image: "/boxing international.jpeg"
        },
        {
            link: "/News/palestine",
            tittle: "Knockout King's Extends a Helping Hand: Donating for Our Muslim  Brothers and Sisters in Palestine.",
            caption: "Trending news about Knockout King's Extends a Helping Hand:  Donating for Our People in Palestine.",
            image: "/Palestine.webp"
        },
    ]

    return (
        <section id="gallery" className="w-full py-10 -mt-2.5 dark:bg-[#121212] bg-[#f5f5f5] transition duration-500">

        <div className="flex flex-col lg:flex-row lg:items-start items-center justify-between gap-32 px-6 py-4 max-w-7xl mx-auto">

            <div className="flex justify-start w-full text-black dark:text-white transition duration-500">

                <div className="flex flex-col justify-start gap-4 py-8">

                        <div className="flex flex-col justify-start items-center">
                            <h3 className="dark:text-white flex flex-col justify-start transition text-center lg:text-left lg:text-6xl text-4xl duration-500 text-black  uppercase py-8 max-w-4xl mx-auto" style={{fontFamily: 'Bebas Neue'}}>knockout kings champion makes boxing history</h3>

                                <div className="flex justify-start items-center gap-6">
                                    <p className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black transition lg:text-base text-sm leading-relaxed font-bold uppercase" style={{fontFamily: 'Roboto'}}>hot NEWS</p>
                                    <p className="lg:text-base text-sm leading-relaxed font-bold" style={{fontFamily: 'Roboto'}}>November 10, 2023</p>
                                </div>
                        </div>

                    <h3 className="lg:text-3xl text-xl lg:text-left text-center font-bold leading-relaxed" style={{fontFamily: 'Roboto'}}>The Knockout Kings Legacy</h3>
                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>In the world of boxing, Gervonta "Tank" Davis has etched his name in the annals of history, solidifying his status as a true Knockout Kings champion. Davis's remarkable journey to the top has been marked by explosive performances and devastating knockouts, but it is his recent historic accomplishment that has elevated him to legendary status. This article delves into the groundbreaking achievement that has etched Gervonta Davis's name in the history books of boxing.</p>
                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>The term "Knockout Kings" is reserved for fighters who not only win but do so in spectacular fashion. Gervonta Davis has embraced this title with gusto, living up to the expectations that come with being a true knockout artist. Known for his lightning-fast hand speed, concussive power, and impeccable technique, Davis has been a force to be reckoned with in the ring.</p>
                    <img src="/gervonta spar.jpg" className="w-full h-80 object-cover py-4" alt="" />
                    <h3 className="lg:text-3xl text-xl lg:text-left text-center font-bold leading-relaxed" style={{fontFamily: 'Roboto'}}>Implications and Legacy</h3>
                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>Tyson Fury's victory over Deontay Wilder not only solidifies his claim to the heavyweight throne but also reshapes the landscape of the division. With this dominant performance, Fury reaffirms his status as one of the most skillful and adaptable heavyweights in the modern era. The win adds another layer to Fury's remarkable comeback story, having overcome personal struggles to once again stand atop the boxing world. </p>
                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>Tyson Fury's triumph over Deontay Wilder in their highly anticipated rematch is a testament to his skill, strategy, and determination. The victory not only settles the score between these two fierce competitors but also cements Fury's legacy as a true heavyweight champion. As the dust settles, the boxing world eagerly awaits what's next for the "Gypsy King" and anticipates future matchups that will undoubtedly shape the future of the heavyweight division. </p>
                    <img src="/tank davis.jpg" className="w-full h-96 object-cover object-top py-4" alt="" />


                </div>

            </div>

            <div className="flex lg:justify-end justify-center w-full text-black dark:text-white transition duration-500">

                <div className="flex flex-col justify-start gap-10">

                    <div className="py-4 flex flex-col justify-start bg-black dark:bg-white transition max-w-xl px-6">

                        <div className="flex justify-start items-center gap-8">

                            <img src="/aku banget.jpg" alt="" className="w-28 h-28 object-cover rounded-full" />

                            <div className="flex flex-col text-white gap-2 dark:text-black transition duration-500">

                                <h3 className="font-bold uppercase lg:text-base text-sm" style={{fontFamily: 'Roboto'}}>about the author</h3>

                                <h4 className="font-light lg:text-3xl text-xl">Charlotte Hayes</h4>

                            </div>

                        </div>


                        <div className="flex py-4 gap-5 flex-row items-center">

                            <p className="lg:text-base text-sm leading-relaxed  text-white dark:text-black" >Charlotte is a UI/UX Designer based in Orange County, California. With dreams of moving to San Francisco. He is an avid user of avid user of Adobe products, especially XD and Illustrator</p>

                        </div>

                    </div>

                    <div className="py-4 bg-black px-4 dark:bg-white flex flex-col justify-center max-w-xl gap-6 transition">

                        <h3 className="text-white dark:text-black py-4 lg:text-3xl text-xl font-bold transition text-center lg:text-left" style={{fontFamily: 'Roboto'}}>Other Articles</h3>

                        {otherArticles.map ((item, index) => (

                            <Link href={item.link}>
                            
                                <div className="flex md:flex-row flex-col-reverse justify-center items-center gap-5 py-4">

                                    <div className="flex flex-col justify-center gap-3 text-white dark:text-black transition duration-500 max-w-xs">

                                    <h3 className="font-bold lg:text-base text-sm leading-relaxed md:text-left text-center" style={{fontFamily: 'Roboto'}}>{item.tittle}</h3>

                                        <p className="font-extralight lg:text-sm text-xs text-white dark:text-black dark:font-light overflow-hidden leading-relaxed md:text-left text-center">{item.caption}</p>

                                    </div>

                                    <div>

                                        <img src={item.image} className="w-full sm:w-40 h-40 object-cover" />

                                    </div>

                                </div>

                            </Link>

                        ))}

                    </div>

                </div>

            </div>

        </div>


        <Link href="/News" className="" style={{fontFamily: 'Roboto'}}>

            <div className="flex justify-start gap-2 items-center px-6 py-4 text-black dark:text-white transition duration-500 group">
            
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:-translate-x-1 transition">
                <   path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>

                <p className="lg:text-base text-sm"> Back To News</p> 

            </div>

        </Link>

        </section>
    )
}

