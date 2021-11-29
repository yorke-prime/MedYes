import { hash } from "bcryptjs";

import { AppError } from "../../../../shared/errors/AppError";
import { IDoctorRepository } from "../../repositories/IDoctorRepository";

class CreateDoctorUseCase {
    constructor(private doctorRepository: IDoctorRepository) {}

    async execute({
        name,
        register,
        password,
        email,
        clinic_name,
    }): Promise<void> {
        const doctorExist = await this.doctorRepository.findByEmail(email);

        if (doctorExist) {
            throw new AppError("Já existe uma conta com esse email!", 400);
        }

        const passwordHash = await hash(password, 8);

        await this.doctorRepository.create({
            name,
            register,
            password: passwordHash,
            email,
            clinic_name,
        });
    }
}

export { CreateDoctorUseCase };
