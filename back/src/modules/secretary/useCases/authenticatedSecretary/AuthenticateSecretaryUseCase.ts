import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { AppError } from "../../../../shared/errors/AppError";
import { ISecretariesRepository } from "../../repositories/ISecretaryRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

class AuthenticateSecretaryUseCase {
    constructor(private secretariesRepository: ISecretariesRepository) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.secretariesRepository.findByEmail(email);

        if (!user) {
            throw new AppError("Email ou senha incorreta!", 400);
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError("Email ou senha incorreta!", 400);
        }

        const token = sign({}, "f3efb6112f4f7fc32ce1fda45b37cfd2", {
            subject: user.id,
            expiresIn: "1d",
        });

        return {
            user,
            token,
        };
    }
}

export { AuthenticateSecretaryUseCase };
