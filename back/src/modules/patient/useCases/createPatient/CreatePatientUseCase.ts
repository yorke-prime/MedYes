import { IPatientsRepository } from "../../repositories/IPatientsRepository";

class CreatePatientUseCase {
    constructor(private patientsRepository: IPatientsRepository) {}

    async execute({ name, rg, password, email, profile }): Promise<void> {
        const patientExist = this.patientsRepository.findByEmail(email);

        if (patientExist) {
            throw new Error("Category Exists");
        }

        this.patientsRepository.create({
            name,
            rg,
            password,
            email,
            profile,
        });
    }
}

export { CreatePatientUseCase };
