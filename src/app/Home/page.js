"use client"

import '../globals.css'
import '../design.css'
import NavbarLoggedIn from '../components/navbar-logged-in';
import Hero from "../components/hero";
import Service from "../components/service";
import Features from "../components/features";
import Gallery from "../components/gallery";
import Footer from "../components/footer-logged-in";
import withProtectedPage from '../../../hoc/withProtectedPage';
import Empower from '../components/empower';
import FAQ from '../components/faq';


const Home = () => {
  return (
    <>
      <NavbarLoggedIn/>
      <Hero/>
      <Empower/>
      <Service/>
      <Features/>
      <FAQ/>
      <Gallery/>
      <Footer/>
    </>

  )
}

export default withProtectedPage(Home)
