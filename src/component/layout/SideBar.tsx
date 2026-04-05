import { faBars, faXmark, faClone, faArrowRotateBack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSideBar } from "@/hooks/useSideBar"

import Link from "next/link";
import Image from "next/image";

export default function SideBar() {

    const {isOpen, setIsOpen, handleOpen} = useSideBar();

    return(
        <aside className={`h-screen bg-gray-800 text-white  rounded-r-4xl ${isOpen? "w-64" : "w-20"}`}>
            <div className="flex items-center  justify-around my-15">
                <h3 className={`text-sm md:text-2xl ${isOpen? "opacity-100" : "opacity-0"}`}>HYC</h3>
                <button onClick={handleOpen} className="rounded-xl ">
                    <FontAwesomeIcon icon={isOpen? faXmark : faBars } className="text-sm md:text-xl text-gray-500"/>
                </button>
            </div>
            <nav className="">
                <ul className="space-y-1">
                    <li>
                        <Link href={"/chat"}>
                            <div className="flex justify-around items-center">
                                <FontAwesomeIcon icon={faClone} />
                                <p>New Chat</p>
                            </div>
                        </Link>
                    </li>
                    <br />
                    <li>
                        <Link href={"/history"}>
                            <div className="flex justify-around items-center">
                                <FontAwesomeIcon icon={faArrowRotateBack} />
                                <p>History</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}