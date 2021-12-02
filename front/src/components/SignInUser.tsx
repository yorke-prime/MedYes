import React, { useState } from "react";
import * as C from "../AppStyles";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./context/AuthProvider/useAuth";
import { getUserLocalStorage } from "./context/AuthProvider/utils";

type RegistrationFormData = {
    email: string;
    password: string;
}

export default function RegisterPatient() {
    const [resposta, setResposta] = useState(false);
    const [err, setErr] = useState("");
    const navigate = useNavigate();
    const auth = useAuth();
    const user = getUserLocalStorage();

    const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormData>();

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        try {
            const response = await auth.authenticate(data.email, data.password, "/patients/session");
            console.log(response)
            setResposta(true);
            navigate("/");
        } catch (error) {
            setErr("Email ou senha invalidos!");
            setTimeout(() => { setErr(""); }, 3000);
        }
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
                                <label htmlFor="email">Email:</label>
                                <input {...register("email", { required: true })} id="email" name="email" type="email" />
                                {
                                    errors.email && <div className="error">Digite o seu email</div>
                                }
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <input {...register("password", { required: true })} id="password" name="password" type="password" />
                                {
                                    errors.password && <div className="error">Digite a sua senha</div>
                                }
                            </div>
                            <button type="submit">Entrar</button>
                        </form>
                        {resposta &&
                            <div>
                                <p>Usuario logado com Sucesso</p>
                            </div>
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