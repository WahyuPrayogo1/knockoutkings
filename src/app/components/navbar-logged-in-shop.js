"use client"
import Link from "next/link" 
import { usePathname } from 'next/navigation';
import { SignOut } from "../../../firebase";
import { useState } from "react";
import { useCart } from "./cart-context";
import React from "react";

const NavbarLoggedInShop = () => {

    const shopSystem = [
        {
            numering: '-',
            tittle: 'love cart',
            description: 'Love cart is a system on our website that is useful for users to store items they like',
        },
        {
            numering: '-',
            tittle: 'shop cart',
            description: 'Love cart is a system on our website that is useful for users to buy our product. Here read the steps below about How to Order our product',
        },
    ]

    const howToOrder = [
        {
            numering: '1',
            tittle: 'Choose a Product',
            description: 'you must choose a product on our promo, top selling, recommended for you, or recently sold and add it to shop cart',
        },
        {
            numering: '2',
            tittle: 'Form and Button',
            description: 'Unfortunely the form and the button is disabled when you are not adding any single product to shop cart.',
        },
        {
            numering: '3',
            tittle: 'Form personal data details',
            description: "You must fill the form to give us the details about you, so the product won't come to the wrong place. If you not fill in the form the checkout button is disabled",
        },
        {
            numering: '4',
            tittle: 'Checkout Button',
            description: "If you done adding a product or fill in the form that we're telling on the step number 3. Click on the checkout button and the payment gateway will appear",
        },
    ]
    
    const [navbar, setNavbar] = useState(false);
    const [loveCartVisible, setLoveCartVisible] = useState(false);
    const [shopCartVisible, setShopCartVisible] = useState(false);
    const [helpSupportVisible, setHelpSupportVisible] = useState(false);
    const { state, removeFromLoveCart, removeFromShopCart, updateShopCart } = useCart()
    
    const [formData, setFormData] = useState({
        name: '',
        emailOrTelephone: '',
        address: '',
      });
    
      const handleInputChange = (field, value) => {
        setFormData({
          ...formData,
          [field]: value,
        });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
      };

      const checkoutAll = async () => {
        const checkoutData = state.shopCart.map((product) => ({
          id: product.id,
          productName: product.name,
          price: product.value,
          quantity: product.quantity,
        }));
      
        console.log('Request Payload:', JSON.stringify(checkoutData));
      
        const response = await fetch("/api/tokenizer", {
          method: 'POST',
          body: JSON.stringify(checkoutData),
        });
      
        const requestData = await response.json();
        window.snap.pay(requestData.token);
      };

   // Function to handle reducing the quantity of a product
  const handleReduceAmount = (productId) => {
    // Find the index of the product in the shopCart
    const productIndex = state.shopCart.findIndex((product) => product.id === productId);

    // If the product is found, and the quantity is greater than 1, reduce the quantity
    if (productIndex !== -1 && state.shopCart[productIndex].quantity > 1) {
      const updatedCart = [...state.shopCart];
      updatedCart[productIndex].quantity -= 1;
      // Update the state with the modified cart
      updateShopCart(updatedCart)
    }
  };

  // Function to handle increasing the quantity of a product
  const handleAddAmount = (productId) => {
    // Find the index of the product in the shopCart
    const productIndex = state.shopCart.findIndex((product) => product.id === productId);

    // If the product is found, increase the quantity
    if (productIndex !== -1) {
      const updatedCart = [...state.shopCart];
      updatedCart[productIndex].quantity += 1;
      // Update the state with the modified cart
      updateShopCart(updatedCart)
    }
  };


    const handleRemoveFromLoveCart = (productId) => {
        removeFromLoveCart(productId);
    };
    const handleRemoveFromShopCart = (productId) => {
        removeFromShopCart(productId);
    };

    // const handleRemoveFromShopCart = (productId) => {
    //     removeFromShopCart(productId);
    // };

    // Function to handle opening/closing the sidebar
    const toggleSidebar = (type) => {
    if (type === "love") {
        setLoveCartVisible(!loveCartVisible);
        setShopCartVisible(false); // Close shopping cart sidebar
        setHelpSupportVisible(false); // Close shopping cart sidebar
        } else if (type === "shop") {
        setShopCartVisible(!shopCartVisible);
        setLoveCartVisible(false); // Close love cart sidebar
        setHelpSupportVisible(false); // Close love cart sidebar
        } else {
        setHelpSupportVisible(!helpSupportVisible);
        setShopCartVisible(false);
        setLoveCartVisible(false); // Close love cart sidebar
        }
    };

    const closeSidebar = (type) => {
        if (type === "love") {
            setLoveCartVisible(false);
        } if (type === "shop") {
            setShopCartVisible(false);
        } else {
            setHelpSupportVisible(false);

        }
    };

    const currentRoute = usePathname();

    const linkStyle = 'hover:text-red-600 transition duration-300'; 

  // styles for active and non-active links
  const activeStyle = linkStyle + ' text-red-600 font-bold'; 
  const nonActiveStyle = linkStyle + ' text-white';



    return (

        <header>
            <nav className="fixed w-full shadow z-30 bg-[#121212] bg-opacity-70" style={{backdropFilter: 'blur(10px)'}}>
                <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <div className="flex lg:gap-2 gap-1 text-xl sm:text-2xl font-semibold md:text-3xl lg:text-5xl justify-start text-white transition" style={{fontFamily: 'Bebas Neue'}}> KNOCKOUT <h2 style={{color: 'red'}}>KINGS</h2></div>
                            <div className="md:hidden flex items-center gap-1.5">
                                <button className="text-gray-700 rounded-md outline-none" id="help-sidebar">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white" onClick={() => toggleSidebar("help")}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                </button>

                                <button className="text-gray-700 rounded-md outline-none" id="love-cart-list" onClick={() => toggleSidebar("love")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </button>

                                <button className="text-gray-700 rounded-md outline-none" id="shopping-cart-list" onClick={() => toggleSidebar("shop")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                </button>

                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                                navbar ? "block" : "hidden"
                            }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-2 lg:space-x-6 md:space-y-0 lg:text-base md:text-xs text-base">
                                <li className="text-white text-center">
                                    <Link href="/" className={currentRoute === '/Home' ? activeStyle : nonActiveStyle}>
                                        <p className="hover:text-red-600 transition duration-100">Home</p>  
                                    </Link>
                                </li>
                                <li className="text-white text-center">
                                    <Link href="/About" className={currentRoute === '/About' ? activeStyle : nonActiveStyle}>
                                        <p className="hover:text-red-600 transition duration-100">About</p>  
                                    </Link>
                                </li>
                                <li className="text-white text-center">
                                    <Link href="/News" className={currentRoute === '/News' ? activeStyle : nonActiveStyle}>
                                        <p className="hover:text-red-600 transition duration-100">News</p>  
                                    </Link>
                                </li>
                                <li className="text-white text-center">
                                    <Link href="/Training" className={currentRoute === '/Training' ? activeStyle : nonActiveStyle}>
                                        <p className="hover:text-red-600 transition duration-100">Training</p>  
                                    </Link>
                                </li>
                                <li className="text-white text-center">
                                    <Link href="/Athletes" className={currentRoute === '/Athletes' ? activeStyle : nonActiveStyle}>
                                        <p className="hover:text-red-600 transition duration-100">Athletes</p>  
                                    </Link>
                                </li>
                                <li className="text-white text-center">
                                    <Link href="/Shop" className={currentRoute === '/Shop' ? activeStyle : nonActiveStyle}>
                                        <p className="hover:text-red-600 transition duration-100">Shop</p>  
                                    </Link>
                                </li>
                            </ul>

                            <div className="mt-3 space-y-2 md:hidden sm:inline-block">
                                <button className=" inline-block w-full bg-red-600 text-white hover:bg-black hover:text-white transition duration-500 px-2 py-2 rounded-md" onClick={SignOut} style={{fontFamily: 'Bebas Neue'}}>
                                    <p className="lg:text-3xl text-3xl">SIGN out</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden space-x-2 md:flex md:justify-center md:items-center md:gap-3">

                        <button id="help-sidebar" onClick={() => toggleSidebar("help")}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4 text-white" onClick={() => toggleSidebar("help")}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                            </svg>
                        </button>

                        <button id="love-cart-list" onClick={() => toggleSidebar("love")}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </button>

                        <button id="shopping-cart-list" onClick={() => toggleSidebar("shop")}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </button>
                        <span className="inline-flex" style={{fontFamily: 'Bebas Neue'}}>
                            <button className="flex flex-row justify-center bg-red-600 text-white hover:bg-black hover:text-white transition duration-500 px-2 py-2 rounded-xl gap-3 items-center" onClick={SignOut}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                </svg>
                                <p className="lg:text-3xl">SIGN out</p>
                            </button>
                        </span>
                    </div>
                </div>
            </nav>

            {/* Help  Support Sidebar */}
            {helpSupportVisible && (
                <div className="fixed top-0 right-0 h-full py-2 px-4 lg:w-1/3 w-1/2 bg-white z-40 overflow-y-auto">

                        <button onClick={() => closeSidebar("help")} className="fixed p-2 bg-white rounded-full z-50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-8 md:h-8 w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>


                    <div className="flex flex-col gap-4 items-center py-6">

                            <h3 className="text-black lg:text-3xl uppercase text-center py-3" style={{fontFamily: 'Bebas Neue'}}>help support center</h3>

                        {shopSystem.map((item, index) => (

                            <div key={index} className="flex flex-col md:flex-row justify-start gap-4 w-full items-start px-3 py-3" style={{ fontFamily: 'Bebas Neue' }}>
                                <div className="flex justify-center gap-2 items-center">
                                    <h1 className="text-black md:text-3xl text-xl hidden md:flex text-center md:text-left">{item.numering}</h1>
                                </div>
                                <div className="flex flex-col md:flex-row justify-start gap-4 w-full items-center">
                                    <div className="flex flex-col justify-center md:items-start items-center">
                                        <p className="text-black md:text-3xl text-xl text-center md:text-left">{item.tittle}</p>
                                        <div className="flex justify-center gap-2 items-center">
                                            <p className="text-black md:text-lg text-md text-center md:text-left">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}

                    </div>

                    <div className="flex flex-col gap-4 items-center py-6">

                        <h3 className="text-black lg:text-3xl uppercase text-center py-3" style={{fontFamily: 'Bebas Neue'}}>how to order our product</h3>

                        {howToOrder.map((item, index) => (

                            <div className="flex flex-col md:flex-row justify-start gap-4 w-full items-start px-3 py-3" style={{ fontFamily: 'Bebas Neue' }}>
                                <div className="flex justify-center gap-2 items-center">
                                    <h1 className="text-black md:text-3xl text-xl hidden md:flex text-center md:text-left">{item.numering}</h1>
                                </div>
                                <div className="flex flex-col md:flex-row justify-start gap-4 w-full items-center">
                                    <div className="flex flex-col justify-center md:items-start items-center">
                                        <p className="text-black md:text-3xl text-xl text-center md:text-left">{item.tittle}</p>
                                        <div className="flex justify-center gap-2 items-center">
                                            <p className="text-black md:text-lg text-md text-center md:text-left">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}

                    </div>

                </div>
            )}

            {/* Love Cart Sidebar */}
            {loveCartVisible && (
                <div className="fixed top-0 right-0 h-full py-2 px-4 lg:w-1/3 w-1/2 bg-white z-40 overflow-y-auto">

                        <button onClick={() => closeSidebar("love")} className="fixed p-2 bg-white rounded-full z-50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-8 md:h-8 w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>


                    <div className="flex flex-col gap-4 items-center py-6">

                    <h3 className="text-black lg:text-3xl uppercase text-center py-3" style={{fontFamily: 'Bebas Neue'}}>LOVE CART</h3>

                    {state.loveCart.length === 0 ? (
                        <p className="text-black text-lg text-center" style={{fontFamily: 'Bebas Neue'}}>No products added to love cart.</p>
                    ) : (
                        state.loveCart.map((product, index) => (
                        <div key={index} className="flex flex-col md:flex-row justify-start gap-4 w-full items-start bg-[#f5f5f5] shadow-black shadow-md rounded-lg px-3 py-3" style={{ fontFamily: 'Bebas Neue' }}>
                            <div className="flex justify-center gap-2 items-center">
                                <button onClick={() => handleRemoveFromLoveCart(product.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="md:w-8 md:h-8 w-4 h-4">
                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex flex-col md:flex-row justify-start gap-4 w-full items-center">
                                <div className="w-full h-full">
                                    <img src={product.image} className="object-cover w-full h-full" />
                                </div>
                                <div className="flex flex-col justify-center md:items-start items-center">
                                    <p className="text-black text-lg text-center md:text-left">{product.name}</p>
                                    <div className="flex justify-center gap-2 items-center">
                                        <p className="text-red-600 line-through md:text-lg text-md">rp.{product.discount}</p>
                                        <p className="text-black md:text-lg text-md">rp.{product.value}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                    )}

                    </div>

                </div>
            )}

            {shopCartVisible && (
                <div className="fixed top-0 right-0 h-full py-2 px-4 lg:w-1/3 w-1/2 bg-white z-40 overflow-y-auto">

                        <button onClick={() => closeSidebar("shop")} className="fixed p-2 bg-white rounded-full z-50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-8 md:h-8 w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>


                    <div className="flex flex-col gap-4 items-center py-6">

                    <h3 className="text-black lg:text-3xl uppercase text-center py-3" style={{fontFamily: 'Bebas Neue'}}>shop CART</h3>

                    {state.shopCart.length === 0 ? (
                        <p className="text-black text-lg text-center" style={{fontFamily: 'Bebas Neue'}}>No products added to shop cart.</p>
                    ) : (
                        state.shopCart.map((product, index) => (
                            <div key={index} className="flex flex-col md:flex-row justify-start gap-4 w-full items-start bg-[#f5f5f5] shadow-black shadow-md rounded-lg px-3 py-3" style={{ fontFamily: 'Bebas Neue' }}>
                                <div className="flex justify-start gap-2 items-start">
                                    <button onClick={() => handleRemoveFromShopCart(product.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="md:w-8 md:h-8 w-4 h-4">
                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex flex-col md:flex-row justify-start gap-4 w-full items-center">
                                    <div className="w-full h-full">
                                        <img src={product.image} className="object-cover w-full h-full" />
                                    </div>
                                    <div className="flex flex-col justify-center md:items-start items-center">
                                        <p className="text-black text-lg text-center md:text-left">{product.name}</p>
                                        <div className="flex justify-center gap-2 items-center">
                                            <p className="text-red-600 line-through md:text-lg text-md">rp.{product.discount}</p>
                                            <p className="text-black md:text-lg text-md">rp.{product.value}</p>
                                        </div>
                                        <div className="flex justify-center gap-2 items-center">
                                            <button onClick={() => handleReduceAmount(product.id)} className="text-black p-1 border-black border line-through text-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                                    <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                            <p className="text-black text-lg">{product.quantity}</p>
                                            <button onClick={() => handleAddAmount(product.id)} className="text-black p-1 border-black border line-through text-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}

                            <div className="flex flex-col justify-center gap-2 py-4 w-full items-start" style={{fontFamily: 'Bebas Neue'}}>
                                <form className="w-full" onSubmit={handleSubmit}>
                                    <h1 className="text-black md:text-2xl text-md text-center mx-auto">Form Personal Data</h1>

                                    <h1 className="text-black md:text-xl text-base">Name</h1>

                                    <input 
                                        id="name"
                                        type="name" 
                                        value={formData.name}
                                        onChange={(e) => handleInputChange('name', e.target.value)} 
                                        className="w-full h-10 text-white p-2 bg-black border-white border rounded-md" placeholder="Name..."/>

                                    <h1 className="text-black md:text-xl text-base">Email or Telephone</h1>

                                    <input 
                                        id="email"
                                        type="email"  
                                        value={formData.emailOrTelephone}
                                        onChange={(e) => handleInputChange('emailOrTelephone', e.target.value)}
                                        className="w-full h-10 text-white p-2 bg-black border-white border rounded-md" placeholder="Email or Telephone..."/>
                                    
                                    <h1 className="text-black md:text-xl text-base">Address</h1>
                                    
                                    <input 
                                        id="address"
                                        type="address" 
                                        value={formData.address}
                                        onChange={(e) => handleInputChange('address', e.target.value)}
                                        className="w-full h-10 text-white p-2 bg-black border-white border rounded-md" placeholder="Address..."/>
                                    
                                    <div className="flex flex-col justify-between items-center gap-3 my-4 ">

                                        <h1 className="text-black md:text-2xl text-lg">Sub Total : Rp. {state.shopCart.reduce((total, product) => total + product.value * product.quantity, 0)}</h1>

                                        <button onClick={checkoutAll} className="px-3 py-2 md:text-xl text-base uppercase flex justify-center gap-2 rounded-md items-center text-white bg-red-600">
                                            checkout
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="md:w-6 md:h-6 w-4 h-4">
                                                    <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                                                    <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
                                                </svg>
                                        </button>

                                    </div>
                                </form>
                            </div>

                    </div>

                </div>
            )}
            
    </header>

    )
}

export { NavbarLoggedInShop};