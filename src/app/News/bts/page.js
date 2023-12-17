"use client"
import '../../globals.css'
import '../../design.css'
import Footer from "@/app/components/footer-logged-in"
import NavbarLoggedIn from '@/app/components/navbar-logged-in'
import HeroArticle from './hero'
import ArticleBts from './article'
import withProtectedPage from '../../../../hoc/withProtectedPage'

const BTSPage = () => {
    return(
        <>
            <NavbarLoggedIn/>
            <HeroArticle/>
            <ArticleBts/>
            <Footer/>
        </>
    )
}

export default withProtectedPage(BTSPage)