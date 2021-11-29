import { Request, Response } from "express";

import { AuthenticateSecretaryUseCase } from "./AuthenticateSecretaryUseCase";

class AuthenticateSecretaryController {
    constructor(
        private authenticateSecretaryUseCase: AuthenticateSecretaryUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        const { user, token } = await this.authenticateSecretaryUseCase.execute(
            {
                email,
                password,
            }
        );

        return response.json({ user, token });
    }
}

export { AuthenticateSecretaryController };
