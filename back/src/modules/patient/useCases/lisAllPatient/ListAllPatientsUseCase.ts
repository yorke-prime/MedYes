import { Patient } from "../../repositories/entities/Patients";
import { IPatientsRepository } from "../../repositories/IPatientsRepository";

class ListAllPatientsUseCase {
    constructor(private patientsRepository: IPatientsRepository) {}

    async execute(): Promise<Patient[]> {
        const patients = await this.patientsRepository.findAll();

        return patients;
    }
}

export { ListAllPatientsUseCase };
