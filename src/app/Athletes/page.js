"use client"
import Footer from "../components/footer-logged-in";
import HeroAthletes from "../components/hero-athletes";
import GalleryAthletes from "../components/knockout-kings-athletes";
import NavbarLoggedIn from "../components/navbar-logged-in";
import '../design.css'
import '../globals.css'
import withProtectedPage from "../../../hoc/withProtectedPage";

const AthletesPage = () => {
    return (
    <>
        <NavbarLoggedIn/>
        <HeroAthletes/>
        <GalleryAthletes/>
        <Footer/>
    </>
    )
}

export default withProtectedPage(AthletesPage)