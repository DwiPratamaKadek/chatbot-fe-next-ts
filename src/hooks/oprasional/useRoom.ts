'use client'

import { useRouter } from "next/navigation"
import { createRoom } from "@/services/roomService"
import { useState } from "react"
import { useProtected } from "../auth/userProtected"

export const useRoom = () => {
    const router = useRouter() //ini buat rederect halaman nantinya
    const [title, setTitle] = useState("")

    useProtected()

    const handleAddButton = async () => {
        try{
            const room = await createRoom({
                title
            }) 
            console.log("data", room)
            setTitle("")
            router.push(`/chat/${room.data.id}`)
        }catch(error){
            console.error("ini mah otaknya kena :", error)
        }
    }

    return{
        handleAddButton,
        title, 
        setTitle
    }

}