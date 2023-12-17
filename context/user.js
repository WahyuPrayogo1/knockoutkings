"use client"

import { createContext, useContext, useState } from "react";

export const initialUserState = {
    email: null,
    uid: null
}

const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext)
}

export const UserProvider = (props) => {
    const [userState, setUserState] = useState(initialUserState)

    console.log({ userState })

    const SetUser = (userCredential) => {
        setUserState({ ...userCredential })
    }

    const ResetUser = () => {
        setUserState(initialUserState)
    }

    const value = { ...userState, SetUser, ResetUser}
    return <UserContext.Provider value={value} {...props}/>

}