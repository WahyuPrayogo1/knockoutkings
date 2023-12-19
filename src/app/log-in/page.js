"use client"
import { useState } from "react"
import withUnprotectedPage from "../../../hoc/withUnprotectedPage"
import HeroLogIn from "../components/hero-login"
import LoginModal from "../components/LoginModalPage"

const LogIn = (OpenModal) => {
    const [open, setOpen] = useState(true)
    return (
        <>
            <HeroLogIn/>
            <LoginModal open={open} CloseModal={() => setOpen(true)}/>
        </>
    )
}

export default withUnprotectedPage(LogIn)