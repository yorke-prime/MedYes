import { Request, Response } from "express";

import { AuthenticateDoctorUseCase } from "./AuthenticateDoctorUseCase";

class AuthenticateDoctorController {
    constructor(private authenticateDoctorUseCase: AuthenticateDoctorUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        const { user, token } = await this.authenticateDoctorUseCase.execute({
            email,
            password,
        });

        return response.json({ user, token });
    }
}

export { AuthenticateDoctorController };
