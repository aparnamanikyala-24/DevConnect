import axios from "axios";

const API = axios.create({
    baseURL: "https://devconnect-htd3.onrender.com"
});

export default API;