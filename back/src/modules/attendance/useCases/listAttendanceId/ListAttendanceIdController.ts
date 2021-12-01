import { Request, Response } from "express";

import { ListAttendanceIdUseCase } from "./ListAttendanceIdUseCase";

class ListAttendanceIdController {
    constructor(private listAttendanceIdUseCase: ListAttendanceIdUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        console.log(id);

        const attendance = await this.listAttendanceIdUseCase.execute({
            id,
        });

        return response.status(200).json(attendance);
    }
}

export { ListAttendanceIdController };
