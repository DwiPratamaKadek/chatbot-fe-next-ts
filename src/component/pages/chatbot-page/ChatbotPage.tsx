'use client'; 

import ChatResponse from "@/component/ui/chat/ChatResponse";
import TextInput from "@/component/ui/text-input/TextInput";
import SideBar from "@/component/layout/SideBar";
import { useParams } from "next/navigation";
import { useChat } from "@/hooks/oprasional/useChat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faUser } from "@fortawesome/free-solid-svg-icons"; 

export default function ChatbotPage() {
    const params = useParams()

    const sessionId = params.id as string
    const {message, chat, setMessage, handleSendMessage} = useChat(sessionId);

    return(
        <section className="flex bg-gray-900 ">
            <SideBar></SideBar>
            <div className="flex justify-center items-center ml-48 w-full p-6 ">
                <div className="flex flex-col text-white ">
                    <ChatResponse className="flex flex-col text-3xl">
                           {chat.map((c,i) => (
                                <div key={i} className="flex items-center gap-8">
                                    <div className="border border-gray-600 rounded-full p-2 bg-gray-800">
                                        {c.role == "user"? (
                                            <FontAwesomeIcon icon={faUser}/>
                                        ):(
                                            <FontAwesomeIcon icon={faRobot}/>
                                        )}
                                    </div>
                                    <p className="p-3">{c.message}</p>
                                </div>
                           ))}
                    </ChatResponse>
                    <TextInput value={message} onChange={(e) => setMessage(e.target.value)} onSend={handleSendMessage} />
                </div>  
            </div>
        </section>
    )
}