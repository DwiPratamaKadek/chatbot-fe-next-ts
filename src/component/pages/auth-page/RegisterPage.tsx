'use client'
import { useAddUser } from "@/hooks/auth/useUser"

export default function RegisterPage(){

    const {name, password, setName, setPassword, handleAddUser} = useAddUser()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await handleAddUser()
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="border-2"/>
                <input type="password"  value={password} onChange={(e)=> setPassword(e.target.value)} className="border-2"/>
                <button type="submit" className="border-2"> Create User </button>
            </form>
        </div>
    )
} 