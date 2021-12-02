import api from "../../../services/api";
import { IUser } from "./types";

export function setUserLocalStorage (user: IUser | null) {
    localStorage.setItem("u", JSON.stringify(user));
}

export function getUserLocalStorage () {
    const json = localStorage.getItem("u");

    if (!json) {
        return null;
    }

    const user: IUser = JSON.parse(json);

    return user ?? null;
}

export async function LoginRequest (email: string, password: string, path: string) {
    try {
        const request = await api.post(`${path}`, {email, password})
        console.log(request.data);
        
        return request.data;
    } catch (err) {
        return null;
    }
}