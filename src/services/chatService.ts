import { chatApi } from "@/lib/api";

export const sendMessage = async (message: string) => {
    const response = await chatApi.post("/chat", {query : message });
    return response.data; 
}