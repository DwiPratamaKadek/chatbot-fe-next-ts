'use client'; 

import ChatResponse from "@/component/ui/ChatResponse";
import TextInput from "@/component/ui/TextInput";
import SideBar from "@/component/layout/SideBar";

import { useChat } from "@/hooks/useChat";

export default function ChatbotPage() {

    const {message, answare, setMessage, handleSendMessage} = useChat();

    return(
        <section className="flex bg-gray-900 text-white ">
            <SideBar></SideBar>
            <TextInput value={message} onChange={(e) => setMessage(e.target.value)} onSend={handleSendMessage} />
            <ChatResponse>{answare}</ChatResponse>
        </section>
    )
}