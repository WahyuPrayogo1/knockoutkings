"use client"
import withProtectedPage from "../../../hoc/withProtectedPage"
import { NavbarLoggedInShop }  from "../components/navbar-logged-in-shop"
import Benefits from "../components/benefits"
import { CartProvider } from "../components/cart-context"
import HeroShop from "../components/hero-shop"
import OurBrands from "../components/our-brand"
import OurCatalogues from "../components/our-catalogues"
import OurSponsor from "../components/our-sponsor"
import Promo from "../components/promo"
import RecentlySoldProduct from "../components/recently-sold"
import RecommendedProduct from "../components/recommended"
import TopSeller from "../components/top-seller"
import { useEffect } from "react"
import FooterShop from "../components/footer-logged-in-shop"


const ShopPage = () => {

    useEffect(() => {

        const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js"
        const clientKey = process.env.NEXT_PUBLIC_CLIENT
        const script = document.createElement('script')
        script.src = snapScript
        script.setAttribute('data-client-key', clientKey)
        script.async = true
        
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }

    }, [])

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
            <FooterShop/>
        </CartProvider>
    )
}

export default withProtectedPage(ShopPage)