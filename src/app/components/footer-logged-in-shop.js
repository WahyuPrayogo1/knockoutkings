"use client"
export default function FooterShop() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="z-10 w-full  transition duration-500 bg-[#121212] px-6 py-6 lg:py-12 lg:px-12">
            <div className="flex justify-between items-start py-4">
                <div id="footer-left" className="flex justify-start md:gap-5 gap-2 flex-col">
                    <h1 className="gap-2 lg:text-5xl md:text-3xl text-lg text-white transition duration-500" style={{fontFamily: 'Bebas Neue'}}>Knockout Kings</h1>
                    <p className="text-white lg:text-md md:text-sm sm:text-[9px] text-[7px] transition duration-500" style={{fontFamily: 'Roboto'}}>Echoing Triumphs, Unleashing Power.</p>
                </div>
                <div id="footer-right" className="flex justify-start flex-col gap-0.5 uppercase">
                    <p className="text-white lg:text-md md:text-sm sm:text-[9px] text-[7px] transition duration-500" style={{fontFamily: 'Roboto'}}>pro license</p>
                    <p className="text-white lg:text-md md:text-sm sm:text-[9px] text-[7px] transition duration-500" style={{fontFamily: 'Roboto'}}>TRAINING</p>
                    <p className="text-white lg:text-md md:text-sm sm:text-[9px] text-[7px] transition duration-500" style={{fontFamily: 'Roboto'}}>NEWS</p>
                </div>
                <div id="footer-right" className="flex justify-start flex-col gap-0.5 uppercase">
                    <p className="text-white lg:text-md md:text-sm sm:text-[9px] text-[7px] transition duration-500" style={{fontFamily: 'Roboto'}}>Services</p>
                    <p className="text-white lg:text-md md:text-sm sm:text-[9px] text-[7px] transition duration-500" style={{fontFamily: 'Roboto'}}>athletes</p>
                </div>
                <div id="footer-right" className="flex justify-start flex-col gap-0.5 uppercase">
                    <p className="text-white lg:text-md md:text-sm sm:text-[9px] text-[7px] transition duration-500" style={{fontFamily: 'Roboto'}}>Tournament</p>
                    <p className="text-white lg:text-md md:text-sm sm:text-[9px] text-[7px] transition duration-500" style={{fontFamily: 'Roboto'}}>Membership</p>
                    <p className="text-white lg:text-md md:text-sm sm:text-[9px] text-[7px] transition duration-500" style={{fontFamily: 'Roboto'}}>Support</p>
                </div>
                <div id="footer-right" className="flex justify-start flex-col gap-0.5 uppercase">
                    <p className="text-white lg:text-md md:text-sm sm:text-[9px] text-[7px] transition duration-500" style={{fontFamily: 'Roboto'}}>About Us</p>
                    <p className="text-white lg:text-md md:text-sm sm:text-[9px] text-[7px] transition duration-500" style={{fontFamily: 'Roboto'}}>Our Store</p>
                    <p className="text-white lg:text-md md:text-sm sm:text-[9px] text-[7px] transition duration-500" style={{fontFamily: 'Roboto'}}>Partnership</p>
                    <p className="text-white lg:text-md md:text-sm sm:text-[9px] text-[7px] transition duration-500" style={{fontFamily: 'Roboto'}}>Event</p>
                </div>
            </div>
            
            <hr style={{height: '3px', border: '10px'}} className="bg-white transition duration-500 lg:my-6 my-3"/>
                <div className="flex justify-center items-center flex-col md:gap-5 gap-3 py-4 transition-all">
                    <div className="flex justify-center md:gap-4 gap-2 items-center">

                        <a href="">
                            <svg className="duration-500 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 text-white border border-white p-1 rounded-full" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd">
                                </path>
                            </svg>
                        </a>

                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="duration-500 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 text-white border border-white p-1 rounded-full" fill="currentColor"viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>

                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="duration-500 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 text-white border border-white p-1 rounded-full" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                        </a>

                        <a href="https://www.instagram.com/_miadev/">
                            <svg className="duration-500 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 text-white border border-white p-1 rounded-full" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                    clipRule="evenodd">
                                </path>
                            </svg>
                        </a>
                        <a href="https://github.com/MuhammadIqbalAlghifari">
                            <svg className="duration-500 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 text-white border border-white p-1 rounded-full" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clipRule="evenodd">
                                </path>
                            </svg>
                        </a>

                    </div>
                    <h1 className="lg:text-xs sm:text-[9px] text-[7px] text-white transition duration-500" style={{fontFamily: 'Roboto'}}> @ {currentYear} Knockout Kings. All Rights Reserved.</h1>
                </div>
        </footer>
    )
}