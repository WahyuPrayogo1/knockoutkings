"use client"

import withProtectedPage from "../../../hoc/withProtectedPage"
import Footer from "../components/footer-logged-in"
import { NavbarLoggedInShop }  from "../components/navbar-logged-in-shop"
import Benefits from "../components/benefits"
import { CartProvider } from "../components/cart-context"
import HeroShop from "../components/hero-shop"
import NeedHelp from "../components/need-help"
import OurBrands from "../components/our-brand"
import OurCatalogues from "../components/our-catalogues"
import OurSponsor from "../components/our-sponsor"
import Promo from "../components/promo"
import RecentlySoldProduct from "../components/recently-sold"
import RecommendedProduct from "../components/recommended"
import TopSeller from "../components/top-seller"


const ShopPage = () => {


    return (
        <CartProvider>
            <NavbarLoggedInShop/>
            <HeroShop/>
            <Promo/>
            <TopSeller/>
            <RecommendedProduct/>
            <OurSponsor/>
            <Benefits/>
            <OurBrands/>
            <OurCatalogues/>
            <RecentlySoldProduct/>
            <NeedHelp/>
            <Footer/>
        </CartProvider>
    )
}

export default withProtectedPage(ShopPage)