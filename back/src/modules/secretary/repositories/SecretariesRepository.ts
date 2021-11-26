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
    }: ICreateSecretaryntDTO): Promise<void> {
        const secretary = this.repository.create({
            admission,
            password,
            email,
            name,
        });

        await this.repository.save(secretary);
    }
    async findByEmail(email: string): Promise<Secretary> {
        const secretary = await this.repository.findOne({ email });
        return secretary;
    }
}

export { SecretariesRepository };
