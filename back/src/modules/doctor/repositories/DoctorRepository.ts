import { getRepository, Repository } from "typeorm";

import { ICreateDoctorDTO } from "../dtos/ICreateDoctorDTO";
import { Doctor } from "./entities/Doctor";
import { IDoctorRepository } from "./IDoctorRepository";

class DoctorRepository implements IDoctorRepository {
    private repository: Repository<Doctor>;

    constructor() {
        this.repository = getRepository(Doctor);
    }
    async create({
        email,
        name,
        password,
        register,
    }: ICreateDoctorDTO): Promise<void> {
        const doctor = this.repository.create({
            email,
            name,
            password,
            register,
        });

        await this.repository.save(doctor);
    }

    async findByEmail(email: string): Promise<Doctor> {
        const doctor = await this.repository.findOne({ email });

        return doctor;
    }
    async findById(id: string): Promise<Doctor> {
        const doctor = await this.repository.findOne(id);

        return doctor;
    }
}

export { DoctorRepository };
