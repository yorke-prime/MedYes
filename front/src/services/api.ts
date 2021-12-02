import axios from "axios";
import { getUserLocalStorage } from "../components/context/AuthProvider/utils";

const api = axios.create({
    baseURL: "http://localhost:3333"
});

api.interceptors.request.use(
    (config) => {

        const user = getUserLocalStorage();
        config.headers = {
            authorization: `Bearer ${user?.token as string}`,
        };
        
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default api;