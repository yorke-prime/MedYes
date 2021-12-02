import { Request, Response } from "express";

import { ListAttendanceClinicName } from "./ListAttendanceClinicNameUseCase";

class ListAttendanceClinicNameController {
    constructor(private listAttendanceClinicName: ListAttendanceClinicName) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { clinic_name } = request.params;

        const attendances = await this.listAttendanceClinicName.execute({
            clinic_name,
        });

        return response.status(200).json(attendances);
    }
}

export { ListAttendanceClinicNameController };
