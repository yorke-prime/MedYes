import { IAttendancesRepository } from "../../repositories/IAttendancesRepository";

class ListAttendancesPatientIdUseCase {
    constructor(private attendancesRepository: IAttendancesRepository) {}

    async execute({ patient_id }) {
        const attendances =
            await this.attendancesRepository.findAllAttendancesIdPatient(
                patient_id
            );

        return attendances;
    }
}

export { ListAttendancesPatientIdUseCase };
