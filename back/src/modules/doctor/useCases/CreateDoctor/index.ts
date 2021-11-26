import { DoctorRepository } from "../../repositories/DoctorRepository";
import { CreateDoctorController } from "./CreateDoctorController";
import { CreateDoctorUseCase } from "./CreateDoctorUseCase";

export default (): CreateDoctorController => {
    const doctorRepository = new DoctorRepository();
    const createDoctortUseCase = new CreateDoctorUseCase(doctorRepository);
    const createDoctorController = new CreateDoctorController(
        createDoctortUseCase
    );

    return createDoctorController;
};
