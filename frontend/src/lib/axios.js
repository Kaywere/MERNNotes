import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'https://apinotes.sossai.cc/api'
});

export default api;
