import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://192.168.1.51:5011/api'
});

export default api;