import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { IPatientsRepository } from "modules/patient/repositories/IPatientsRepository";

import { AppError } from "../../../../shared/errors/AppError";

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

class AuthenticatePatientUseCase {
    constructor(private patientsRepository: IPatientsRepository) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.patientsRepository.findByEmail(email);

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

export { AuthenticatePatientUseCase };
