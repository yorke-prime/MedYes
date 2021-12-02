import { DoctorRepository } from "../../repositories/DoctorRepository";
import { DeleteDoctorController } from "./DeleteDoctorController";
import { DeleteDoctorUseCase } from "./DeleteDoctorUseCase";

export default (): DeleteDoctorController => {
    const doctorRepository = new DoctorRepository();
    const deleteDoctorUseCase = new DeleteDoctorUseCase(doctorRepository);
    const deleteDoctorController = new DeleteDoctorController(
        deleteDoctorUseCase
    );

    return deleteDoctorController;
};
