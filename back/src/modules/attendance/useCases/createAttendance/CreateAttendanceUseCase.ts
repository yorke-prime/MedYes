import { IDoctorRepository } from "../../../doctor/repositories/IDoctorRepository";
import { IPatientsRepository } from "../../../patient/repositories/IPatientsRepository";
import { IAttendancesRepository } from "../../repositories/IAttendancesRepository";

class CreateAttendanceUseCase {
    constructor(
        private attendancesRepository: IAttendancesRepository,
        private doctorsRepository: IDoctorRepository,
        private patientsRepository: IPatientsRepository
    ) {}

    async execute({
        departure_date,
        doctor_id,
        patient_id,
        entry_date,
        notes,
    }) {
        const doctorExists = await this.doctorsRepository.findById(doctor_id);
        if (!doctorExists) {
            throw new Error("Doctor not exist");
        }
        const patientExists = await this.patientsRepository.findById(
            patient_id
        );
        if (!patientExists) {
            throw new Error("Patient not exist");
        }

        await this.attendancesRepository.create({
            departure_date,
            doctor_id,
            patient_id,
            entry_date,
            notes,
        });
    }
}

export { CreateAttendanceUseCase };
