import { useUser } from "../context/user"
import { useRouter } from "next/navigation"

const withUnprotectedPage = (Component) => {
    return (props) => {
        const router = useRouter()
        const user = useUser()
        const { uid } = user 

        if (uid) {
            router.replace('/Home')
            return <></>
        }

        return <Component {...props}/>
    }
}

export default withUnprotectedPage