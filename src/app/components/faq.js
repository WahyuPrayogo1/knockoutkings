"use client"
import { useEffect, useState, useRef } from "react";

export default function FAQ() {

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

    return (
        <section className="py-12 dark:bg-[#121212] -mt-2.5 bg-[#f5f5f5] transition duration-500" ref={ref}>

            <div className="tersembunyi-footer">
                <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 lg:px-8 lg:py-2">
                    <div className="text-center">
                    <div className="md:text-xl text-lg uppercase tracking-wider dark:text-white text-black transition duration-500 mb-1" style={{fontFamily: 'Bebas Neue'}}>
                        We Answer
                    </div>
                    <h2 className="lg:text-4xl md:text-3xl text-2xl font-black dark:text-white text-black transition duration-500">
                        Frequently Asked Questions
                    </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <div className="lg:text-left text-center">
                            <h4 className="font-bold md:text-base text-sm dark:text-white text-black transition duration-500 mb-2">
                            What are the membership options available at Knockout Kings Boxing Center?
                            </h4>
                            <p className="leading-relaxed text-black md:text-sm text-xs dark:text-white transition duration-500 font-medium">
                            We offer various membership options, including monthly, quarterly, and annual plans, as well as pay-as-you-go options. You can choose the one that best suits your fitness goals and budget. Our team can help you find the perfect membership package during your visit.
                            </p>
                        </div>
                        <div className="lg:text-left text-center">
                            <h4 className="font-bold md:text-base text-sm mb-2 dark:text-white  text-black transition duration-500">
                            Are women welcome at Knockout Kings Boxing Center?
                            </h4>
                            <p className="leading-relaxed text-black md:text-sm text-xs dark:text-white transition duration-500 font-medium">
                            Absolutely! Knockout Kings is an inclusive and welcoming environment for individuals of all genders and ages. We have female trainers and offer women's boxing classes as well. Everyone is encouraged to pursue their boxing and fitness goals with us.
                            </p>
                        </div>
                        <div className="lg:text-left text-center">
                            <h4 className="font-bold md:text-base text-sm mb-2 dark:text-white text-black transition duration-500">
                            Do I need prior boxing experience to join your gym?
                            </h4>
                            <p className="leading-relaxed text-black md:text-sm text-xs dark:text-white transition duration-500 font-medium">
                            Not at all. Whether you're a complete beginner or an experienced boxer, our programs are designed to cater to all levels. Our trainers will assess your skills and customize your training plan accordingly, ensuring you get the most out of your sessions.
                            </p>
                        </div>
                        <div className="lg:text-left text-center">
                            <h4 className="font-bold md:text-base text-sm mb-2 dark:text-white text-black transition duration-500">
                            What safety measures do you have in place for boxing training?
                            </h4>
                            <p className="leading-relaxed text-black md:text-sm text-xs dark:text-white transition duration-500 font-medium">
                            We take safety seriously. Our gym is equipped with proper safety gear, and our trainers ensure that all participants use it correctly. Additionally, we provide guidance on injury prevention and maintain a clean and sanitized environment to promote the health and well-being of our members.
                            </p>
                        </div>
                        <div className="lg:text-left text-center">
                            <h4 className="font-bold md:text-base text-sm mb-2 dark:text-white  text-black transition duration-500">
                            Do you offer personal training sessions at Knockout Kings Boxing Center?
                            </h4>
                            <p className="leading-relaxed text-black md:text-sm text-xs dark:text-white transition duration-500 font-medium">
                            Yes, we offer personalized training sessions with our experienced trainers. These one-on-one sessions can help you progress more rapidly and achieve your specific goals. You can discuss the details, scheduling, and pricing of personal training during your visit or by reaching out to our staff.
                            </p>
                        </div>
                        <div className="lg:text-left text-center">
                            <h4 className="font-bold md:text-base text-sm mb-2 dark:text-white text-black transition duration-500">
                            Can I participate in competitive boxing at Knockout Kings Boxing Center?
                            </h4>
                            <p className="leading-relaxed text-black md:text-sm text-xs dark:text-white transition duration-500 font-medium">
                            Yes, we offer training and support for competitive boxing. If you're interested in pursuing boxing as a competitive sport, our experienced trainers can help you develop the necessary skills and conditioning. We also host sparring sessions and have connections with local boxing events and competitions. 
                            </p>
                        </div>
                    </div>
                    <div className="text-center dark:text-white text-black transition duration-500">
                    <a href="/#" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-gray-200 bg-white dark:bg-red-600 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none">
                        <svg className="hi-mini hi-arrow-top-right-on-square text-black dark:text-white transition duration-500 inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd"/><path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd"/></svg>
                        <span className="text-black dark:text-white transition duration-500">Go to support center</span>
                    </a>
                    </div>
                </div>
            </div>

        </section>
    )
}