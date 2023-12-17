"use client"
// import withProtected from '../../../hoc/withProtected';
// import { useUser } from '../../../context/user';
import '../design.css'
import '../globals.css'
import Footer from "../components/footer-logged-in";
import NavbarLoggedIn from '../components/navbar-logged-in';
import TrainingListandUserTrainingList from '../components/training-list';
import HeroTraining from '../components/hero-training';
import withProtectedPage from '../../../hoc/withProtectedPage';

const TrainingPage = () => {

    return (
    <>
        <NavbarLoggedIn/>
        <HeroTraining/>
        <TrainingListandUserTrainingList/>
        <Footer/>
    </>
    )
}

export default withProtectedPage(TrainingPage)