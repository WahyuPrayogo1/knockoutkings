export const metadata = {
    title: 'Fancy Testimonials Slider - Cruip Tutorials',
    description: 'Page description',
  }
  
  import TestimonialImg01 from '/public/man-5.jpeg'
  import TestimonialImg02 from '/public/man-4.jpg'
  import TestimonialImg03 from '/public/man-3.jpg'
  import TestimonialsCoach from './testimonial-coach'
  
  export default function TestimonialSlider() {  
  
    const testimonials = [
      {
        img: TestimonialImg01,
        quote: "Knockout Kings Martial Arts Gym has transformed my life. I've gained confidence, discipline, and skills that extend beyond the mat. Truly grateful for this empowering journey.",
        name: 'John Doe',
        role: 'Head Trainer'
      },
      {
        img: TestimonialImg02,
        quote: "Knockout Kings Martial Arts Gym is where I ignite passion and discipline. Proud to be a Youth Trainer, shaping champions and building resilience in each student.",
        name: 'Michael Brown',
        role: 'Youth Trainer'
      },
      {
        img: TestimonialImg03,
        quote: "Knockout Kings is unparalleled in fostering strength and discipline. As a sport therapist, I've witnessed transformative results, affirming its commitment to holistic well-being.",
        name: 'David Lee',
        role: 'Sport Therapist'
      }
    ]
  
    return (
        <section className='bg-[#f5f5f5] overflow-hidden'>
            <div className="uppercase lg:text-6xl text-4xl mx-auto text-black py-2 text-center" style={{ fontFamily: 'Bebas Neue'}}><h1>what our coaches say?</h1></div>
            <TestimonialsCoach testimonials={testimonials} />
        </section>
    )
  }