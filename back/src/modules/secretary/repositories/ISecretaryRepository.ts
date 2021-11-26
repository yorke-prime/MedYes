import { ICreateSecretaryntDTO } from "../dtos/ICreateSecretaryDTO";
import { Secretary } from "./entities/Secretary";

interface ISecretariesRepository {
    create(data: ICreateSecretaryntDTO): Promise<void>;
    findByEmail(email: string): Promise<Secretary>;
}

export { ISecretariesRepository };
