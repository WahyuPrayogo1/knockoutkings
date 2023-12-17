"use client"
export default function FooterLanding() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-10 z-10 w-full transition duration-500 bg-[#121212] p-6 ">
            <div className="flex justify-between">
                <div id="footer-left" className="flex justify-between items-start flex-col gap-6">
                    <div className="gap-2 lg:text-5xl sm:text-2xl text-xl md:text-3xl text-white transition duration-500 max-w-[100px] sm:max-w-[150px] md:max-w-[150px] lg:max-w-[250px]" style={{fontFamily: 'Bebas Neue'}}>ready for your new journey?</div>
                    <div style={{fontFamily: 'Roboto'}}>
                        <a href="mailto:iqbalalghifari18283@gmail.com" className="flex flex-row justify-center items-center gap-1 lg:gap-2 lg:text-md">
                            <div className="hidden lg:block md:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-white flex flex-row lg:text-base md:text-sm sm:text-sm text-[7px] transition duration-500"> iqbalalghifari18283@gmail.com </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div id="footer-right" className="flex justify-between items-end flex-col">
                    <div className="flex justify-center items-center gap-6">
                            <svg className="lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 text-white rounded-full" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clip-rule="evenodd">
                                </path>
                            </svg>
                        <a href="https://www.instagram.com/_miadev/">
                            <svg className="lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 text-white rounded-full" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                    clip-rule="evenodd">
                                </path>
                            </svg>
                        </a>
                        <a href="https://github.com/MuhammadIqbalAlghifari">
                            <svg className="lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 text-white rounded-full" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clip-rule="evenodd">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <a href="https://maps.app.goo.gl/BcEmrRmPRMe34L7m7">
                        <div className="flex flex-row justify-center items-center text-white gap-1 lg:gap-2 lg:text-md" style={{fontFamily: 'Roboto'}}>
                            <div className="hidden lg:block md:block">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            </div>
                            <div>
                                <p className="text-white lg:text-base sm:text-xs text-[7px] md:text-sm flex flex-row transition duration-500"> Indonesia, West Java, Tasikmalaya City. </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            
            <hr style={{height: '3px', border: '10px'}} className="mt-6 bg-white  transition duration-500"/>
            <div className="flex justify-between" style={{fontFamily: 'Roboto'}}>
                <div id="footer-left" className="flex justify-start flex-col">

                    <div className="flex flex-row lg:gap-6 mt-6 md:gap-3 gap-0.5 lg:text-sm md:text-sm sm:text-xs text-[6px]" style={{fontFamily: 'Roboto'}}>
                        <p className="text-white flex flex-row underline transition duration-500">Privacy Policy.</p>
                        <p className="text-white flex flex-row underline transition duration-500">Terms and Condition.</p>
                        <p className="text-white flex flex-row underline transition duration-500">Cookie Policy.</p>
                    </div>
                </div>
                <div id="footer-right" className="flex justify-end flex-col gap-6">
                    <h1 className="lg:text-xs md:text-xs sm:text-xs text-[5px] text-right text-white transition duration-500" style={{fontFamily: 'Roboto'}}> @ {currentYear} Knockout Kings. All Rights Reserved.</h1>
                </div>
            </div>
        </footer>
    )
}