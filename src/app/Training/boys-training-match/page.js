"use client"
import NavbarLoggedIn from "@/app/components/navbar-logged-in";
import '../../globals.css'
import '../../design.css'
import Footer from "@/app/components/footer-logged-in";
import withProtectedPage from "../../../../hoc/withProtectedPage";
import HeroBoysTrainingMatch from "../../components/hero-boys";
import BoysTrainingMatchList from "../../components/training-and-user-list-boys";

const BoysTrainingMatch = () => {
    return (
        <>
            <NavbarLoggedIn/>
            <HeroBoysTrainingMatch/>
            <BoysTrainingMatchList/>
            <Footer/>
        </>
    )
}

export default withProtectedPage(BoysTrainingMatch)