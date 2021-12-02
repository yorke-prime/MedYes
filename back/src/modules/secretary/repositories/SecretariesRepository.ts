import { getRepository, Repository } from "typeorm";

import { ICreateSecretaryntDTO } from "../dtos/ICreateSecretaryDTO";
import { Secretary } from "./entities/Secretary";
import { ISecretariesRepository } from "./ISecretaryRepository";

class SecretariesRepository implements ISecretariesRepository {
    private repository: Repository<Secretary>;
    constructor() {
        this.repository = getRepository(Secretary);
    }
    async create({
        admission,
        password,
        email,
        name,
        admin_id,
        clinic_name,
    }: ICreateSecretaryntDTO): Promise<void> {
        const secretary = this.repository.create({
            admission,
            password,
            email,
            name,
            admin_id,
            clinic_name,
        });

        await this.repository.save(secretary);
    }
    async findByEmail(email: string): Promise<Secretary> {
        const secretary = await this.repository.findOne({ email });
        return secretary;
    }
    async findById(id: string): Promise<Secretary> {
        const secretary = await this.repository.findOne(id);
        return secretary;
    }
    async findAll(admin_id: string): Promise<Secretary[]> {
        const secretaries = await this.repository.find({ admin_id });
        return secretaries;
    }
    async deleteSecretary(id: string): Promise<void> {
        const secretary = await this.repository.findOne(id);
        await this.repository.remove(secretary);
    }
}

export { SecretariesRepository };
