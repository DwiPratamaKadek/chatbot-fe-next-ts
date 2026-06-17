import { API } from "@/lib/api";

export const sendMessage = async (message: string, sessionId: string) => {
    const response = await API.post(`/chat/${sessionId}`, {message: message});
    return response.data; 
}

export const history = async () => {
    const response = await API.get(`/room`)
    return response.data
}

export const chatHistory = async (sessionId: string) => {
    const response = await API.get(`/room/${sessionId}`)
    return response.data
}

export const getChatHistory = async (sessionId: string) => {
    const response = await API.get(`/chat/${sessionId}`)
    return response.data
}

