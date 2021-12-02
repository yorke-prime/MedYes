import { DoctorRepository } from "../../../doctor/repositories/DoctorRepository";
import { SecretariesRepository } from "../../repositories/SecretariesRepository";
import { CreateSecretaryController } from "./CreateSecretaryController";
import { CreateSecretaryUseCase } from "./CreateSecretaryUseCase";

export default (): CreateSecretaryController => {
    const secretariesRepository = new SecretariesRepository();
    const doctorRepository = new DoctorRepository();
    const createSecretaryUseCase = new CreateSecretaryUseCase(
        secretariesRepository,
        doctorRepository
    );
    const createSecretaryController = new CreateSecretaryController(
        createSecretaryUseCase
    );

    return createSecretaryController;
};
