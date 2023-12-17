"use client"

import NavbarLoggedIn from "@/app/components/navbar-logged-in";
import '../../globals.css'
import '../../design.css'
import Footer from "@/app/components/footer-logged-in";
import withProtectedPage from "../../../../hoc/withProtectedPage";
import HeroWorkoutForWomen from "./hero";
import WorkoutForWomenList from "./training-and-user-list";

const WorkoutForBoys = () => {
    return (
        <>
            <NavbarLoggedIn/>
            <HeroWorkoutForWomen/>
            <WorkoutForWomenList/>
            <Footer/>
        </>
    )
}

export default withProtectedPage(WorkoutForBoys)