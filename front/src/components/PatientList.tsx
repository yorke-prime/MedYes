import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as C from "../AppStyles";
import api from "../services/api";
import "../Style.css";
import { getUserLocalStorage } from "./context/AuthProvider/utils";
import { Patient } from "./types/Patient";

export default function PatientList() {
    const user = getUserLocalStorage();
    //const token = user?.token as string;
    const [data, setData] = useState<Patient[]>([]);

    useEffect(() => {
        api.get(`patients`).then(response => {
            const dado = response.data;
            setData(dado);
        }).catch(error => {
            console.log(JSON.stringify(error))
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
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
                    <Link to="/register" className="Header" style={{ marginLeft: 30, }}>Cadastrar</Link>
                    <Link to="/sign" className="Header" style={{ marginLeft: 30, }}>Entrar</Link>
                    <Link to="/sign/employee" className="Header" style={{ marginLeft: 30, }}>Funcionarios</Link>
                </C.Header>
            }
            <C.ContainerZ>
                <C.ContainerX>
                    <C.Group>
                        {data.map((item, index) => (
                            <C.Agroup key={index}>
                                <C.Scomponent>
                                    <p>Nome: {item.name}</p>
                                    <p>Email: {item.email}</p>
                                    <p>Rg: {item.rg}</p>
                                    <C.Opition>
                                        <Link className="linkagemJ" to={`/attendance/create/${item.id}`} >Atender</Link>
                                    </C.Opition>
                                </C.Scomponent>
                            </C.Agroup>
                        )
                        )
                        }
                    </C.Group>
                </C.ContainerX>
            </C.ContainerZ>
        </>
    )
}

