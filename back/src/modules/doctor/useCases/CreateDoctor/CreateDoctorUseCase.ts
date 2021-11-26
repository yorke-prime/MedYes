import { IDoctorRepository } from "../../repositories/IDoctorRepository";

class CreateDoctorUseCase {
    constructor(private doctorRepository: IDoctorRepository) {}

    async execute({ name, register, password, email }): Promise<void> {
        const doctorExist = await this.doctorRepository.findByEmail(email);

        if (doctorExist) {
            throw new Error("Category Exists");
        }

        this.doctorRepository.create({
            name,
            register,
            password,
            email,
        });
    }
}

export { CreateDoctorUseCase };
