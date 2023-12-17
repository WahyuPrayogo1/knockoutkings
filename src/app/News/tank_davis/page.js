"use client"
import '../../globals.css'
import '../../design.css'
import NavbarLoggedIn from '@/app/components/navbar-logged-in'
import Footer from "@/app/components/footer-logged-in"
import HeroArticle from '../../components/hero-daud-yordan'
import ArticleTankDavis from '../../components/article-tank-davis'
import withProtectedPage from '../../../../hoc/withProtectedPage'

const TankDavisPage = () => {
    return(
        <>
            <NavbarLoggedIn/>
            <HeroArticle/>
            <ArticleTankDavis/>
            <Footer/>
        </>
    )
}

export default withProtectedPage(TankDavisPage)