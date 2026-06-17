
import { useRoom } from "@/hooks/oprasional/useRoom"
import SideBar from "@/component/layout/SideBar"

export default function NewChat() {

    const { handleAddButton, title, setTitle } = useRoom()

    const handleSumbit = (e: React.FormEvent) => {
        e.preventDefault()
        handleAddButton()
    }

    return(
        <section className="flex h-screen bg-gray-900" >
            <SideBar/>
            <div className="flex justify-center w-full p-6">
                <form onSubmit={handleSumbit}>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border-2 border-white text-amber-50"/>
                    <button type="submit" className="border-2 border-amber-50 text-amber-50">Create</button>
                </form>
            </div>
        </section>
    )
}