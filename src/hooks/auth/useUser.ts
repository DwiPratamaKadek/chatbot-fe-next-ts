
import { createUser } from "@/services/userService"
import { useState } from "react"
import { useRouter } from "next/navigation"

export const useAddUser = () => {
    const router = useRouter()

    const[name, setName] = useState("")
    const[password, setPassword] = useState("")   
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")

    const handleAddUser = async () => {
        if(!name || !password.trim) return setError("Data harus di isi")

        try{
            const user = await createUser({
                name, 
                password
            }) 
            console.log("data:", user)

            setMessage("Data terbuat")
            setError("")

            setName("")
            setPassword("")

            router.push("/login")
        }catch(error){
            console.error("otaknya ni bang:",error)
            setError("Login Gagal")
            setMessage("")
        }
    }
    return{
        name,
        password,
        setName, 
        setPassword,
        handleAddUser, 
        message, 
        error
    }
}

