import { Request, Response } from "express";

import { AppError } from "../../../../shared/errors/AppError";
import { ListAttendencesDoctorIdUseCase } from "./ListAttendancesDoctorIdUseCase";

class ListAttendancesDoctorIdController {
    constructor(
        private listAttendencesDoctorIdUseCase: ListAttendencesDoctorIdUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { doctor_id } = request.params;

        const attendances = await this.listAttendencesDoctorIdUseCase.execute({
            doctor_id,
        });

        if (!attendances) {
            throw new AppError("não existe Atendimentos");
        }

        return response.status(200).json(attendances);
    }
}

export { ListAttendancesDoctorIdController };
