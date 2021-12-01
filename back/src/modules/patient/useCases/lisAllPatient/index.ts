import { PatientsRepository } from "../../repositories/PatientsRepository";
import { ListAllPatientsController } from "./ListAllPatientsController";
import { ListAllPatientsUseCase } from "./ListAllPatientsUseCase";

export default (): ListAllPatientsController => {
    const patientsRepository = new PatientsRepository();
    const listAllPatientsUseCase = new ListAllPatientsUseCase(
        patientsRepository
    );
    const listAllPatientsController = new ListAllPatientsController(
        listAllPatientsUseCase
    );

    return listAllPatientsController;
};
