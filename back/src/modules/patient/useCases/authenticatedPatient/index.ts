import { PatientsRepository } from "../../repositories/PatientsRepository";
import { AuthenticatePatientController } from "./AuthenticatePatientController";
import { AuthenticatePatientUseCase } from "./AuthenticatePatientUseCaase";

export default (): AuthenticatePatientController => {
    const patientsRepository = new PatientsRepository();
    const authenticatePatientUseCase = new AuthenticatePatientUseCase(
        patientsRepository
    );
    const authenticatePatientController = new AuthenticatePatientController(
        authenticatePatientUseCase
    );

    return authenticatePatientController;
};
