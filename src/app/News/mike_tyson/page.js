"use client"
import '../../globals.css'
import '../../design.css'
import NavbarLoggedIn from '@/app/components/navbar-logged-in'
import Footer from "@/app/components/footer-logged-in"
import ArticleMikeTyson from './article'
import HeroArticle from '../daud_yordan/hero'
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