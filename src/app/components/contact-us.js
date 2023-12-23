import { useState, useEffect, useRef } from "react";

export default function ContactUs() {

    const [isIntersecting, setIsIntersecting] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
          },
          { rootMargin: "-10px" }
        );
        console.log(isIntersecting);
        observer.observe(ref.current);
    
        return () => observer.disconnect();
      }, [isIntersecting]);
    
      useEffect(() => {
        if (isIntersecting) {
          ref.current.querySelectorAll('.tersembunyi-hero').forEach((el) => {
            el.classList.add('slide');
          });
        } else {
            ref.current.querySelectorAll(".tersembunyi-hero").forEach((el) => {
              el.classList.remove("slide");
            });
        }
      }, [isIntersecting]);

    return (

        <section className="px-6 bg-[#f5f5f5] overflow-x-hidden" ref={ref}>

        <div id="tittle" className="text-black lg:text-6xl text-4xl text-center pt-8 pb-2 tersembunyi-hero" style={{fontFamily: 'Bebas Neue'}}><h3>CONTACT</h3></div>

            <div className="flex lg:flex-row flex-col justify-between items-center py-14 max-w-7xl mx-auto">

                <div id="hero-landing-left" className="flex justify-center h-full tersembunyi-hero">
                    <div className="flex flex-col gap-2 z-0">
                        <div id="hero left" className="relative overflow-hidden lg:max-w-2xl lg:h-[900px] h-[320px] bg-no-repeat shadow-black shadow-lg group hidden lg:block">
                            <img src="justin gaethje.jpg" className=" h-full hover:scale-105 w-full transition duration-500 object-cover"/>
                        </div>
                    </div>
                </div>

                <div id="hero-landing-right" className="flex justify-center shadow-black shadow-lg lg:-ml-44 bg-white py-4 px-4 flex-col lg:max-w-3xl z-10 tersembunyi-hero">

                    <form className="flex flex-col gap-2 w-full h-full bg-white py-3 lg:px-28 px-5 border-gray-500 border" style={{borderWidth: '2px'}}>

                        <div className="text-black lg:text-3xl text-xl text-center pt-8 pb-2" style={{fontFamily: 'Bebas Neue'}}><h3>CONTACT US TODAY</h3></div>

                        <div className="text-black lg:text-5xl text-3xl text-center py-2" style={{fontFamily: 'Bebas Neue'}}><h3>your new journey starts with your first step</h3></div>

                        <div className="text-black lg:text-md text-sm text-center py-2" style={{fontFamily: 'Roboto'}}><h3>Feel free to reach out to us at any time with your inquiries or feedback about Knockout Kings Martial Arts Gym, our team is here to support your journey and answer any questions you may have on your path to mastering the art of combat.</h3></div>

                        <div className="flex justify-between pt-8 gap-10">

                            <textarea className="bg-transparent w-full h-[40px] px-4 py-1.5 border-black overflow-y-hidden placeholder-black focus:rounded-none" placeholder="Your Name" style={{resize: 'none', fontFamily: 'Bebas Neue', borderWidth: '2px'}}></textarea>

                            <textarea className="bg-transparent w-full h-[40px] px-4 py-1.5 border-black overflow-y-hidden placeholder-black" placeholder="Email" style={{resize: 'none', fontFamily: 'Bebas Neue', borderWidth: '2px'}}></textarea>

                        </div>

                        <div className="py-4 flex flex-col justify-center items-center">

                            <textarea className="bg-transparent w-full h-[90px] px-4 py-1.5 border-black overflow-y-hidden placeholder-black" placeholder="Your Message" style={{fontFamily: 'Bebas Neue', resize: 'none', borderWidth: '2px'}}></textarea>  

                                <button className="bg-black group hover:bg-red-600 flex justify-center items-center gap-3 mt-10 mb-8 duration-500 transition lg:px-20 lg:py-2 px-10 py-1 text-white lg:text-base text-sm uppercase" style={{fontFamily: 'Roboto'}}>send message
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 text-white group-hover:translate-x-2 duration-500 transition">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>

                                </button>                      

                        </div>

                    </form>

                </div>

            </div>

        </section>

    )
}