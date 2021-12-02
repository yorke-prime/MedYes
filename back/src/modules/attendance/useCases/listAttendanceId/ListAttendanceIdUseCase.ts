import { IAttendancesRepository } from "../../repositories/IAttendancesRepository";

class ListAttendanceIdUseCase {
    constructor(private attendancesRepository: IAttendancesRepository) {}

    async execute({ id }) {
        const attendance = await this.attendancesRepository.findById(id);

        return attendance;
    }
}

export { ListAttendanceIdUseCase };
