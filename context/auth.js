"use client"

import { useEffect, useState } from "react";
import { Authentication } from "../services/firebase";
import CircularProgress from '@mui/material/CircularProgress'
import { initialUserState, useUser } from "./user";

const AuthStateChangeProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false) 
    const user = useUser()
    const { SetUser } = user

    const InitiateAuthStateChange = () => {
        Authentication().onAuthStateChanged((user) => {
            if (user) {
                console.log('User is authenticated')
                SetUser({ email:user.email, uid:user.uid})
            } else {
                console.log('User is not authenticated')
                SetUser({ initialUserState })
            }
            setIsLoading(false)
        })
    }

    useEffect(() => {
        InitiateAuthStateChange()
    }, [])

    if (isLoading) {
        return <CircularProgress/>
    }

    return children

}

export default AuthStateChangeProvider