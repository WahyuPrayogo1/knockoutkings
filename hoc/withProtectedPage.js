import { useUser } from "../context/user"
import { useRouter } from "next/navigation"

const withProtectedPage = (Component) => {
    return (props) => {
        const router = useRouter()
        const user = useUser()
        const { uid } = user 

        console.log(uid)

        if (!uid) {
            router.replace('/')
            return <></>
        }

        return <Component {...props}/>
    }
}

export default withProtectedPage