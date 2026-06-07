'use client'

import Link from "next/link"
import Image from "next/image"

export default function HomePage(){
    return(
        <section className="relative h-screen overflow-hidden">
            {/* background */}
            <Image src="/image/bggaris.png" alt="garis" fill className="object-cover opacity-25 h-screen" priority ></Image>
            <div className=" relative z-0 flex justify-around items-center text-white w-full min-h-screen">
                <div className="grid grid-rows-2 mx-16 max-w-2xl gap-4">
                    <div className="flex flex-col gap-2 ">
                        <h2 className="font-poppins text-6xl">Teman Wisata Pintar untuk Menjelajahi Bali</h2>
                        <p className="w-sm">Dapatkan rekomendasi destinasi, itinerary, tempat makan, dan informasi wisata Bali hanya dengan satu percakapan</p>
                    </div>
                    <Link href="/room" className="row-start-2 w-fit"> 
                        <div className="border border-gray-500 rounded-xl">
                            <h1 className="p-2">
                                Chat with agent
                            </h1>
                        </div>
                    </Link>
                </div>
                <div className="relative">
                    <Image src="/image/pura.png" alt="pura" width={500} height={500} className=""></Image>
                    <Image src="/image/sembahyang.png" alt="sembahyang" width={450} height={450} className="z-20 absolute bottom-0 -left-52"></Image>
                </div>
            </div>
        </section>
    )
}