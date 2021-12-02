import { IAttendancesRepository } from "../../repositories/IAttendancesRepository";

class ListAttendanceClinicName {
    constructor(private attendancesRepository: IAttendancesRepository) {}

    async execute({ clinic_name }) {
        const attendances =
            await this.attendancesRepository.findAllAttendancesClinicName(
                clinic_name
            );

        return attendances;
    }
}

export { ListAttendanceClinicName };
