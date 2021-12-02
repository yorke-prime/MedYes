import { Request, Response } from "express";

import { CreateDoctorUseCase } from "./CreateDoctorUseCase";

class CreateDoctorController {
    constructor(private createDoctorUseCase: CreateDoctorUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, register, password, email, clinic_name } = request.body;

        await this.createDoctorUseCase.execute({
            name,
            register,
            password,
            email,
            clinic_name,
        });

        return response.status(201).send();
    }
}

export { CreateDoctorController };
