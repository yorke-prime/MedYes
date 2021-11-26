import { Router } from "express";

import createAttendanceController from "../../../../modules/attendance/useCases/createAttendance";

const attendanceRoutes = Router();

attendanceRoutes.post("/", (request, response) => {
    return createAttendanceController().handle(request, response);
});

export { attendanceRoutes };
