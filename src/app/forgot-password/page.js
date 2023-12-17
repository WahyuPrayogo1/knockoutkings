"use client"

import { useState } from "react"
import withUnprotectedPage from "../../../hoc/withUnprotectedPage"
import Hero from "./hero"
import ForgotPasswordModal from "./forgot-password"

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