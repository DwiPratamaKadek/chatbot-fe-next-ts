import { SideBarMenu } from "@/types/sideBarMenu";
import { faClone, faArrowRotateBack } from "@fortawesome/free-solid-svg-icons";

export const MenuItem: SideBarMenu[] = [
    {
        name: "New Chat",
        href: "/room", 
        icon: faClone
    }, 
    {
        name: "History",
        href: "/history", 
        icon: faArrowRotateBack
    },

]