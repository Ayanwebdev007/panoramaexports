import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_URL, // No template string here
});

export default API;
