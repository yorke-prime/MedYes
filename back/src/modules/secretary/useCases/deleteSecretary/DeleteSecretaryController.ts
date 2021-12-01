import { Request, Response } from "express";

import { DeleteSecretaryUseCase } from "./DeleteSecretaryUseCase";

class DeleteDoctorController {
    constructor(private deleteSecretaryUseCase: DeleteSecretaryUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        await this.deleteSecretaryUseCase.execute({
            id,
        });

        return response.status(200).send();
    }
}

export { DeleteDoctorController };
