"use client"
import NavbarLoggedIn from "@/app/components/navbar-logged-in";
import '../../globals.css'
import '../../design.css'
import Footer from "@/app/components/footer-logged-in";
import withProtectedPage from "../../../../hoc/withProtectedPage";
import HeroWorkoutForBoys from "../../components/hero-men";
import WorkoutForMenList from "../../components/training-and-user-list-men";

const WorkoutForBoys = () => {
    return (
        <>
            <NavbarLoggedIn/>
            <HeroWorkoutForBoys/>
            <WorkoutForMenList/>
            <Footer/>
        </>
    )
}

export default withProtectedPage(WorkoutForBoys)