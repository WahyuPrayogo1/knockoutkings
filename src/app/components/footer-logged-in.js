"use client"
export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-10 z-10 w-full dark:bg-[#f5f5f5] transition duration-500 bg-[#121212] md:p-6 px-4">
            <div className="flex justify-between">
                <div id="footer-left" className="flex justify-start flex-col">
                    <h1 className="gap-2 lg:text-5xl md:text-3xl text-lg dark:text-black text-white transition duration-500" style={{fontFamily: 'Bebas Neue'}}>Knockout Kings</h1>
                    <div className="flex flex-row lg:gap-6 md:gap-4 gap-2 mt-6 lg:text-md md:text-sm sm:text-[9px] text-[7px]" style={{fontFamily: 'Roboto'}}>
                        <a href='/About#About-us' className="dark:text-black text-white flex flex-row transition duration-500">About Us </a>
                        <a href='/Training' className="dark:text-black text-white flex flex-row transition duration-500">Training</a>
                        <a href='/#Services' className="dark:text-black text-white flex flex-row transition duration-500">Services</a>
                        <a href='/News' className="dark:text-black text-white flex flex-row transition duration-500">News</a>
                    </div>
                </div>
                <div id="footer-right" className="flex justify-between flex-col gap-6">
                    <h1 className="lg:text-4xl md:text-3xl text-lg dark:text-black text-white transition duration-500" style={{fontFamily: 'Bebas Neue'}}>our social media</h1>
                    <div className="flex flex-row gap-4">
                    </div>
                </div>
            </div>
            
            <hr style={{height: '3px', border: '10px'}} className="mt-14 bg-white dark:bg-black transition duration-500"/>
            <div className="flex justify-between">
                <div id="footer-left" className="flex justify-start flex-col">
                    <div className="flex flex-row lg:gap-6 md:gap-4 gap-2 mt-6 lg:text-sm sm:text-[9px] text-[7px]" style={{fontFamily: 'Roboto'}}>
                        <p className="dark:text-black text-white flex flex-row underline transition duration-500">Privacy Policy.</p>
                        <p className="dark:text-black text-white flex flex-row underline transition duration-500">Terms and Condition.</p>
                        <p className="dark:text-black text-white flex flex-row underline transition duration-500">Cookie Policy.</p>
                    </div>
                </div>
                <div id="footer-right" className="flex justify-end flex-col gap-6">
                    <h1 className="lg:text-xs sm:text-[9px] text-[7px] dark:text-black text-white transition duration-500" style={{fontFamily: 'Roboto'}}> @ {currentYear} Knockout Kings. All Rights Reserved.</h1>
                </div>
            </div>
        </footer>
    )
}