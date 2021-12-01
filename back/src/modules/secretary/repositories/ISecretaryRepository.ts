import { ICreateSecretaryntDTO } from "../dtos/ICreateSecretaryDTO";
import { Secretary } from "./entities/Secretary";

interface ISecretariesRepository {
    create(data: ICreateSecretaryntDTO): Promise<void>;
    findByEmail(email: string): Promise<Secretary>;
    findById(id: string): Promise<Secretary>;
    findAll(admin_id: string): Promise<Secretary[]>;
    deleteSecretary(id: string): Promise<void>;
}

export { ISecretariesRepository };
