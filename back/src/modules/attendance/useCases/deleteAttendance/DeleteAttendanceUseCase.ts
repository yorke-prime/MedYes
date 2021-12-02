import { AppError } from "../../../../shared/errors/AppError";
import { IAttendancesRepository } from "../../repositories/IAttendancesRepository";

class DeleteAttendanceUseCase {
    constructor(private attendancesRepository: IAttendancesRepository) {}

    async execute({ id }) {
        const attendancesExist = await this.attendancesRepository.findById(id);
        if (!attendancesExist) {
            throw new AppError("Atendimento não existe!");
        }
        const attendances = await this.attendancesRepository.deleteAttendance(
            id
        );
        return attendances;
    }
}

export { DeleteAttendanceUseCase };
