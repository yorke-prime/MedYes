import { hash } from "bcryptjs";

import { AppError } from "../../../../shared/errors/AppError";
import { IPatientsRepository } from "../../repositories/IPatientsRepository";

class CreatePatientUseCase {
    constructor(private patientsRepository: IPatientsRepository) {}

    async execute({ name, rg, password, email }): Promise<void> {
        const patientExist = await this.patientsRepository.findByEmail(email);
        const verify = (valor) => {
            if (!valor) {
                throw new AppError("Campo vazio!", 400);
            }
        };

        verify(name);
        verify(rg);
        verify(password);
        verify(email);

        if (patientExist) {
            throw new AppError("Email já está sendo utilizado!", 400);
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
