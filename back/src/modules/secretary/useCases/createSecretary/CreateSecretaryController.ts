import { Request, Response } from "express";

import { CreateSecretaryUseCase } from "./CreateSecretaryUseCase";

class CreateSecretaryController {
    constructor(private createSecretaryUseCase: CreateSecretaryUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { admission, password, email, name, admin_id, clinic_name } =
            request.body;

        await this.createSecretaryUseCase.execute({
            admission,
            password,
            email,
            name,
            admin_id,
            clinic_name,
        });

        return response.status(201).send();
    }
}

export { CreateSecretaryController };
