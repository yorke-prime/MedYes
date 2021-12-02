import React, { createContext, useEffect, useState } from "react";
import { IContext, IAuthProvider, IUser } from "./types";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./utils";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null >();

    useEffect(() => {
        const user = getUserLocalStorage();

        if (user) {
            setUser(user);
        }
    }, [])

    async function authenticate (email: string, password: string, path: string) {
        const response = await LoginRequest(email, password, path);
        
        const payload = {
            token: response.token,
            email, profile: response.user.profile,
            id: response.user.id,
            admin_id: response.user.admin_id,
            clinic_name: response.user.clinic_name,
        }

        setUser(payload);
        setUserLocalStorage(payload);
    }

    function logout () {
        setUser(null);
        setUserLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{...user, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    )
}