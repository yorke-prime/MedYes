import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthProvider/useAuth";

export default function Logout() {
    const navigate = useNavigate();
    const auth = useAuth();
    function log () {
        auth.logout();
        navigate("/");
    }

    useEffect(() => {
        log();
    })
    return <h1>Logout!</h1>
}