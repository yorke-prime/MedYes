import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as C from "../AppStyles";
import api from "../services/api";
import "../Style.css";
import { getUserLocalStorage } from "./context/AuthProvider/utils";
import { Attendance } from "./types/AttendanceList";
import "../Style.css";

export default function AttendanceList() {
    const user = getUserLocalStorage();
    //const token = user?.token as string;
    const [data, setData] = useState<Attendance[]>([]);

    const handleClick = (id: string) => {
        api.delete(`attendances/${id}`).then(response => {
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
        let base = "";
        let id = "";
        if (user?.profile === "admin" || "doctor") {
            base = "doctors";
            id = user?.id as string;
        }
        if (user?.profile === "patient") {
            base = "patients";
            id = user?.id as string;
        }
        if (user?.profile === "secretary") {
            base = "doctors";
            id = user?.admin_id as string;
        }
        api.get(`attendances/${base}/${id}`).then(response => {
            const dado = response.data;
            console.log(dado);

            setData(dado);

        }).catch(error => {
            console.log(JSON.stringify(error))
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                    <Link to="/register" className="Header" style={{ marginLeft: 30, }}>Cadastrar</Link>
                    <Link to="/sign" className="Header" style={{ marginLeft: 30, }}>Entrar</Link>
                    <Link to="/sign/employee" className="Header" style={{ marginLeft: 30, }}>Funcionarios</Link>
                </C.Header>
            }
            <C.ContainerZ>
                <C.ContainerX>
                    <C.Group>
                        {data.map((item, index) => (
                            <C.Agroup key={item.id}>
                                <C.ScomponentX>
                                    <p>Nome da clinica: {item.clinic_name}</p>
                                    <p>Date de Entrada: {item.entry_date}</p>
                                    <p>Data de Saida: {item.departure_date}</p>
                                    <p>Notas: {item.notes}</p>
                                    <p>Id: {item.id}</p>
                                    <C.Opition>
                                        {user?.profile === "admin" || "doctor" && <>
                                            <Link className="linkagemJ" to={`/attendance/edit/${item.id}`} >Editar</Link>
                                            <C.ButtonJ onClick={() => handleClick(item.id)} style={{ marginLeft: 10 }}>Excluir</C.ButtonJ>
                                        </>
                                        }
                                        {user?.profile === "secretary" &&  <>
                                            <Link className="linkagemJ" to={`/attendance/edit/${item.id}`} >Editar</Link>
                                        </>
                                        }

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

