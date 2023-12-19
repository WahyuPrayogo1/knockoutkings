"use client"

import { useEffect } from "react"
import { useUser } from "../context/user"
import { useRouter } from "next/navigation"

const withProtectedPage = (Component) => {
    return (props) => {
        const router = useRouter()
        const user = useUser()
        const { uid } = user 

        console.log(uid)

    useEffect(() => {
        if (!uid) {
            router.replace('/')
        }
    },[uid, router]);

        return <Component {...props}/>
    }
}

export default withProtectedPage