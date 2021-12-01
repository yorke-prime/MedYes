import React from "react";
import { useAuth } from "./context/AuthProvider/useAuth"
import { getUserLocalStorage } from "./context/AuthProvider/utils";

export const TetDoctor = ({ children }: { children: JSX.Element }) => {
    const auth = useAuth();
    const user = getUserLocalStorage();
    if (!auth.email) {
        return <h1>Você não tem acesso a essa pagina</h1>
    }

    if (user?.profile !== "admin" && user?.profile !== "doctor") {
        return <h1>Você não tem acesso a essa pagina</h1>
    }

    return children;
};