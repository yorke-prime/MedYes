import React, { useState } from "react";
import * as C from "../AppStyles";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./context/AuthProvider/useAuth";
import { getUserLocalStorage } from "./context/AuthProvider/utils";

type RegistrationFormData = {
    email: string;
    password: string;
    employee: string;
    route: string;
}

export default function RegisterPatient() {
    const user = getUserLocalStorage();
    const [resposta, setResposta] = useState(false);
    const [path, setPath] = useState("medico");
    //const [definit, setDefinit] = useState("");
    const [err, setErr] = useState("");

    const navigate = useNavigate();
    const auth = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormData>();

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        console.log(value)
        setPath(value);
        console.log(path)
    };

    const onSubmit = handleSubmit(async (data) => {
        try {
            data.employee = path;
            console.log(data.employee);

            if (data.employee === "") {
                throw new Error("Erro de selecão");
            }

            if (data.employee === "admin" || data.employee === "medico") {
                data.route = "/doctors/session";
            }

            if (data.employee === "secretaria") {
                data.route = "/secretaries/session";
            }

            await auth.authenticate(data.email, data.password, data.route);

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
                            <div>
                                <label htmlFor="employee">Função:</label>
                                <select onChange={e => selectChange(e)} id="employee" name="employee">
                                    <option value="admin">Administrador</option>
                                    <option selected value="medico">Médico</option>
                                    <option value="secretaria">Secretaria</option>
                                </select>
                            </div>
                            <button type="submit">Entrar</button>
                        </form>
                        {resposta &&
                            <C.Aviso>
                                <C.AvisoMessage>
                                    <p>Usuario Logado com sucesso!</p>
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