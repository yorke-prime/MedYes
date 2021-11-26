import { getRepository, Repository } from "typeorm";

import { ICreatePatientDTO } from "../dtos/ICreatePatientDTO";
import { Patient } from "./entities/Patients";
import { IPatientsRepository } from "./IPatientsRepository";

class PatientsRepository implements IPatientsRepository {
    private repository: Repository<Patient>;

    constructor() {
        this.repository = getRepository(Patient);
    }
    async create({
        email,
        name,
        password,
        profile,
        rg,
    }: ICreatePatientDTO): Promise<void> {
        const patient = this.repository.create({
            email,
            name,
            password,
            profile,
            rg,
        });

        await this.repository.save(patient);
    }

    async findByEmail(email: string): Promise<Patient> {
        const patient = await this.repository.findOne({ email });

        return patient;
    }

    async findById(id: string): Promise<Patient> {
        const patient = await this.repository.findOne(id);

        return patient;
    }
}

export { PatientsRepository };
