import { Request, Response } from "express";

import { ListAllDoctorsUseCase } from "./ListAllDoctorsUseCase";

class ListAllDoctorsController {
    constructor(private listAllDoctorsUseCase: ListAllDoctorsUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const doctors = await this.listAllDoctorsUseCase.execute();

        return response.status(200).json(doctors);
    }
}

export { ListAllDoctorsController };
