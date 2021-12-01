import React from "react";
import { Link } from "react-router-dom";
import * as C from "../AppStyles";
import "../Style.css";
import { getUserLocalStorage } from "./context/AuthProvider/utils";

export default function HomePage() {
    const user = getUserLocalStorage();
    console.log(user);

    return (
        <>
            {user?.profile === "patient" &&
                <C.Header>
                    <Link to="/" className="Header">Home</Link>
                    <Link to="/attendance" className="Header" style={{ marginLeft: 30, }} >Atendimentos</Link>
                    <Link to="/logout" className="Header" style={{ marginLeft: 30, }} >Sair</Link>
                </C.Header>
            }
            {user?.profile === "secretary" &&
                <C.Header>
                    <Link to="/" className="Header">Home</Link>
                    <Link to="/attendance" className="Header" style={{ marginLeft: 30, }} >Atendimentos</Link>
                    <Link to="/logout" className="Header" style={{ marginLeft: 30, }} >Sair</Link>
                </C.Header>
            }
            {user?.profile === "doctor" &&
                <C.Header>
                    <Link to="/" className="Header">Home</Link>
                    <Link to="/patient" className="Header" style={{ marginLeft: 30, }} >Pacientes</Link>
                    <Link to="/attendance" className="Header" style={{ marginLeft: 30, }} >Atendimentos</Link>
                    <Link to="/logout" className="Header" style={{ marginLeft: 30, }} >Sair</Link>
                </C.Header>
            }
            {user?.profile === "admin" &&
                <C.Header>
                    <Link to="/" className="Header">Home</Link>
                    <Link to="/doctors" className="Header" style={{ marginLeft: 30, }} >Médicos</Link>
                    <Link to="/secretary" className="Header" style={{ marginLeft: 30, }} >Secretarias</Link>
                    <Link to="/patient" className="Header" style={{ marginLeft: 30, }} >Pacientes</Link>
                    <Link to="/attendance" className="Header" style={{ marginLeft: 30, }} >Atendimentos</Link>
                    <Link to="/logout" className="Header" style={{ marginLeft: 30, }} >Sair</Link>
                </C.Header>
            }
            {!user?.email &&
                <C.Header>
                    <Link to="/" className="Header">Home</Link>
                    <Link to="/sign/employee" className="Header" style={{ marginLeft: 30, }}>Funcionarios</Link>
                    <Link to="/register" className="Header" style={{ marginLeft: 30, }}>Cadastrar</Link>
                    <Link to="/sign" className="Header" style={{ marginLeft: 30, }}>Entrar</Link>
                </C.Header>
            }
            <C.Container>
                <C.Banner>
                    <h1>Conheça o sistema de gerenciamento</h1>
                    <h3 style={{ color: "#6C6C6C", marginTop: 0 }}>Acabe com a dor de cabeça na hora de
                        fazer a gestão</h3>
                    <div style={{ marginTop: 20 }}>
                        <Link className="linkagem" to="/register">Casdastar</Link>
                        <Link className="linkagem" style={{ marginLeft: 30 }} to="/sign">Login</Link>
                    </div>
                </C.Banner>
            </C.Container>
        </>
    )
}