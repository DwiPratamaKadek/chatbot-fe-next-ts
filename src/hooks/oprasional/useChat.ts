'use client ';

import { sendMessage, chatHistory, getChatHistory } from "@/services/chatService"
import { useState, useEffect } from "react"; 
import { useProtected } from "../auth/userProtected";

export const useChat = (sessionId: string) => {
    const [message, setMessage] = useState("")
    const [chat, setChat] = useState<{message: string, role: string}[]>([])

    useProtected()

    useEffect(() => {
        const chatHistory = async () => {
            try{
                const chatLo = await getChatHistory(sessionId)
                console.log("Neh Chat data lo :", chatLo)
                setChat(chatLo.data)
            }catch(error){
                console.error("weh error anjay", error)
            }
        }
        chatHistory()
    }, [sessionId])

    const handleSendMessage = async () => {
        if (!message.trim()) return; 

        try{
            const response = await sendMessage(message, sessionId); 
            console.log("Response from chatbot:", response);
            setChat(prev => [
                ...prev, 
                {message, role: "user"},
                {message:response.data.answer   , role:"assistant"}
            ]
        )
            setMessage(""); //reset input jadi kosong setelah pesan dikirim
        }catch (error) {
            console.error("Error sending message", error); 
        }
    }   
    return {
        setMessage,
        message, 
        chat,
        handleSendMessage
    }
}


