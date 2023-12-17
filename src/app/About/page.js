"use client"
import '../design.css'
import '../globals.css'
import Footer from "../components/footer-logged-in";
import NavbarLoggedIn from '../components/navbar-logged-in';
import HeroAbout from "./hero-about";
import Team from '../components/team';
import withProtectedPage from '../../../hoc/withProtectedPage';
import Testimonials from '../components/testimonials';
import History from './history';

const AboutPage = () => {
    return (
    <>
        <NavbarLoggedIn/>
        <HeroAbout/>
        <Testimonials/>
        <History/>
        <Team/>
        <Footer/>
    </>
    )
}

export default withProtectedPage(AboutPage)