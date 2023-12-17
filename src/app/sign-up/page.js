"use client"

import { useState } from "react"
import withUnprotectedPage from "../../../hoc/withUnprotectedPage"
import HeroSignUp from "../components/hero-signup"
import SignUpModal from "../components/SignUpModalPage"

const SignUp = (OpenModal) => {
    const [open, setOpen] = useState(true)
    return (
        <>
            <HeroSignUp/>
            <SignUpModal open={open} CloseModal={() => setOpen(true)}/>
        </>
    )
}

export default withUnprotectedPage(SignUp)