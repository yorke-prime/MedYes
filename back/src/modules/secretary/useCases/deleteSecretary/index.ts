import { SecretariesRepository } from "../../repositories/SecretariesRepository";
import { DeleteDoctorController } from "./DeleteSecretaryController";
import { DeleteSecretaryUseCase } from "./DeleteSecretaryUseCase";

export default (): DeleteDoctorController => {
    const secretariesRepository = new SecretariesRepository();
    const deleteSecretaryUseCase = new DeleteSecretaryUseCase(
        secretariesRepository
    );
    const deleteDoctorController = new DeleteDoctorController(
        deleteSecretaryUseCase
    );

    return deleteDoctorController;
};
