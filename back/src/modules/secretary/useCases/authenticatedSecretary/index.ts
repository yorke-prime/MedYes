import { SecretariesRepository } from "../../repositories/SecretariesRepository";
import { AuthenticateSecretaryController } from "./AuthenticateSecretaryController";
import { AuthenticateSecretaryUseCase } from "./AuthenticateSecretaryUseCase";

export default (): AuthenticateSecretaryController => {
    const secretariesRepository = new SecretariesRepository();
    const authenticateSecretaryUseCase = new AuthenticateSecretaryUseCase(
        secretariesRepository
    );
    const authenticateSecretaryController = new AuthenticateSecretaryController(
        authenticateSecretaryUseCase
    );

    return authenticateSecretaryController;
};
