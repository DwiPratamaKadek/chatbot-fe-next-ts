'use client ';
import { sendMessage } from "@/services/chatService"
import { useState } from "react"; 

export const useChat = () => {
    const [message, setMessage] = useState("");
    const [answare, setAnsware] = useState(""); 

    const handleSendMessage = async () => {
        if (!message) return; 

        try{
            const response = await sendMessage(message); 
            console.log("Response from chatbot:", response);
            setAnsware(response.answare);
            setMessage(""); //reset input jadi kosong setelah pesan dikirim
        }catch (error) {
            console.error("Error sending message", error); 
        }
    }   
    return {
        message, 
        answare, 
        setMessage, 
        handleSendMessage
    }
}


