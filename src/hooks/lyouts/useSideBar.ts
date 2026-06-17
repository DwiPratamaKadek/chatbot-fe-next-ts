'use client'
import { useState } from "react" 

export const useSideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(prev => !prev) 
    }
    return {
        isOpen, 
        setIsOpen, 
        handleOpen
    }
}