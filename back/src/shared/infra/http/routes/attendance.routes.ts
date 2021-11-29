import { Router } from "express";

import createAttendanceController from "../../../../modules/attendance/useCases/createAttendance";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticate";
import { ensureSecretary } from "../../middlewares/ensureRoutes";

const attendanceRoutes = Router();

attendanceRoutes.post(
    "/",
    ensureAuthenticated,
    ensureSecretary,
    (request, response) => {
        return createAttendanceController().handle(request, response);
    }
);

export { attendanceRoutes };
