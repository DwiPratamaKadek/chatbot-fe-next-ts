'use client'
import { useAddUser } from "@/hooks/auth/useUser"

export default function RegisterPage(){

    const {name, password, setName, setPassword, handleAddUser} = useAddUser()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await handleAddUser()
    }
    return(
        <section className="relative object-cover w-full min-h-screen">
             <div className="absolute bottom-0 left-0 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,64L40,106.7C80,149,160,235,240,234.7C320,235,400,149,480,144C560,139,640,213,720,240C800,267,880,245,960,213.3C1040,181,1120,139,1200,112C1280,85,1360,75,1400,69.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </div>
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
                <div  className="relative flex flex-col justify-around items-center text-white w-full min-h-screen">
                    <div className="w-full max-w-sm rounded-3xl bg-white/10 backdrop-blur-md p-8 shadow-2xl mx-5">
                        <div>
                            <h1 className="flex flex-col text-3xl font-sans">Register <span className="text-sm font-thin mt-2">Teman Wisata Pintar</span></h1>
                        </div>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4  py-5 font-poppins">
                            <div>
                                <label>Name</label>
                                <input 
                                    type="text" 
                                    value={name} 
                                    onChange={(e)=> setName(e.target.value)} 
                                    className="w-full border border-gray-400 rounded-xl outline-none px-2 py-2" />
                            </div>
                            <div>
                                <label >Password</label>
                                <input 
                                    type="password"  
                                    value={password} 
                                    onChange={(e)=> setPassword(e.target.value)} 
                                    className="w-full border border-gray-400 rounded-xl outline-none px-2 py-2" />
                            </div>
                            <p className="font-thin">have acount <span className="text-cyan-600 hover:text-cyan-400 transition-all duration-300 delay-75"><a href="/login">Login</a></span></p>
                            <button type="submit" className="border border-blue-800 rounded-xl hover:bg-blue-800 hover:text-white transition-all duration-300 delay-75"> Create User </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
} 