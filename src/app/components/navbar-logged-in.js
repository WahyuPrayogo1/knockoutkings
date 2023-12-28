"use client"
import Link from "next/link" 
import { usePathname } from 'next/navigation';
import { SignOut } from "../../../firebase";
import { useState, useEffect, useRef } from "react";
import ToggleSwitcher from "./toggle";

const NavbarLoggedIn = () => {

    const [isIntersecting, setIsIntersecting] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
          },
        );
        console.log(isIntersecting);
        observer.observe(ref.current);
    
        return () => observer.disconnect();
      });
    
      useEffect(() => {
        if (isIntersecting) {
          ref.current.querySelectorAll('.tersembunyi').forEach((el) => {
            el.classList.add('slide-down');
          });
        }
      });

    const [isDark, setIsDark] = useState(false);

  // Load user preference from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDark(true);
    }
  }, []);

  // Set user preference and update localStorage
  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  useEffect(() => {
    // Apply the 'dark' class to the HTML element when in dark mode
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

    const [navbar, setNavbar] = useState(false);

    const currentRoute = usePathname();

    const linkStyle = 'hover:text-red-600 transition duration-300'; 

  // styles for active and non-active links
  const activeStyle = linkStyle + ' text-red-600 font-bold'; 
  const nonActiveStyle = linkStyle + ' text-white dark:text-black transition duration-500';

    return (

        <nav className="fixed w-full shadow z-50 bg-[#121212] dark:bg-[#f5f5f5] transition duration-500 bg-opacity-70 dark:bg-opacity-70" ref={ref} style={{backdropFilter: 'blur(10px)'}}>
            <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8 tersembunyi">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div className="flex lg:gap-2 gap-1 text-xl sm:text-2xl font-semibold md:text-3xl lg:text-5xl justify-start text-white dark:text-red-600 transition duration-500 " style={{fontFamily: 'Bebas Neue'}}> KNOCKOUT <h2>KINGS</h2></div>
                        <div className="md:hidden flex items-center gap-12">
                            <div className="">
                                <label htmlFor="theme-switch" className="cursor-pointer justify-center">
                                    <input
                                    id="theme-switch"
                                    type="checkbox"
                                    className="hidden"
                                    checked={isDark}
                                    onChange={toggleTheme}
                                    />
                                    <div className="absolute w-14 h-6 bg-white dark:bg-black transition duration-500 rounded-full flex justify-between items-center px-0.5">
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black dark:text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                        </svg>
                                    </i>
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black dark:text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                        </svg>
                                    </i>
                                    </div>
                                    <div className="w-6 h-6 bg-red-600 dark:bg-white transition duration-200 rounded-full shadow-md transform ease-in-out translate-x-0 dark:translate-x-9"></div>
                                </label>
                            </div>
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white dark:text-black transition duration-500"
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
                                        className="w-6 h-6 text-white dark:text-black transition duration-500"
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
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white dark:text-black transition duration-500 text-center md:text-base text-sm">
                                <Link rel="preload" href="/" className={currentRoute === '/Home' ? activeStyle : nonActiveStyle}>
                                    <p className="hover:text-red-600 transition duration-100">Home</p>  
                                </Link>
                            </li>
                            <li className="text-white dark:text-black transition duration-500 text-center md:text-base text-sm">
                                <Link rel="preload" href="/About" className={currentRoute === '/About' ? activeStyle : nonActiveStyle}>
                                    <p className="hover:text-red-600 transition duration-100">About</p>  
                                </Link>
                            </li>
                            <li className="text-white dark:text-black transition duration-500 text-center md:text-base text-sm">
                                <Link rel="preload" href="/News" className={currentRoute === '/News' ? activeStyle : nonActiveStyle}>
                                    <p className="hover:text-red-600 transition duration-100">News</p>  
                                </Link>
                            </li>
                            <li className="text-white dark:text-black transition duration-500 text-center md:text-base text-sm">
                                <Link rel="preload" href="/Training" className={currentRoute === '/Training' ? activeStyle : nonActiveStyle}>
                                    <p className="hover:text-red-600 transition duration-100">Training</p>  
                                </Link>
                            </li>
                            <li className="text-white dark:text-black transition duration-500 text-center md:text-base text-sm">
                                <Link rel="preload" href="/Athletes" className={currentRoute === '/Athletes' ? activeStyle : nonActiveStyle}>
                                    <p className="hover:text-red-600 transition duration-100">Athletes</p>  
                                </Link>
                            </li>
                            <li className="text-white dark:text-black transition duration-500 text-center md:text-base text-sm">
                                <Link rel="preload" href="/Shop" className={currentRoute === '/Shop' ? activeStyle : nonActiveStyle}>
                                    <p className="hover:text-red-600 transition duration-100">Shop</p>  
                                </Link>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">

                            <button className=" inline-block w-full bg-red-600 text-white  hover:bg-black hover:text-white transition duration-500 px-2 py-2 rounded-md" onClick={SignOut} style={{fontFamily: 'Bebas Neue'}}>
                                <p className="lg:text-3xl text-3xl">SIGN out</p>
                            </button>

                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:flex md:justify-center md:items-center md:gap-3">
                    <ToggleSwitcher className="inline-flex"/>
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
    )
}

export default NavbarLoggedIn