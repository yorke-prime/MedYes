import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as C from "../AppStyles";
import api from "../services/api";
import "../Style.css";
import { getUserLocalStorage } from "./context/AuthProvider/utils";
import { Secretary } from "./types/Secretary";

export default function SecretaryList() {
    const user = getUserLocalStorage();
    const [data, setData] = useState<Secretary[]>([]);

    const handleClick = (id: string) => {
        api.delete(`secretaries/${id}`).then(response => {
            remove(id);
        }).catch(error => {
            console.log(JSON.stringify(error))
        })
    }

    const remove = (key: string) => {
        setData((prevState) =>
            prevState.filter((product) => product.id !== key)
        );
    };

    useEffect(() => {
        api.get(`secretaries/${user?.id}`).then(response => {
            const dado = response.data;
            setData(dado);
        }).catch(error => {
            console.log(JSON.stringify(error))
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
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
                        <C.Add>
                            <Link className="linkagemJ" to={`/secretary/create`} >Cadastrar</Link>
                        </C.Add>
                        {data.map((item, index) => (
                            <C.Agroup key={index}>
                                <C.ScomponentX>
                                    <p>Nome: {item.name}</p>
                                    <p>Nome: {item.email}</p>
                                    <p>Nome: {item.clinic_name}</p>
                                    <p>Nome: {item.admission}</p>
                                    <C.Opition>
                                        <C.ButtonJ onClick={() => handleClick(item.id)} style={{ marginLeft: 10 }}>Excluir</C.ButtonJ>
                                    </C.Opition>
                                </C.ScomponentX>
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

