import { hash } from "bcryptjs";

import { AppError } from "../../../../shared/errors/AppError";
import { IDoctorRepository } from "../../../doctor/repositories/IDoctorRepository";
import { ISecretariesRepository } from "../../repositories/ISecretaryRepository";

class CreateSecretaryUseCase {
    constructor(
        private secretariesRepository: ISecretariesRepository,
        private doctorRepository: IDoctorRepository
    ) {}

    async execute({
        admission,
        password,
        email,
        name,
        admin_id,
    }): Promise<void> {
        const secretaryExists = await this.secretariesRepository.findByEmail(
            email
        );

        const adminExsit = this.doctorRepository.findById(admin_id);

        if (secretaryExists) {
            throw new AppError("Secretary Exists", 400);
        }

        if (!adminExsit) {
            throw new AppError("O Administrador não existe!", 400);
        }

        const admissionDate = new Date(admission);

        const passwordHash = await hash(password, 8);

        await this.secretariesRepository.create({
            admission: admissionDate,
            password: passwordHash,
            email,
            name,
            admin_id,
        });
    }
}

export { CreateSecretaryUseCase };
