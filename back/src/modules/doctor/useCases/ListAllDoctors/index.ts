import { DoctorRepository } from "../../repositories/DoctorRepository";
import { ListAllDoctorsController } from "./ListAllDoctorsController";
import { ListAllDoctorsUseCase } from "./ListAllDoctorsUseCase";

export default (): ListAllDoctorsController => {
    const doctorRepository = new DoctorRepository();
    const listAllDoctorsUseCase = new ListAllDoctorsUseCase(doctorRepository);
    const listAllDoctorsController = new ListAllDoctorsController(
        listAllDoctorsUseCase
    );

    return listAllDoctorsController;
};
