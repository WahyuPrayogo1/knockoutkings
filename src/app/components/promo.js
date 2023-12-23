"use client"
import { useCart } from './cart-context';
import { useEffect, useState, useRef } from 'react';

export default function Promo() {

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

    const { dispatch } = useCart();
    
    console.log(dispatch);

    const addToShopCart = (product) => {
        dispatch({ type: 'ADD_TO_SHOP_CART', payload: product });
      };

    const PromoData = [
        {
            id: "11",
            name: "12oz glove hq",
            value: "500000",
            discounted: "50%",
            discount: "1.000.000",
            image: "/12oz.png",
        },
        {
            id: "12",
            name: "punching bag hq",
            value: "350000",
            discounted: "15%",
            discount: "550.000",
            image: "/everlast.avif",
        },
        {
            id: "13",
            name: "amateur kit",
            value: "900000",
            discounted: "10%",
            discount: "1.000.000",
            image: "/amateur.webp",
        },
        {
            id: "14",
            name: "professional kit",
            value: "1400000",
            discounted: "25%",
            discount: "1.650.000",
            image: "/boxing kit.png"
        },
    ]

    return (
        <section className="bg-[#f5f5f5] py-6 lg:px-12 px-6" ref={ref}>

            <h3 className="lg:text-6xl text-4xl tersembunyi-fade text-center py-8 text-black" id="Promo" style={{fontFamily: 'Bebas Neue'}}>special promo for you</h3>

            <div className="flex flex-col justifty-between items-start gap-8 max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 justify-between items-center w-full">

                    {PromoData.map((item, index) => (

                        <div key={index} className="md:px-6 md:py-4 px-3 tersembunyi-fade py-2 flex flex-col-reverse md:flex-row justify-between items-center rounded-lg shadow-black shadow-lg" style={{background: 'rgb(163,8,8)', background: 'linear-gradient(270deg, rgba(163,8,8,1) 0%, rgba(166,10,10,1) 50%, rgba(116,5,5,1) 100%)'}}>

                            <div className="flex flex-col justify-start gap-4 md:items-start items-center">

                                <h3 style={{fontFamily: 'Bebas Neue'}} className="text-white text-lg text-center md:text-left">promo</h3>

                                    <div className="flex flex-col justify-start md:items-start items-center">
                                        <h3 style={{fontFamily: 'Bebas Neue'}} className="text-white md:text-5xl text-3xl uppercase text-center md:text-left">{item.name}</h3>
                                        <h3 style={{fontFamily: 'Bebas Neue'}} className="text-white md:text-5xl text-3xl uppercase text-center md:text-left">{item.discounted}</h3>
                                        <h3 style={{fontFamily: 'Bebas Neue'}} className="text-white md:text-xl text-md uppercase text-center md:text-left">promo for proffesional member</h3>
                                    </div>

                                    <button onClick={() => addToShopCart(item)} style={{fontFamily: 'Roboto'}} className="text-black bg-white md:px-4 md:py-3 px-3 py-2 uppercase rounded-lg text-sm flex justify-center items-center md:text-base group gap-2">buy product
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black group-hover:translate-x-1 transition duration-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </button>

                            </div>

                            <div className="w-64 h-64 flex items-center">

                                <img src={item.image} className="object-cover"/>

                            </div>
                            
                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}