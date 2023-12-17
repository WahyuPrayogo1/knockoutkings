"use client"
import { useCart } from './cart-context';

export default function RecommendedProduct() {

    const { dispatch } = useCart();
    
    console.log(dispatch);

    const addToShopCart = (product) => {
        dispatch({ type: 'ADD_TO_SHOP_CART', payload: product });
      };
    
      const addToLoveCart = (product) => {
        dispatch({ type: 'ADD_TO_LOVE_CART', payload: product });
      };

const RecommendedProduct = [
    {
        id: "3",
        name: "Nike Machomai boxing",
        discount: "2.000.000",
        value: "1800000",
        image: "nike boxing shoe.webp"
    },
    {
        id: "5",
        name: "Adidas Running Jacket",
        discount: "1.900.000",
        value: "1750000",
        image: "adidas running.jpg",
    },
    {
        id: "6",
        name: "Puma castlerock-green running shoe",
        discount: "2.500.000",
        value: "2379000",
        image: "puma running shoes.webp",
    },
    {
        id: "1",
        name: "apple airpods pro 2nd gen with charging",
        discount: "1.500.000",
        value: "1299999",
        image: "airpods.avif",
    },
]

    return (
        <section className="bg-[#f5f5f5] py-6 lg:px-12 px-6">

            <div className="flex flex-col justify-center items-center gap-4 lg:py-8  text-black">
                <h3 className="lg:text-6xl text-4xl text-center" style={{fontFamily: 'Bebas Neue'}}>recommended product</h3>
                <h3 className="text-md max-w-3xl text-center text-black" style={{fontFamily: 'Roboto'}}>Experience unparalleled performance and style in the ring with our recommended products at Knockout Kings shop, meticulously curated to elevate your boxing and MMA training to new heights.</h3>
            </div>

            <div className="flex flex-col justify-center items-center gap-3 max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-items-center gap-3 pt-16 py-8">

                    {RecommendedProduct.map((item, index) => (

                    <div key={index} className="flex flex-col justify-between items-start gap-4 px-4 py-4 rounded-md shadow-black shadow-lg bg-white mt-[85px] lg:mt-0">

                        <div className="rounded-lg -mt-20 shadow-black shadow-md" style={{background: 'rgb(163,8,8)', background: 'linear-gradient(270deg, rgba(163,8,8,1) 0%, rgba(166,10,10,1) 50%, rgba(116,5,5,1) 100%)'}}>

                            <img src={item.image} alt="" className="w-34 h-34 object-cover"/>
                        
                        </div>

                        <div className="flex flex-col items-start">
                            <h3 style={{fontFamily: 'Bebas Neue'}} className="text-xl text-black">{item.name}</h3>
                            <div className="flex gap-2">
                                <h3 style={{fontFamily: 'Bebas Neue'}} className="text-3xl text-red-600 line-through">rp.{item.discount}</h3>
                                <h3 style={{fontFamily: 'Bebas Neue'}} className="text-3xl text-black">rp.{item.value}</h3>
                            </div>
                        </div>

                        <div className="flex flex-row justify-between items-center w-full">

                            <button onClick={() => addToShopCart(item)} style={{fontFamily: 'Roboto'}} className="bg-black px-3 py-2 uppercase rounded-lg text-sm text-white flex justify-center items-center group gap-2">buy now
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition duration-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>

                            <div onClick={() => addToLoveCart(item)} className="flex justify-center items-center gap-4 text-black">

                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </button>

                            </div>

                        </div>

                    </div>

                    ))}
                    
                </div>

            </div>

        </section>
    )
}