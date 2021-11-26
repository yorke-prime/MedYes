import { hash } from "bcryptjs";

import { IPatientsRepository } from "../../repositories/IPatientsRepository";

class CreatePatientUseCase {
    constructor(private patientsRepository: IPatientsRepository) {}

    async execute({ name, rg, password, email }): Promise<void> {
        const patientExist = await this.patientsRepository.findByEmail(email);

        if (patientExist) {
            throw new Error("Category Exists");
        }

        const passwordHash = await hash(password, 8);

        this.patientsRepository.create({
            name,
            rg,
            password: passwordHash,
            email,
        });
    }
}

export { CreatePatientUseCase };
