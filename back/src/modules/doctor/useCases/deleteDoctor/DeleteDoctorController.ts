import { Request, Response } from "express";

import { DeleteDoctorUseCase } from "./DeleteDoctorUseCase";

class DeleteDoctorController {
    constructor(private deleteDoctorUseCase: DeleteDoctorUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        await this.deleteDoctorUseCase.execute({
            id,
        });

        return response.status(200).send();
    }
}

export { DeleteDoctorController };
