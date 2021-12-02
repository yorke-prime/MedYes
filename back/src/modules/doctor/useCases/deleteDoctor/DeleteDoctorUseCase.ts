import { AppError } from "../../../../shared/errors/AppError";
import { IDoctorRepository } from "../../repositories/IDoctorRepository";

class DeleteDoctorUseCase {
    constructor(private doctorRepository: IDoctorRepository) {}

    async execute({ id }) {
        const doctorExist = await this.doctorRepository.findById(id);
        if (!doctorExist) {
            throw new AppError("Médico não existe!");
        }
        const attendances = await this.doctorRepository.deleteDoctor(id);
        return attendances;
    }
}

export { DeleteDoctorUseCase };
