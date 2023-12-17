"use client"
import Link from "next/link"

export default function ArticleDaudYordan() {

    const OtherArticle = [
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
            caption: "Popular news about Daud Yordan achieve stunning victory with knockout kings boxing center",
            image: "/daud yordan.jpg"
        },
        {
            link: "/News/kk-on-top",
            tittle: "Knockout King's is on top  a rising force in the world of fighting.",
            caption: "Hot news about Knockout King's is on top. a rising force in the world of fighting.",
            image: "/mma.webp"
        },
        {
            link: "/News/tank_davis",
            tittle: "How Knockout King's athlete be the world champion that makes history.",
            caption: "Popular news about how Gervonta 'Tank' Davis succeded to be the world champion and makes history",
            image: "/tank davis.jpg"
        },
        {
            link: "/News/bts",
            tittle: "Behind the Gloves: Stories of Success from Knockout King's Rising Stars",
            caption: "Trending news about Behind the Gloves : Stories of Success from Knockout King's Rising Stars",
            image: "/behind the gloves.jpg"
        },
        {
            link: "/News/international-boxer",
            tittle: "International Boxing Stars Visit  Knockout King's for Special  Exhibition Matches ",
            caption: "Trending news about International  Boxing Stars Visit Knockout King's  for Special Exhibition Matches ",
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
        <section id="gallery" className="w-full -mt-2.5 py-10 dark:bg-[#121212] bg-[#f5f5f5] transition duration-500">

        <div className="dark:text-white transition duration-500 text-black text-center uppercase lg:text-6xl text-4xl justify-center py-8 max-w-4xl mx-auto" style={{fontFamily: 'Bebas Neue'}}>Local Boxer Achieves Stunning Victory with Knockout Kings Boxing Center Training</div>

        <div className="flex justify-center lg:gap-20 gap-6 items-center">

            <div>

                <h3 className="lg:text-base text-sm flex lg:gap-3 gap-1.5 text-black dark:text-white leading-tight" style={{fontFamily: 'Roboto'}}>AUTHOR: <text className="font-black"> Samuel Whitman</text> </h3>

            </div>

            <div>

                <h3 className="lg:text-base text-sm flex lg:gap-3 gap-1.5 text-black dark:text-white leading-tight" style={{fontFamily: 'Roboto'}}>PUBLISHED ON: <text className="font-black"> November 10, 2023</text> </h3>

            </div>

        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-40 gap-0 px-6 py-8">

            <div className="flex justify-start w-full text-black dark:text-white transition duration-500">

                <div className="flex flex-col items-center lg:items-center lg:justify-start justify-center">

                    <div className="lg:py-4">

                        <h3 className="text-4xl text-center lg:text-left leading-tight font-black" style={{fontFamily: 'Bebas Neue'}}>The journey</h3>

                        <hr className="w-full h-0.5 bg-black border-none dark:bg-white transition duration-500 my-4"/>

                        <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed font-semibold" style={{fontFamily: 'Roboto'}}>"Daud Yordan, a local warrior from the heart of our community, etched his name in glory at the Knockout Kings Boxing Center, delivering a stunning victory that echoed through the realms of perseverance and triumph. In the ring, he not only threw powerful punches but also embodied the spirit of resilience, proving that true champions are forged in the crucible of local pride and unwavering determination."</p>

                    </div>

                </div>

            </div>

            <div className="flex justify-center w-full text-black dark:text-white transition duration-500">

                <div className="flex flex-col justify-start lg:gap-4 gap-2 lg:py-8 py-1">

                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>Daud Yordan's journey to the Knockout Kings Boxing Center was marked by dedication, hard work, and a relentless pursuit of excellence.</p>
                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>Hailing from the local community, Yordan had already earned a reputation as a formidable boxer with an impressive record. The opportunity to showcase his talents at the Knockout Kings Boxing Center was a significant milestone in his career.</p>
                
                </div>

            </div>

            <div className="flex justify-end w-full text-black dark:text-white transition duration-500">

                <div className="flex flex-col justify-start lg:py-4 py-1">
    
                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>Daud Yordan's journey into the world of boxing was seeded in the local gyms, where he honed his craft under the watchful eyes of seasoned trainers.</p>

                <div className="w-full">

                    <img src="/daud yordan.jpg" className="h-[220px] object-cover w-full" alt="" />

                </div>

                </div>

            </div>

        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-40 gap-0 px-6 py-8">

            <div className="flex flex-col items-center lg:items-center lg:justify-start justify-center">

                <div className="flex flex-col justify-start">

                    <div className="lg:py-4">

                        <h3 className="text-4xl text-center lg:text-left leading-tight font-black" style={{fontFamily: 'Bebas Neue'}}>The Fight Night</h3>

                        <hr className="w-full h-0.5 bg-black border-none dark:bg-white transition duration-500 my-4"/>

                        <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed font-semibold" style={{fontFamily: 'Roboto'}}>"Daud Yordan, a local warrior from the heart of our community, etched his name in glory at the Knockout Kings Boxing Center, delivering a stunning victory that echoed through the realms of perseverance and triumph. In the ring, he not only threw powerful punches but also embodied the spirit of resilience, proving that true champions are forged in the crucible of local pride and unwavering determination."</p>

                    </div>

                </div>

            </div>

            <div className="flex justify-center w-full text-black dark:text-white transition duration-500">

                <div className="flex flex-col justify-start lg:gap-4 gap-2 lg:py-8 py-1">

                    <p className="lg:text-base text-sm lg:text-left text-justify" style={{fontFamily: 'Roboto'}}>The night at the Knockout Kings Boxing Center was nothing short of spectacular. The venue buzzed with energy as fans filled the seats, eager to witness the showdown. Daud Yordan, focused and determined, entered the ring with the confidence of a seasoned warrior.</p>
                    <p className="lg:text-base text-sm lg:text-left text-justify" style={{fontFamily: 'Roboto'}}> The opening rounds showcased his strategic prowess and technical finesse, setting the stage for the explosive finale.</p>
                
                </div>

            </div>
            

            <div className="flex justify-end w-full text-black lg:py-8 dark:text-white transition duration-500">

                <div className="flex flex-col gap-2 justify-start lg:py-4 py-1">

                    
                <p className="lg:text-base text-sm lg:text-left text-justify" style={{fontFamily: 'Roboto'}}>In a breathtaking display of power and precision, Daud Yordan unleashed a devastating combination that culminated in a knockout victory.</p>
                <p className="lg:text-base text-sm lg:text-left text-justify" style={{fontFamily: 'Roboto'}}>The crowd erupted in cheers as Yordan's hand was raised in triumph. The Knockout Kings Boxing Center bore witness to a historic moment, with Yordan's knockout punch etching his name in the annals of local boxing glory.</p>

                </div>

            </div>

        </div>

        <div className="flex justify-end px-6 -mt-8">

            <img src="/daud yordan spar.jpeg" className="h-[320px] object-cover w-[815px]" alt="" />

        </div>

        <div className="flex flex-col lg:flex-row justify-between lg:gap-40 gap-0 px-6 py-8">

            <div className="flex justify-start w-full text-black dark:text-white transition duration-500">

                <div className="flex flex-col items-center lg:items-center lg:justify-start justify-center">

                    <div className="lg:py-4">

                        <h3 className="text-4xl text-center lg:text-left leading-tight font-black" style={{fontFamily: 'Bebas Neue'}}>Post-Fight Euphoria</h3>

                        <hr className="w-full h-0.5 bg-black border-none dark:bg-white transition duration-500 my-4"/>

                        <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed font-semibold" style={{fontFamily: 'Roboto'}}>"Daud Yordan, a local warrior from the heart of our community, etched his name in glory at the Knockout Kings Boxing Center, delivering a stunning victory that echoed through the realms of perseverance and triumph. In the ring, he not only threw powerful punches but also embodied the spirit of resilience, proving that true champions are forged in the crucible of local pride and unwavering determination."</p>

                    </div>

                </div>

            </div>

            <div className="flex justify-center w-full text-black dark:text-white transition duration-500">

                <div className="flex flex-col justify-start lg:gap-4 gap-2 lg:py-8 py-1">

                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>In the aftermath of the victory, accolades poured in for Daud Yordan. Local boxing enthusiasts lauded his performance, highlighting the significance of his achievement at the Knockout Kings Boxing Center.</p>
                    
                    <div className="w-full">

                        <img src="/daud yordan win.webp" className="h-[220px] object-cover w-full" alt="" />

                    </div>
                    
                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>The win not only elevated Yordan's standing in the local boxing scene but also garnered attention from boxing pundits and promoters, opening doors to new opportunities on the global stage.</p>
                
                </div>

            </div>

            <div className="flex justify-end w-full text-black dark:text-white transition duration-500">

                <div className="flex flex-col justify-start lg:gap-4 gap-2 lg:py-8 py-1">
    
                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>Daud Yordan's stunning victory at the Knockout Kings Boxing Center is a testament to his skill, perseverance, and the unwavering support of the local community. The bout will be remembered as a defining moment in Yordan's career, propelling him to greater heights in the world of boxing.</p>
                    
                    <div className="w-full">

                        <img src="/daud yordan champion.jpg" className="h-[220px] object-cover w-full" alt="" />

                    </div>
                    
                    <p className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Roboto'}}>As the echoes of his triumph reverberate through the local boxing scene, Daud Yordan stands as a beacon of inspiration for aspiring boxers and a source of pride for the community that witnessed his remarkable journey to glory.</p>

                </div>

            </div>

        </div>

        <h3 className="text-black dark:text-white text-center py-4 lg:text-3xl text-xl font-bold transition" style={{fontFamily: 'Roboto'}}>Other Articles</h3>


        <div className="py-4 bg-black px-4 dark:bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-6 transition">

            {OtherArticle.map((item, index) => (

                <Link href={item.link}>

                    <div className="flex flex-col-reverse justify-between py-4">

                        <div className="flex flex-col justify-between text-center py-4 gap-2 text-white dark:text-black transition duration-500">

                            <h3 className="font-bold lg:text-base text-sm leading-relaxed" style={{fontFamily: 'Roboto'}}>{item.tittle}</h3>

                            <p className="font-extralight text-white lg:text-sm text-xs dark:text-black dark:font-light overflow-hidden leading-relaxed">{item.caption}</p>

                        </div>

                        <div>

                            <img src={item.image} className="w-full h-60 object-cover" />

                        </div>

                    </div>

                </Link>

                ))}

        </div>

        <Link href="/News" className="" style={{fontFamily: 'Roboto'}}>

            <div className="flex justify-start gap-2 items-center px-6 py-4 text-black dark:text-white transition duration-500 group">
            
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:-translate-x-1 transition">
                <   path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>

                <p> Back To News</p> 

            </div>

        </Link>

        </section>
    )
}

