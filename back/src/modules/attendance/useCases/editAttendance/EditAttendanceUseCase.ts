import { IAttendancesRepository } from "../../repositories/IAttendancesRepository";

class EditAttendanceUseCase {
    constructor(private attendancesRepository: IAttendancesRepository) {}

    async execute({ id, entry_date, clinic_name, notes, departure_date }) {
        const attendanceNew = await this.attendancesRepository.editAttendance({
            id,
            clinic_name,
            entry_date,
            notes,
            departure_date,
        });

        return attendanceNew;
    }
}

export { EditAttendanceUseCase };
