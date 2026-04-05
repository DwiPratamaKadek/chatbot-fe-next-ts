import axios from "axios";
import { ENV } from "./env";

// axios instance 
export const chatApi = axios.create({
    baseURL : ENV.base_url, 
    headers: {
        "Content-Type" : "application/json"
    }
})

 