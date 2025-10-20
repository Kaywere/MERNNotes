import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://172.16.15.2:5011/api",
});

export default api;