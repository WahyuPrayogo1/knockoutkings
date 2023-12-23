"use client"
import { useState, useEffect, useRef} from "react";

const Navbar = ({ OpenModal }) => {

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

    return (
        <header className="fixed w-full z-50" ref={ref}> 
            <nav className="flex lg:p-6 lg:px-10 tersembunyi px-6 p-2 md:px-8 md:p-4 items-center justify-between bg-[#121212] bg-opacity-70" style={{backdropFilter: 'blur(10px)'}}>
                <h1 className="flex lg:gap-2 gap-1 text-xl sm:text-2xl font-semibold md:text-3xl lg:text-5xl justify-start text-white" style={{fontFamily: 'Bebas Neue'}}> knockout <p style={{color: 'red'}}>kings</p></h1>
                <div className="flex justify-end lg:text-3xl md:text-2xl sm:text-xl text-md text-white" style={{fontFamily: 'Bebas Neue'}}> 
                    <button onClick={OpenModal} className="lg:px-6 lg:py-2 px-3 py-1 md:px-4 md:py-2 bg-red-600">join us now</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar