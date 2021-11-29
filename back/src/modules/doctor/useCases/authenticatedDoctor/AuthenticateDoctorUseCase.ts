import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { AppError } from "../../../../shared/errors/AppError";
import { IDoctorRepository } from "../../repositories/IDoctorRepository";

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

class AuthenticateDoctorUseCase {
    constructor(private doctorRepository: IDoctorRepository) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.doctorRepository.findByEmail(email);

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

export { AuthenticateDoctorUseCase };
