import { API } from "@/lib/api"
import { userTypes } from "@/types/userTypes"

export const createUser = async (req:userTypes) => {
    const result = await API.post("/user", req)
    return result.data 
}

export const login = async (req:userTypes) => {
    const result = await API.post("/login", req, {
        withCredentials: true
    })
    return result.data 
}

export const getMe = async () => {
    const token = await API.get("/me",{
        withCredentials: true
    })

    return token.data
}
