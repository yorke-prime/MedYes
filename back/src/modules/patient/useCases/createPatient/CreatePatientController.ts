import { Request, Response } from "express";

import { CreatePatientUseCase } from "./CreatePatientUseCase";

class CreatePatientController {
    constructor(private createPatientUseCase: CreatePatientUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, rg, password, email } = request.body;

        await this.createPatientUseCase.execute({
            name,
            rg,
            password,
            email,
        });

        return response.status(201).send();
    }
}

export { CreatePatientController };
