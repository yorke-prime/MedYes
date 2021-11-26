import { hash } from "bcryptjs";

import { ISecretariesRepository } from "../../repositories/ISecretaryRepository";

class CreateSecretaryUseCase {
    constructor(private secretariesRepository: ISecretariesRepository) {}

    async execute({ admission, password, email, name }): Promise<void> {
        const secretaryExists = await this.secretariesRepository.findByEmail(
            email
        );
        if (secretaryExists) {
            throw new Error("Secretary Exists");
        }

        const admissionDate = new Date(admission);

        const passwordHash = await hash(password, 8);

        await this.secretariesRepository.create({
            admission: admissionDate,
            password: passwordHash,
            email,
            name,
        });
    }
}

export { CreateSecretaryUseCase };
