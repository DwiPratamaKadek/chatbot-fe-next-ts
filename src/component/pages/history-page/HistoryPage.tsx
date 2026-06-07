'use client'
import { useHistory } from "@/hooks/oprasional/useHistory"
import { useRouter } from "next/navigation"


export default function HistoryPage(){
    
    const router = useRouter()
    const {room} = useHistory()

    return(
        <section className="grid gap-2 ">
            {room.map((h) => (
                <button key={h.id} onClick={() => router.push(`/chat/${h.id}`)} className="border border-gray-600 rounded-md bg-gray-500">
                    {h.title}
                </button>
            ))}
        </section>
    )
}   