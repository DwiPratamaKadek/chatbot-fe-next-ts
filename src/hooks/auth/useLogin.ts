'use client'

import { login } from "@/services/userService"
import { useState } from "react"
import { useRouter } from "next/navigation"

export const useLogin = () => {
    const router = useRouter()

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")

    const handleLogin = async () => {
        if(!name && !password.trim) return setError("name dan password wajib di isi!")

        try{
            await login({
                name, 
                password
            })
            console.log("cookie",document.cookie)

            setMessage("Login berhasil")
            setError ("")

            setName("")
            setPassword("")

            router.push("/room")
        }catch(error){
            console.error("ini otaknya yang kena:", error)
            setError("Login gagal")
            setMessage("")

        }
    }
    return{
        handleLogin, 
        name,
        setName, 
        password,
        setPassword, 
        error, 
        message,
    }
}