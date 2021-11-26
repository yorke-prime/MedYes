import { SecretariesRepository } from "../../repositories/SecretariesRepository";
import { CreateSecretaryController } from "./CreateSecretaryController";
import { CreateSecretaryUseCase } from "./CreateSecretaryUseCase";

export default (): CreateSecretaryController => {
    const secretariesRepository = new SecretariesRepository();
    const createSecretaryUseCase = new CreateSecretaryUseCase(
        secretariesRepository
    );
    const createSecretaryController = new CreateSecretaryController(
        createSecretaryUseCase
    );

    return createSecretaryController;
};
