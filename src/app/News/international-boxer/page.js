"use client"
import '../../globals.css'
import '../../design.css'
import NavbarLoggedIn from '@/app/components/navbar-logged-in'
import Footer from "@/app/components/footer-logged-in"
import HeroArticle from '../../components/hero-bts'
import ArticleTysonFury from '../../components/article-international-boxer'
import withProtectedPage from '../../../../hoc/withProtectedPage'

const InternationalBoxerPage = () => {
    return(
        <>
            <NavbarLoggedIn/>
            <HeroArticle/>
            <ArticleTysonFury/>
            <Footer/>
        </>
    )
}

export default withProtectedPage(InternationalBoxerPage)