import { SecretariesRepository } from "../../repositories/SecretariesRepository";
import { ListAllSecretariesController } from "./ListAllSecretariesController";
import { ListAllSecretariesUseCase } from "./ListAllSecretariesUseCase";

export default (): ListAllSecretariesController => {
    const secretariesRepository = new SecretariesRepository();
    const listAllSecretariesUseCase = new ListAllSecretariesUseCase(
        secretariesRepository
    );
    const listAllSecretariesController = new ListAllSecretariesController(
        listAllSecretariesUseCase
    );

    return listAllSecretariesController;
};
