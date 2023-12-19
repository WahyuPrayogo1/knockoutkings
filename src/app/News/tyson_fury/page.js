"use client"
import '../../globals.css'
import '../../design.css'
import NavbarLoggedIn from '@/app/components/navbar-logged-in'
import Footer from "@/app/components/footer-logged-in"
import HeroArticle from '../../components/hero-daud-yordan'
import ArticleTysonFury from '../../components/article-tyson-fury'
import withProtectedPage from '../../../../hoc/withProtectedPage'

const TysonFuryPage = () => {
    return(
        <>
            <NavbarLoggedIn/>
            <HeroArticle/>
            <ArticleTysonFury/>
            <Footer/>
        </>
    )
}

export default withProtectedPage(TysonFuryPage)