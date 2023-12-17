"use client"
import '../../globals.css'
import '../../design.css'
import Footer from "@/app/components/footer-logged-in"
import NavbarLoggedIn from '@/app/components/navbar-logged-in'
import ArticleDaudYordan from './article'
import HeroArticle from './hero'
import withProtectedPage from '../../../../hoc/withProtectedPage'

const DaudYordanPage = () => {
    return(
        <>
            <NavbarLoggedIn/>
            <HeroArticle/>
            <ArticleDaudYordan/>
            <Footer/>
        </>
    )
}

export default withProtectedPage(DaudYordanPage)