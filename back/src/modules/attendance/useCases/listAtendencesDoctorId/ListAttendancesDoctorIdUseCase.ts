import { IAttendancesRepository } from "../../repositories/IAttendancesRepository";

class ListAttendencesDoctorIdUseCase {
    constructor(private attendancesRepository: IAttendancesRepository) {}

    async execute({ doctor_id }) {
        const attendances =
            await this.attendancesRepository.findAllAttendancesIdDoctor(
                doctor_id
            );
        return attendances;
    }
}

export { ListAttendencesDoctorIdUseCase };
