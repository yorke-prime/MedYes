import { ICreatePatientDTO } from "../dtos/ICreatePatientDTO";
import { Patient } from "./entities/Patients";

interface IPatientsRepository {
    create(data: ICreatePatientDTO): Promise<void>;
    findByEmail(email: string): Promise<Patient>;
}

export { IPatientsRepository };