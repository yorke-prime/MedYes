import { Request, Response } from "express";

import { ListAllPatientsUseCase } from "./ListAllPatientsUseCase";

class ListAllPatientsController {
    constructor(private listAllPatientsUseCase: ListAllPatientsUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const patient = await this.listAllPatientsUseCase.execute();

        return response.status(200).json(patient);
    }
}

export { ListAllPatientsController };
