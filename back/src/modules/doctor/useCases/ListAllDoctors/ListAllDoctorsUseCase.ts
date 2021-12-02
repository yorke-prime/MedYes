import { IDoctorRepository } from "../../repositories/IDoctorRepository";

class ListAllDoctorsUseCase {
    constructor(private doctorRepository: IDoctorRepository) {}

    async execute() {
        const doctors = await this.doctorRepository.findAll();

        return doctors;
    }
}

export { ListAllDoctorsUseCase };
