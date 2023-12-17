"use client"
import '../../globals.css'
import '../../design.css'
import NavbarLoggedIn from '@/app/components/navbar-logged-in'
import Footer from "@/app/components/footer-logged-in"
import HeroArticle from '../../components/hero-bts'
import ArticlePalestine from '../../components/article-palestine'
import withProtectedPage from '../../../../hoc/withProtectedPage'

const PalestinePage = () => {
    return(
        <>
            <NavbarLoggedIn/>
            <HeroArticle/>
            <ArticlePalestine/>
            <Footer/>
        </>
    )
}

export default withProtectedPage(PalestinePage)