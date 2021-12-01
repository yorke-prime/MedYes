import { getRepository, Repository } from "typeorm";

import {
    ICreateAttendanceDTO,
    IEditAttendanceDTO,
} from "../dtos/ICreateAttendanceDTO";
import { Attendance } from "./entities/Attendance";
import { IAttendancesRepository } from "./IAttendancesRepository";

class AttendancesRepository implements IAttendancesRepository {
    private repository: Repository<Attendance>;

    constructor() {
        this.repository = getRepository(Attendance);
    }
    async create({
        departure_date,
        doctor_id,
        patient_id,
        entry_date,
        notes,
        clinic_name,
    }: ICreateAttendanceDTO): Promise<void> {
        const attendance = this.repository.create({
            departure_date,
            doctor_id,
            patient_id,
            entry_date,
            notes,
            clinic_name,
        });

        await this.repository.save(attendance);
    }
    async findAllAttendancesIdDoctor(id: string): Promise<Attendance[]> {
        const attendances = await this.repository.find({ doctor_id: id });

        return attendances;
    }
    async findAllAttendancesIdPatient(id: string): Promise<Attendance[]> {
        const attendances = await this.repository.find({ patient_id: id });

        return attendances;
    }
    async findAllAttendancesClinicName(
        clinic_name: string
    ): Promise<Attendance[]> {
        const attendances = await this.repository.find({ clinic_name });

        return attendances;
    }
    async deleteAttendance(id: string): Promise<void> {
        const attendance = await this.repository.findOne(id);
        await this.repository.remove(attendance);
    }
    async editAttendance({
        id,
        departure_date,
        entry_date,
        notes,
        clinic_name,
    }: IEditAttendanceDTO): Promise<Attendance> {
        const attendanceNew = await this.repository.findOne(id);
        attendanceNew.clinic_name = clinic_name || attendanceNew.clinic_name;
        attendanceNew.entry_date = entry_date || attendanceNew.entry_date;
        attendanceNew.notes = notes || attendanceNew.notes;
        attendanceNew.departure_date =
            departure_date || attendanceNew.departure_date;

        await this.repository.save(attendanceNew);

        return attendanceNew;
    }
    async findById(id: string): Promise<Attendance> {
        const attendance = await this.repository.findOne(id);
        return attendance;
    }
}

export { AttendancesRepository };
