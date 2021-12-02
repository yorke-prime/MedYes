import React, { useState } from "react";
import * as C from "../AppStyles";
import { useForm } from "react-hook-form";
import axios from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import { getUserLocalStorage } from "./context/AuthProvider/utils";

type RegistrationFormData = {
    name: string;
    email: string;
    rg: string;
    password: string;
}

export default function RegisterPatient() {
    const [resposta, setResposta] = useState(false);
    const [err, setErr] = useState("");
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormData>();
    const user = getUserLocalStorage();

    const onSubmit = handleSubmit((data) => {
        axios.post("/patients", data)
            .then(response => {
                console.log(response)
                setResposta(true);
                navigate("/sign");
            }
            ).catch(err => {
                setErr("Algo invalido!");
                setTimeout(() => { setErr(""); }, 3000);
            })
    })

    return (
        <>
            {!user?.email &&
                <C.Header>
                    <Link to="/" className="Header">Home</Link>
                    <Link to="/sign/employee" className="Header" style={{ marginLeft: 30, }}>Funcionarios</Link>
                    <Link to="/register" className="Header" style={{ marginLeft: 30, }}>Cadastrar</Link>
                    <Link to="/sign" className="Header" style={{ marginLeft: 30, }}>Entrar</Link>
                </C.Header>
            }
            <C.Container>
                <C.ContainerZ>
                    <C.ContainerX>
                        <form onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="name">Nome:</label>
                                <input {...register("name", { required: true })} id="name" name="name" type="text" />
                                {
                                    errors.name && <div className="error">Digite um nome</div>
                                }
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input {...register("email", { required: true })} id="email" name="email" type="email" />
                                {
                                    errors.email && <div className="error">Digite um nome email</div>
                                }
                            </div>
                            <div>
                                <label htmlFor="rg">Rg:</label>
                                <input {...register("rg", { required: true })} id="rg" name="rg" type="text" />
                                {
                                    errors.rg && <div className="error">Digite um rg</div>
                                }
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <input {...register("password", { required: true })} id="password" name="password" type="password" />
                                {
                                    errors.password && <div className="error">Digite uma senha</div>
                                }
                            </div>
                            <button type="submit">Cadastar</button>
                        </form>
                        {resposta &&
                            <C.Aviso>
                                <C.AvisoMessage>
                                    <p>Cadastrado com sucesso!</p>
                                </C.AvisoMessage>
                            </C.Aviso>
                        }
                        {err &&
                            <C.Aviso>
                                <C.AvisoMessage>
                                    <p>{err}</p>
                                </C.AvisoMessage>
                            </C.Aviso>
                        }
                    </C.ContainerX>
                </C.ContainerZ>
            </C.Container>
        </>
    )
}