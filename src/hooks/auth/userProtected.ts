import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { getMe } from "@/services/userService"

export const useProtected = () => {
    const router = useRouter()

    useEffect(() => {
        const validation = async () => {
            try {
                const user = await getMe()
                if (!user){
                    router.push("/login")
                    return
                }
            }catch(error){
                console.error("ini errornya", error)
                router.push("/login")
            }
        }
        validation()
    }, [router])
}
