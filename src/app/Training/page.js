"use client"
// import withProtected from '../../../hoc/withProtected';
// import { useUser } from '../../../context/user';
import '../design.css'
import '../globals.css'
import Footer from "../components/footer-logged-in";
import NavbarLoggedIn from '../components/navbar-logged-in';
import TrainingListandUserTrainingList from './training-list-and-user-training-list';
import HeroTraining from './hero-training';
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