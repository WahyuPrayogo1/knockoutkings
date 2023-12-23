"use client"
import React, { useState, useEffect, useRef } from 'react';

function Testimonials() {

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
          ref.current.querySelectorAll('.tersembunyi-hero').forEach((el) => {
            el.classList.add('slide');
          });
        } else {
            ref.current.querySelectorAll(".tersembunyi-hero").forEach((el) => {
              el.classList.remove("slide");
            });
        }
      }, [isIntersecting]);

    const testimonialsData = [
        {
            text: "Knockout Kings is a leading boxing martial arts center dedicated to developing quality boxing athletes and improving your fitness. They offer comprehensive training guided by professional trainers.",
            author: "Anderson Silva",
            title: "Former Middleweight Champion, MMA",
            image: "anderson silva.jpeg"
        },
        {
            text: "Knockout Kings Martial Arts Centre transformed my approach to martial arts. The expert trainers and the supportive community pushed me beyond my limits. Thanks to their guidance, I am now a champion, and my journey with Knockout Kings has been nothing short of incredible.",
            author: "Mike Tyson",
            title: "Former Heavyweight Champion, WBC",
            image: "mike tyson.jpg"
        },
        {
            text: "Training at Knockout Kings was a game-changer for me. The rigorous yet personalized training programs honed my skills, and the camaraderie among fellow athletes fueled my determination. Becoming a champion was not just a goal but an inevitable outcome of the exceptional training here.",
            author: "Deontay Wilder",
            title: "Former Heavyweight Champion, WBC",
            image: "deontay wilder.jpg"
        },
        {
            text: "I owe my success to Knockout Kings Martial Arts Centre. The combination of traditional martial arts values and cutting-edge training techniques helped me rise to the top. The supportive environment and expert coaching made my championship journey unforgettable.",
            author: "Canelo Alvarez",
            title: "Middleweight Champion, WBC",
            image: "canelo.jpg"
        },
        {
            text: "Knockout Kings isn't just a gym, it's a family that pushes you to be your best. The trainers' commitment to excellence and the diverse training programs played a pivotal role in my championship victory. I am proud to be part of the Knockout Kings legacy.",
            author: "Dustin Poirier",
            title: "Former Lightweight Champion, MMA",
            image: "dustin poirier.jpg"
        },
        {
            text: "I entered Knockout Kings Martial Arts Centre seeking a challenge, and what I found was a path to greatness. The dynamic training sessions, combined with unwavering support from both trainers and fellow athletes, propelled me to become a champion. Knockout Kings is where champions are made.",
            author: "Connor Mcgregor",
            title: "Former Lightweight Champion, MMA",
            image: "mcgregor.jpg"
        },
        {
            text: "Being a champion is not just about winning, it's about continuous growth. Knockout Kings provided the perfect environment for me to evolve as a martial artist. The dedicated trainers and the emphasis on discipline have shaped me into the fighter I am today.",
            author: "Jon Jones",
            title: "Heavyweight Champion, MMA",
            image: "jon jones.jpg"
        },
        {
            text: "The journey to becoming a champion is demanding, but with Knockout Kings by my side, it became an exhilarating adventure. The holistic approach to training, the focus on technique, and the encouragement from the community made the difference in my championship journey.",
            author: "Khabib Nurmagomedov",
            title: "Former Lightweight Champion, MMA",
            image: "Khabib-Nurmagomedov.jpg"
        },
        {
            text: "Knockout Kings Martial Arts Centre is more than just a training facility, it's a culture of champions. The relentless pursuit of excellence, combined with the supportive community, fueled my determination to become a champion. This place is a breeding ground for success.",
            author: "Manny Paquiao",
            title: "Former Lightweight Champion, WBC",
            image: "paquiao.jpg"
        },
        {
            text: "At Knockout Kings, they don't just teach you how to fight, they teach you how to win. The comprehensive training programs, the attention to detail, and the positive atmosphere create the perfect formula for success. I am grateful for the lessons learned and the championships won at Knockout Kings.",
            author: "Justin Gaethje",
            title: "Former Lightweight Champion, MMA",
            image: "justin gaethje.jpg"
        },
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    };

    return (
        <section className="w-full -mt-2.5 dark:bg-[#121212] transition lg:px-12 px-6 duration-500 bg-[#f5f5f5]" ref={ref}>
            <div id='tittle' className="tersembunyi-hero dark:text-white transition duration-500 text-black lg:text-6xl text-4xl flex justify-center pt-8 z-40" style={{ fontFamily: 'Bebas Neue' }}> What our champion says? </div>

            <div className="flex flex-col lg:flex-row justify-center gap-24 lg:items-start items-center pt-16 z-10">
                <div id="hero-landing-left" className="flex justify-center items-start gap-5 tersembunyi-hero w-full max-w-md">
                    <div className="flex flex-col justify-center items-end gap-20">
                        <img src={testimonialsData[currentTestimonial].image} alt="" className="h-32 w-32 object-cover shadow-black shadow-lg object-top"/>
                        <h3 className="rotate-90 text-black dark:text-white transition duration-500 md:text-base text-xs" style={{fontFamily: 'Roboto'}}>W o r d s</h3>
                    </div>
                    <div className="">
                        <img src={testimonialsData[currentTestimonial].image} alt="" className="h-32 w-32 object-cover object-top shadow-black shadow-lg"/>
                    </div>
                    <div className="">
                        <img src={testimonialsData[currentTestimonial].image} alt="" className="h-96 w-[400px] object-cover object-top shadow-black shadow-lg"/>
                    </div>
                </div>

                <div id="hero-landing-right" className="flex flex-col justify-between tersembunyi-hero lg:items-start items-center overflow-hidden gap-6 max-w-2xl">
                    <div className="lg:text-left md:text-base text-xs text-center transition duration-500 dark:text-white text-black font-medium" style={{ fontFamily: 'Roboto' }}>
                        "{testimonialsData[currentTestimonial].text}"
                    </div>
                    <div className="flex flex-col justify-start lg:items-start items-center gap-2">
                        <div className="lg:text-left text-center md:text-base text-xs transition duration-500 dark:text-white text-black font-semibold" style={{ fontFamily: 'Roboto' }}>{testimonialsData[currentTestimonial].author}</div>
                        <div className="lg:text-left text-center md:text-base text-xs transition duration-500 dark:text-white text-black font-semibold" style={{ fontFamily: 'Roboto' }}>{testimonialsData[currentTestimonial].title}</div>
                    </div>
                    <div className="flex justify-start items-start gap-2">
                        <button className="bg-transparent md:px-4 md:py-4 px-2 py-2 border-black border dark:border-white transition duration-500" onClick={prevTestimonial} id="previous">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-6 md:h-6 w-4 h-4 text-black dark:text-white transition duration-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                        <button className="bg-transparent md:px-4 md:py-4 px-2 py-2 border-black border dark:border-white transition duration-500" onClick={nextTestimonial} id="next">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-6 md:h-6 w-4 h-4 text-black dark:text-white transition duration-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;




// "use client"

// function Testimonials() {


//     return (
//         <section className="w-full -mt-2.5 dark:bg-[#121212] transition duration-500 bg-[#f5f5f5]">
    
        
//             <div className="dark:text-white transition duration-500 text-black text-6xl flex justify-center pt-8 z-40" style={{fontFamily: 'Bebas Neue'}}> What our champion says? </div>

//             <div className="flex justify-center gap-24 items-start px-6 pt-16 z-10">

//                 <div id="hero left" className="flex justify-center items-start gap-5">
                    // <div className="flex flex-col justify-center items-end gap-20">
                    //     <img src="mike tyson.jpg" alt="" className="h-32 w-32 object-cover object-top"/>
                    //     <h3 className="rotate-90 text-black dark:text-white" style={{fontFamily: 'Roboto'}}>W o r d s</h3>
                    // </div>
                    // <div className="">
                    //     <img src="mike tyson.jpg" alt="" className="h-32 w-32 object-cover object-top"/>
                    // </div>
                    // <div className="">
                    //     <img src="mike tyson.jpg" alt="" className="h-96 object-cover object-center"/>
                    // </div>
//                 </div>

//                 <div id="hero-right" className="flex flex-col justify-between items-start overflow-hidden gap-6">
//                     <div className="text-left transition duration-500 dark:text-white text-black font-medium leading-relaxed" style={{fontFamily:'Roboto'}}>"Knockout Kings is a leading boxing martial arts center <br/> dedicated to developing quality boxing athletes and improving your fitness. <br/> They offering comprehensive training guided by professional trainers."</div>
//                     <div className="flex flex-col justify-start items-start gap-2">    
//                         <div className="text-left transition duration-500 dark:text-white text-black font-semibold leading-relaxed" style={{fontFamily:'Roboto'}}>Mike Tyson</div>
//                         <div className="text-left transition duration-500 dark:text-white text-black font-semibold leading-relaxed" style={{fontFamily:'Roboto'}}>former heavyweight champion, WBC</div>
//                     </div>
//                     <div className="flex justify-start items-start gap-2">    
//                         <button className="bg-transparent px-4 py-4 border-black border dark:border-white" id="previous">
                            // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            //     <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            // </svg>
//                         </button>
//                         <button className="bg-transparent px-4 py-4 border-black border dark:border-white" id="next">
                            // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black dark:text-white">
                            //     <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            // </svg>
//                         </button>
//                     </div>
//                 </div>

//             </div>

//         </section>
//     )
// }

// export default Testimonials;