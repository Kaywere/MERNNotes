import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URI || "http://localhost:5011/api",
});

export default api;