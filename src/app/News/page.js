"use client"
import '../design.css'
import '../globals.css'
import Footer from "../components/footer-logged-in";
import HeroNews from "./hero-news";
import NavbarLoggedIn from '../components/navbar-logged-in';
import News from './news';
import TrendingNews from './trending-news';
import withProtectedPage from '../../../hoc/withProtectedPage';

const NewsPage = () => {
    return (
    <>
        <NavbarLoggedIn/>
        <HeroNews/>
        <News/>
        <TrendingNews/>
        <Footer/>
    </>
    )
}

export default withProtectedPage(NewsPage)