"use client"
import Navbar from "./components/navbar";
import './globals.css'
import './design.css'
import { useState } from "react";
import withUnprotectedPage from "../../hoc/withUnprotectedPage";
import HeroLandingPage from "./components/hero-landing-page";
import WhyChooseUs from "./components/why-choose-us";
import AboutUs from "./components/about-us-landing";
import LastStand from "./components/last-stand";
import OurService from "./components/our-service";
import SignUpLandingPage from "./components/SignUpModal";
import Pricing from "./components/pricing";
import OurTraining from "./components/our-training";
import FooterLanding from "./components/footer-landing";
import ContactUs from "./components/contact-us";
import TestimonialSlider from "./components/testimonials-slider";


const LandingPage = ({OpenModal}) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Navbar OpenModal={() => setOpen(true)}/>
      <HeroLandingPage OpenModal={() => setOpen(true)}/>
      <WhyChooseUs/>
      <AboutUs/>
      <LastStand OpenModal={() => setOpen(true)}/>
      <Pricing OpenModal={() => setOpen(true)}/>
      <TestimonialSlider/>
      <OurService OpenModal={() => setOpen(true)}/>
      <OurTraining/>
      <ContactUs/>
      <SignUpLandingPage open={open} CloseModal={() => setOpen(false)}/>
      <FooterLanding/>
    </>

  )
}

export default withUnprotectedPage(LandingPage)
