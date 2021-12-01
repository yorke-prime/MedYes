import { AppError } from "../../../../shared/errors/AppError";
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
        clinic_name,
    }) {
        const verify = (valor) => {
            if (!valor) {
                throw new AppError("Campo vazio!", 400);
            }
        };

        verify(notes);
        verify(doctor_id);
        verify(patient_id);
        verify(entry_date);
        verify(departure_date);
        verify(clinic_name);
        const doctorExists = await this.doctorsRepository.findById(doctor_id);
        if (!doctorExists) {
            throw new AppError("Doctor not exist", 400);
        }
        const patientExists = await this.patientsRepository.findById(
            patient_id
        );
        if (!patientExists) {
            throw new AppError("Patient not exist", 400);
        }

        await this.attendancesRepository.create({
            departure_date,
            doctor_id,
            patient_id,
            entry_date,
            notes,
            clinic_name,
        });
    }
}

export { CreateAttendanceUseCase };
