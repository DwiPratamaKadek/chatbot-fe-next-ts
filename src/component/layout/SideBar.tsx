import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HistoryPage from "../pages/history-page/HistoryPage";

import { useSideBar } from "@/hooks/lyouts/useSideBar"

import { MenuItem } from "@/constants/sideBarMenu";
import Link from "next/link";

export default function SideBar() {

    const {isOpen, handleOpen} = useSideBar();

    return(
        <div className={`grid grid-rows-[auto_1fr_1fr_1fr_1fr]  rounded-r-2xl text-white bg-gray-800 h-full fixed transform transition-all duration-300 delay-75 ${isOpen? "w-64" : "w-34"}`}>
            {/* header logo+button */}
            <button className="flex justify-center ">
                <p>HYC</p>
                <FontAwesomeIcon icon={isOpen? faXmark : faBars} onClick={handleOpen}/>
            </button>
            {/* Side Bar Menu */}
            <aside className="mx-5 my-5">
                <ul className="list-none">
                    {MenuItem.map((menu, index) => (
                        <li key={index} >
                            <Link href={menu.href} className={`flex gap-2 `}>
                                <FontAwesomeIcon icon={menu.icon}/>
                                <p className={`transition-all duration-300 ${isOpen ? "opacity-100 " : "opacity-0 "}`}>{menu.name}</p>
                            </Link>
                        </li> 
                    ))}
                </ul>
            </aside>
            <div className="px-5 py-2">
                <div className="border border-gray-700 w-full my-5"/>
                <p className="font-light text-gray-400">Your History</p>
                <HistoryPage/>  
            </div>
            <div className="row-start-6">
                <p> copy right </p>
            </div>
        </div>
    )
}