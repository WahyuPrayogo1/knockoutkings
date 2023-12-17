"use client"
import '../../globals.css'
import '../../design.css'
import NavbarLoggedIn from '@/app/components/navbar-logged-in'
import Footer from "@/app/components/footer-logged-in"
import HeroArticle from '../bts/hero'
import ArticleTips from './article'
import withProtectedPage from '../../../../hoc/withProtectedPage'

const TipsPage = () => {
    return(
        <>
            <NavbarLoggedIn/>
            <HeroArticle/>
            <ArticleTips/>
            <Footer/>
        </>
    )
}

export default withProtectedPage(TipsPage)