import { getRepository, Repository } from "typeorm";

import { ICreateAttendanceDTO } from "../dtos/ICreateAttendanceDTO";
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
    }: ICreateAttendanceDTO): Promise<void> {
        const attendance = this.repository.create({
            departure_date,
            doctor_id,
            patient_id,
            entry_date,
            notes,
        });

        await this.repository.save(attendance);
    }
}

export { AttendancesRepository };
