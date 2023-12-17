"use client"
import '../../globals.css'
import '../../design.css'
import NavbarLoggedIn from '@/app/components/navbar-logged-in'
import Footer from "@/app/components/footer-logged-in"
import ArticleMikeTyson from '../../components/article-mike-tyson'
import HeroArticle from '../../components/hero-daud-yordan'
import withProtectedPage from '../../../../hoc/withProtectedPage'

const MikeTysonPage = () => {
    return(
        <>
            <NavbarLoggedIn/>
            <HeroArticle/>
            <ArticleMikeTyson/>
            <Footer/>
        </>
    )
}

export default withProtectedPage(MikeTysonPage)