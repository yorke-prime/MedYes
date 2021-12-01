import { Request, Response } from "express";

import { CreateAttendanceUseCase } from "./CreateAttendanceUseCase";

class CreateAttendanceController {
    constructor(private createAttendanceUseCase: CreateAttendanceUseCase) {}

    async handle(request: Request, response: Response) {
        const {
            departure_date,
            doctor_id,
            patient_id,
            entry_date,
            notes,
            clinic_name,
        } = request.body;

        await this.createAttendanceUseCase.execute({
            departure_date,
            doctor_id,
            patient_id,
            entry_date,
            notes,
            clinic_name,
        });

        return response.status(201).send();
    }
}

export { CreateAttendanceController };
