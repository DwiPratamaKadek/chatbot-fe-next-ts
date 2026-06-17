'use client'

import { useState, useEffect} from "react"
import { useProtected } from "../auth/userProtected"
import { history } from "@/services/chatService"
import { chatTypes } from "@/types/chatTypes"

export const useHistory = () => {
    const [room, setRoom] = useState<chatTypes[]>([])
    const [ id, setId] = useState("")

    useProtected()
        
    useEffect(() => {
        const getData = async () => {
            try{
                // ambil semua room
                const getHistory = await history()
                console.log("data:", getHistory)
                setRoom(getHistory.data)
                // kita ambil id per room 
                setId(getHistory.id)
            }catch(error){
                console.error("error",error)
            }
        }
        getData()
    }, [])

    return{room, id}
}