"use client"
import '../design.css'
import '../globals.css'
import Footer from "../components/footer-logged-in";
import HeroNews from "../components/hero-news";
import NavbarLoggedIn from '../components/navbar-logged-in';
import News from '../components/news';
import TrendingNews from '../components/trending-news';
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