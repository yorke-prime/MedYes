import React, { useEffect, useState } from "react";
import * as C from "../AppStyles";
import { useForm, } from "react-hook-form";
import api from "../services/api";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getUserLocalStorage } from "./context/AuthProvider/utils";
// import { Attendance } from "./types/AttendanceList";
import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from "react-datepicker";

type RegistrationFormData = {
    clinic_name: string;
    entry_date: string;
    departure_date: string;
    notes: string;
}

export default function EditAttendance() {
    const [resposta, setResposta] = useState(false);
    const [clinic_name1, setClinic_name] = useState("");
    const [entry_date1, setEntry_date] = useState("");
    const [departure_date1, setDeparture_date] = useState("");
    const [notes1, setNotes] = useState("");
    // const [attendance, setAttendance] = useState<Attendance>();
    const [err, setErr] = useState("");
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormData>();

    const user = getUserLocalStorage();

    const { id } = useParams();
    const base = () => {
        api.get(`/attendances/a/${id}`).then((response) => {
            const base = response.data;
            setClinic_name(base.clinic_name);
            setEntry_date(base.entry_date);
            setDeparture_date(base.departure_date);
            setNotes(base.notes);
        })
    }
    useEffect(() => {
        base();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const onSubmit = handleSubmit((data) => {
        data.clinic_name = clinic_name1;
        data.departure_date = departure_date1;
        data.entry_date = entry_date1;
        data.notes = notes1;
        console.log(data.notes);
        
        api.put(`/attendances/${id}`, data)
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
            {user?.profile === "admin" &&
                <C.Header>
                    <Link to="/" className="Header">Home</Link>
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
                                <label htmlFor="clinic_name">Nome da clinica:</label>
                                <input {...register("clinic_name", {
                                    required: true,
                                    onChange: e => setClinic_name(e.target.value),
                                    setValueAs: v => parseInt(v)
                                })} id="clinic_name" name="clinic_name" type="text" value={clinic_name1} />
                                {
                                    errors.clinic_name && <div className="error">Digite o nome da clinica</div>
                                }
                            </div>
                            <div>
                                <label htmlFor="entry_date">Data de entrada:</label>
                                <input {...register("entry_date", {
                                    required: true, 
                                    onChange: e => setEntry_date(e.target.value),
                                    setValueAs: v => parseInt(v)
                                })} value={entry_date1} id="entry_date" name="entry_date" type="text" />
                                {
                                    errors.entry_date && <div className="error">Digite um rg</div>
                                }
                            </div>
                            <div>
                                <label htmlFor="departure_date">Data de saída:</label>
                                <input {...register("departure_date", {
                                    required: true,
                                    onChange: e => setDeparture_date(e.target.value),
                                    setValueAs: v => parseInt(v)
                                    })} value={departure_date1} id="departure_date" name="departure_date" type="text" />
                                {
                                    errors.departure_date && <div className="error">Digite uma data</div>
                                }
                            </div>
                            <div>
                                <label htmlFor="notes">Notas:</label>
                                <input {...register("notes", {
                                    required: true,
                                    onChange: e => setNotes(e.target.value),
                                    setValueAs: v => parseInt(v)
                                })} id="notes" name="notes" value={notes1} type="text" />
                                {
                                    errors.notes && <div className="error">Digite uma data</div>
                                }
                            </div>
                            <button type="submit">Alterar</button>
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