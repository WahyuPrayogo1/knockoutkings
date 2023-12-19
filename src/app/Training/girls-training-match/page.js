"use client"
import NavbarLoggedIn from "@/app/components/navbar-logged-in";
import '../../globals.css'
import '../../design.css'
import Footer from "@/app/components/footer-logged-in";
import withProtectedPage from "../../../../hoc/withProtectedPage";
import HeroGirlsTrainingMatch from "../../components/hero-girls";
import GirlsTrainingMatchList from "../../components/training-and-user-list-girls";

const GirlsTrainingMatch = () => {
    return (
        <>
            <NavbarLoggedIn/>
            <HeroGirlsTrainingMatch/>
            <GirlsTrainingMatchList/>
            <Footer/>
        </>
    )
}

export default withProtectedPage(GirlsTrainingMatch)