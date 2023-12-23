"use client"
import { useEffect, useState, useRef } from "react";

export default function Benefits() {

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
          ref.current.querySelectorAll('.tersembunyi-fade').forEach((el) => {
            el.classList.add('fade');
          });
        } else {
            ref.current.querySelectorAll(".tersembunyi-fade").forEach((el) => {
              el.classList.remove("fade");
            });
        }
      }, [isIntersecting]);

    const BenefitsData = [
        {
            svg: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'/></svg>",
            title: "Benefits of being a Customer",
            description: "The benefit of being a customer is that you will get a discount.",
            button: "Buy Product Now",
        },
        {
            svg: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' /></svg>",
            title: "Catalog or Tempering Products",
            description:"We provide catagogues for our high quality products for martial arts equipment",
            button: "Buy Product Now"
        },
        {
            svg: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' d='M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25' /></svg>",
            title: "Invitation to Affiliate as a Partner",
            description: "We invite you to become a partner to expand our products.",
            button: "Buy Product Now"
        },
        {
            svg: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z' /></svg>",
            title: "Benefits of Buying On Our Website",
            description: "The benefit of buying our products online is that we give you a discount off the original price.",
            button: "Buy Product Now"
        },
        {
            svg: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' /></svg>",
            title: "Extend Our Catalogue Product",
            description:"We offer a catalog to offer to people interested in martial arts.",
            button: "Buy Product Now"
        },
        {
            svg: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' /></svg>",
            title: "Guest and Partner Purchase Benefits",
            description: "We provide affordable prices for guests and provide discounted prices for partners.",
            button: "Buy Product Now"
        },
    ]

    return (
        <section className="bg-[#f5f5f5] w-full py-14" ref={ref}>

            <div className="flex flex-col items-center tersembunyi-fade relative bg-cover" style={{backgroundImage: 'url(/spar.webp)'}}>

            <div className="absolute inset-0 bg-black opacity-75"></div>

                <div className="lg:grid-cols-3 max-w-7xl mx-auto grid z-10 md:grid-cols-2 grid-cols-1 lg:px-12 lg:py-14 py-7 px-6">

                    {BenefitsData.map((item, index) => (

                        <div key={index} className="flex flex-col tersembunyi-fade justify-between items-center lg:gap-4 md:gap-3 gap-3 px-6 py-2" style={{fontFamily: 'Roboto'}}>

                            <div dangerouslySetInnerHTML={{__html: item.svg}} className="md:w-14 md:h-14 w-10 h-10 mt-14 text-white"/>

                            <h1 className="text-white md:text-lg text-md text-center max-w-[200px]">{item.title}</h1>

                            <p className="md:text-md text-sm text-center text-white">{item.description}</p>

                            <button className="text-white md:text-md text-sm bg-red-600 rounded-md md:px-4 md:py-2 px-2 py-1">{item.button}</button>

                        </div>

                        

                    ))}

                </div>

            </div>

        </section>
    )
}