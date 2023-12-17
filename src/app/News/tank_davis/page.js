"use client"
import '../../globals.css'
import '../../design.css'
import NavbarLoggedIn from '@/app/components/navbar-logged-in'
import Footer from "@/app/components/footer-logged-in"
import HeroArticle from '../daud_yordan/hero'
import ArticleTankDavis from './article'
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