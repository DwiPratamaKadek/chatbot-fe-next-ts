import { API } from "@/lib/api";
import { roomTypes } from "@/types/roomTypes";

export const createRoom = async (req:roomTypes) => {
    const respond = await API.post("/room", req)
    return respond.data
}

export const getRoom = async () => {
    const respond = await API.get("/room")
    return respond.data
}

