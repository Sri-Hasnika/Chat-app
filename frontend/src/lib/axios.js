import axios from "axios";

// instead of using regular axios for reqs, we create axiosInstance
export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE==="development" ? "http://localhost:5000/api" : "/api",
    withCredentials: true,
})