import React, { useState } from "react";
import * as C from "../AppStyles";
import { useForm } from "react-hook-form";
import axios from "../services/api";
import { useNavigate, Link, useParams } from "react-router-dom";
import { getUserLocalStorage } from "./context/AuthProvider/utils";

type RegistrationFormData = {
    clinic_name?: string;
    entry_date: string;
    departure_date: string;
    notes: string;
    patient_id?: string;
    doctor_id?: string;
}

export default function CreateAttendance() {
    const [resposta, setResposta] = useState(false);
    const [err, setErr] = useState("");
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormData>();
    const user = getUserLocalStorage();

    const { id } = useParams();
    const onSubmit = handleSubmit((data) => {
        data.patient_id = id;
        data.doctor_id = user?.id;
        data.clinic_name = user?.clinic_name as string;
        console.log(data.clinic_name);
        
        axios.post("/attendances", data)
            .then(response => {
                console.log(response)
                setResposta(true);
                navigate("/attendance");
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
                                <label htmlFor="entry_date">Data de entrada:</label>
                                <input {...register("entry_date", { required: true, valueAsDate: true })} id="entry_date" name="entry_date" type="date" />
                                {
                                    errors.entry_date && <div className="error">Digite um nome email</div>
                                }
                            </div>
                            <div>
                                <label htmlFor="departure_date">Data de saída:</label>
                                <input {...register("departure_date", { required: true, valueAsDate: true })} id="departure_date" name="departure_date" type="date" />
                                {
                                    errors.departure_date && <div className="error">Digite um rg</div>
                                }
                            </div>
                            <div>
                                <label htmlFor="notes">Notas:</label>
                                <input {...register("notes", { required: true })} id="notes" name="notes" type="text" />
                                {
                                    errors.notes && <div className="error">Digite uma senha</div>
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