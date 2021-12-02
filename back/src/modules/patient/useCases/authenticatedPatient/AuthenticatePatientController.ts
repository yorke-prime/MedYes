import { Request, Response } from "express";

import { AuthenticatePatientUseCase } from "./AuthenticatePatientUseCaase";

class AuthenticatePatientController {
    constructor(
        private authenticatePatientUseCase: AuthenticatePatientUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        const { user, token } = await this.authenticatePatientUseCase.execute({
            email,
            password,
        });

        return response.json({ user, token });
    }
}

export { AuthenticatePatientController };
