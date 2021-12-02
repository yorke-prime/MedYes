import { DoctorRepository } from "../../repositories/DoctorRepository";
import { AuthenticateDoctorController } from "./AuthenticateDoctorController";
import { AuthenticateDoctorUseCase } from "./AuthenticateDoctorUseCase";

export default (): AuthenticateDoctorController => {
    const doctorRepository = new DoctorRepository();
    const authenticateDoctorUseCase = new AuthenticateDoctorUseCase(
        doctorRepository
    );
    const authenticateDoctorController = new AuthenticateDoctorController(
        authenticateDoctorUseCase
    );

    return authenticateDoctorController;
};
