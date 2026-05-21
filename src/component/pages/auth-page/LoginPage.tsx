'use client'

import { useLogin } from "@/hooks/auth/useLogin"

export default function LoginPage(){

    const {name, password, setName, setPassword, handleLogin, error, message} = useLogin()
    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault()
        await handleLogin()
    }

    return(
        <div className="grid grid-cols-3 bg-gray-200 h-screen w-full">
            <div>
                {message && (
                    <p className="text-xl text-green-600">{message}</p>
                )}
                {error && (
                    <p className="text-xl text-red-600">{error}</p>
                )}
            </div>
            <div className="flex justify-center items-center ">
                <div className="flex flex-col bg-gray-100 rounded-xl w-md shadow-xl" >
                    <div className="py-5">
                        <h1 className="flex flex-col items-center text-xl font-sans">Welcome, <span>We are waiting for you </span></h1>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-5 py-10 ">
                        <div className="w-full">
                            <h1>Name</h1>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)}  className="border border-gray-400 rounded-xl w-sm " />
                        </div>
                        <div>
                            <h1>Password</h1>
                            <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)} className="border border-gray-400 rounded-xl"/>
                        </div>
                            <p>create account, <span>new account0</span></p>
                            <button type="submit" className="border border-blue-950 rounded-xl hover:bg-blue-950 hover:text-white transition-all duration-300 delay-75">login</button>
                    </form>
                </div>
            </div>
            <div></div>
        </div>
    )
}