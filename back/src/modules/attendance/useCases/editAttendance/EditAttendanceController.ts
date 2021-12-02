import { Request, Response } from "express";

import { EditAttendanceUseCase } from "./EditAttendanceUseCase";

class EditAttendanceController {
    constructor(private editAttendanceUseCase: EditAttendanceUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { clinic_name, entry_date, notes, departure_date } = request.body;

        const newAttendance = await this.editAttendanceUseCase.execute({
            id,
            clinic_name,
            entry_date,
            notes,
            departure_date,
        });

        return response.status(200).json(newAttendance);
    }
}

export { EditAttendanceController };
