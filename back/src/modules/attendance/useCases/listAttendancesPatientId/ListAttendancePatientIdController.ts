import { Request, Response } from "express";

import { ListAttendancesPatientIdUseCase } from "./ListAttendancesPatientIdUseCase";

class ListAttendancesPatientIdController {
    constructor(
        private listAttendancesPatientIdUseCase: ListAttendancesPatientIdUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { patient_id } = request.params;

        const attendances = await this.listAttendancesPatientIdUseCase.execute({
            patient_id,
        });

        return response.status(200).json(attendances);
    }
}

export { ListAttendancesPatientIdController };
