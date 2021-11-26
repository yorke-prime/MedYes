import { ICreateDoctorDTO } from "../dtos/ICreateDoctorDTO";
import { Doctor } from "./entities/Doctor";

interface IDoctorRepository {
    create(data: ICreateDoctorDTO): Promise<void>;
    findByEmail(email: string): Promise<Doctor>;
}

export { IDoctorRepository };
