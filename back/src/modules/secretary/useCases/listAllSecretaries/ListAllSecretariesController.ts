import { Request, Response } from "express";

import { ListAllSecretariesUseCase } from "./ListAllSecretariesUseCase";

class ListAllSecretariesController {
    constructor(private listAllSecretariesUseCase: ListAllSecretariesUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { admin_id } = request.params;
        console.log(admin_id);
        const secretaries = await this.listAllSecretariesUseCase.execute({
            admin_id,
        });

        return response.status(200).json(secretaries);
    }
}

export { ListAllSecretariesController };
