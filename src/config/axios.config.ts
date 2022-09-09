import axios from "axios";
import { API_URL } from "./api.config";

const http = axios.create({
    auth: {
        username: "Patrick",
        password: "Benco",
    },
    baseURL: API_URL
});

export default http;
