import React, { useState } from "react";
import * as C from "../AppStyles";
import { useForm } from "react-hook-form";
import axios from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import { getUserLocalStorage } from "./context/AuthProvider/utils";

type RegistrationFormData = {
    name: string;
    register: string;
    password: string;
    email: string;
    clinic_name: string;
}

export default function CreateDoctor() {
    const [resposta, setResposta] = useState(false);
    const [err, setErr] = useState("");
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormData>();
    const user = getUserLocalStorage();

    const onSubmit = handleSubmit((data) => {
        axios.post("/doctors", data)
            .then(response => {
                console.log(response)
                setResposta(true);
                navigate("/doctors");
            }
            ).catch(err => {
                setErr("Algo invalido!");
                setTimeout(() => { setErr(""); }, 3000);
            })
    })

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
                                <label htmlFor="register">Registro:</label>
                                <input {...register("register", { required: true, valueAsNumber: true })} id="register" name="register" type="number" />
                                {
                                    errors.register && <div className="error">Digite um nome email</div>
                                }
                            </div>
                            <div>
                                <label htmlFor="clinic_name">Nome da clinica:</label>
                                <input {...register("clinic_name", { required: true })} id="clinic_name" name="clinic_name" type="text" />
                                {
                                    errors.clinic_name && <div className="error">Digite um rg</div>
                                }
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input {...register("email", { required: true })} id="email" name="email" type="text" />
                                {
                                    errors.email && <div className="error">Digite uma senha</div>
                                }
                            </div>
                            <div>
                                <label htmlFor="password">Senha:</label>
                                <input {...register("password", { required: true })} id="password" name="password" type="password" />
                                {
                                    errors.password && <div className="error">Digite uma senha</div>
                                }
                            </div>
                            <button type="submit">Cadastar</button>
                        </form>
                    </C.ContainerX>
                </C.ContainerZ>
                {resposta &&
                    <C.Aviso>
                        <C.AvisoMessage>
                            <p>Usuario cadastrado com sucesso!</p>
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
            </C.Container>
        </>
    )
}