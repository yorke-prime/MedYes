import {
    ICreateAttendanceDTO,
    IEditAttendanceDTO,
} from "../dtos/ICreateAttendanceDTO";
import { Attendance } from "./entities/Attendance";

interface IAttendancesRepository {
    create(data: ICreateAttendanceDTO): Promise<void>;
    findAllAttendancesIdDoctor(id: string): Promise<Attendance[]>;
    findAllAttendancesIdPatient(id: string): Promise<Attendance[]>;
    findAllAttendancesClinicName(clinic_name: string): Promise<Attendance[]>;
    deleteAttendance(id: string): Promise<void>;
    editAttendance(data: IEditAttendanceDTO): Promise<Attendance>;
    findById(id: string): Promise<Attendance>;
}

export { IAttendancesRepository };
