'use client'; 

import ChatResponse from "@/component/ui/chat/ChatResponse";
import TextInput from "@/component/ui/text-input/TextInput";
import SideBar from "@/component/layout/SideBar";
import { useParams } from "next/navigation";
import { useChat } from "@/hooks/oprasional/useChat";

export default function ChatbotPage() {
    const params = useParams()

    const sessionId = params.id as string
    const {message, chat, setMessage, handleSendMessage} = useChat(sessionId);

    return(
        <section className="flex h-screen bg-gray-900 ">
            <SideBar></SideBar>
            <div className="flex justify-center w-full p-6">
                <div className="flex flex-col text-white ">
                    <ChatResponse className="flex flex-col text-3xl">
                           {chat.map((c,i) => (
                                <div key={i} className={`${c.role === "user"? "text-left":"text-right"}`}>
                                    <p>{c.message}</p>
                                </div>
                           ))}
                    </ChatResponse>
                    <TextInput value={message} onChange={(e) => setMessage(e.target.value)} onSend={handleSendMessage} />
                </div>  
            </div>
        </section>
    )
}