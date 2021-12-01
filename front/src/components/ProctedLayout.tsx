import React from "react";
import { useAuth } from "./context/AuthProvider/useAuth"

export const ProctedLayout = ({ children }: {children: JSX.Element}) => {
    const auth = useAuth();

    if (!auth.email) {
        return <h1>Você não tem acesso a essa pagina</h1>
    }

    return children;
};