import { ISecretariesRepository } from "../../repositories/ISecretaryRepository";

class ListAllSecretariesUseCase {
    constructor(private secretariesRepository: ISecretariesRepository) {}

    async execute({ admin_id }) {
        const secretaries = await this.secretariesRepository.findAll(admin_id);
        return secretaries;
    }
}

export { ListAllSecretariesUseCase };
