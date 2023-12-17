"use client"

import withProtectedPage from "../../../hoc/withProtectedPage"
import Footer from "../components/footer-logged-in"
import { NavbarLoggedInShop }  from "../components/navbar-logged-in-shop"
import Benefits from "./benefits"
import { CartProvider } from "./cart-context"
import HeroShop from "./hero-shop"
import NeedHelp from "./need-help"
import OurBrands from "./our-brand"
import OurCatalogues from "./our-catalogues"
import OurSponsor from "./our-sponsor"
import Promo from "./promo"
import RecentlySoldProduct from "./recently-sold"
import RecommendedProduct from "./recommended"
import TopSeller from "./top-seller"


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