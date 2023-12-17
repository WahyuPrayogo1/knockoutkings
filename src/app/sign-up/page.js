"use client"

import { useState } from "react"
import withUnprotectedPage from "../../../hoc/withUnprotectedPage"
import HeroSignUp from "./hero-signup"
import SignUpModal from "./SignUpModal"

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