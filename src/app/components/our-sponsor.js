import { useEffect, useState, useRef } from "react";

export default function OurSponsor() {

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
          ref.current.querySelectorAll('.tersembunyi-footer').forEach((el) => {
            el.classList.add('slide-up');
          });
        } else {
            ref.current.querySelectorAll(".tersembunyi-footer").forEach((el) => {
              el.classList.remove("slide-up");
            });
        }
      }, [isIntersecting]);


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
        
        <section className="lg:px-12 px-6 bg-[#f5f5f5]" ref={ref}>

            <div className="tersembunyi-footer">

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

            </div>

        </section>

    )
}