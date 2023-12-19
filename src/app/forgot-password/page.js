"use client"
import { useState } from "react"
import withUnprotectedPage from "../../../hoc/withUnprotectedPage"
import Hero from "../components/hero-forgot-password"
import ForgotPasswordModal from "../components/forgot-password"

const ForgotPassword = (OpenModal) => {
    const [open, setOpen] = useState(true)
    return (
        <>
            <Hero/>
            <ForgotPasswordModal open={open} CloseModal={() => setOpen(true)}/>
        </>
    )
}

export default withUnprotectedPage(ForgotPassword)