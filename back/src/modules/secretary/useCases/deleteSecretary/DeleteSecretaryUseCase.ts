import { AppError } from "../../../../shared/errors/AppError";
import { ISecretariesRepository } from "../../repositories/ISecretaryRepository";

class DeleteSecretaryUseCase {
    constructor(private secretariesRepository: ISecretariesRepository) {}

    async execute({ id }) {
        const doctorExist = await this.secretariesRepository.findById(id);
        if (!doctorExist) {
            throw new AppError("Médico não existe!");
        }
        const attendances = await this.secretariesRepository.deleteSecretary(
            id
        );
        return attendances;
    }
}

export { DeleteSecretaryUseCase };
