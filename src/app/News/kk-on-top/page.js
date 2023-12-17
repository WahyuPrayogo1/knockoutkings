"use client"
import '../../globals.css'
import '../../design.css'
import NavbarLoggedIn from '@/app/components/navbar-logged-in'
import Footer from "@/app/components/footer-logged-in"
import HeroArticle from '../daud_yordan/hero'
import ArticleKKOnTop from './article'
import withProtectedPage from '../../../../hoc/withProtectedPage'

const KKOnTopPage = () => {
    return(
        <>
            <NavbarLoggedIn/>
            <HeroArticle/>
            <ArticleKKOnTop/>
            <Footer/>
        </>
    )
}

export default withProtectedPage(KKOnTopPage)