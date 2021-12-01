import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as C from "../AppStyles";
import api from "../services/api";
import "../Style.css";
import { getUserLocalStorage } from "./context/AuthProvider/utils";
import { Doctor } from "./types/Dotcors";

export default function ListDoctors() {
    const user = getUserLocalStorage();
    const [data, setData] = useState<Doctor[]>([]);

    const handleClick = (id: string) => {
        api.delete(`doctors/${id}`).then(response => {
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
        api.get(`doctors`).then(response => {
            // const dado = response.data;
            let dado = response.data.filter((x: { id: string | undefined; }) => {
                return x.id !== user?.id;
            })

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
                            <Link className="linkagemJ" to={`/doctor/create`} >Cadastrar</Link>
                        </C.Add>
                        {data.map((item, index) => (
                            <C.Agroup key={item.id}>
                                <C.ScomponentX>
                                    <p>Nome: {item.name}</p>
                                    <p>Nome: {item.email}</p>
                                    <p>Nome: {item.clinic_name}</p>
                                    <p>Nome: {item.register}</p>
                                    <C.Opition>
                                        <C.ButtonJ  onClick={() => handleClick(item.id)} style={{marginLeft: 10}}>Excluir</C.ButtonJ>
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

