'use client'
import Link from "next/link"

export default function Navbar(){
    return(
        <>
        <nav className="flex justify-around items-center rounded-xl bg-blue-950 w-full h-14 mt-2">
           
                <div>
                    <h1>Logo</h1>
                </div>
                <div className="flex gap-10 ">
                    <ul className="flex gap-4">
                        <li>helo</li>
                        <li>helo</li>
                        <li>helo</li>
                    </ul>
                    <div className="bg-amber-500 rounded-md ">
                        <Link href={"/login"} className="p-3">Login</Link>
                    </div>
                </div>
        </nav>
        </>
    )
}