import { Request, Response } from "express";

import { DeleteAttendanceUseCase } from "./DeleteAttendanceUseCase";

class DeleteAttendanceController {
    constructor(private deleteAttendanceUseCase: DeleteAttendanceUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        await this.deleteAttendanceUseCase.execute({
            id,
        });

        return response.status(200).send();
    }
}

export { DeleteAttendanceController };
