import { Router } from "express";

import createAttendanceController from "../../../../modules/attendance/useCases/createAttendance";
import deleteAttendance from "../../../../modules/attendance/useCases/deleteAttendance";
import editAttendance from "../../../../modules/attendance/useCases/editAttendance";
import listAtendencesDoctorId from "../../../../modules/attendance/useCases/listAtendencesDoctorId";
import listAttendanceClinicName from "../../../../modules/attendance/useCases/listAttendanceClinicName";
import listAttendanceId from "../../../../modules/attendance/useCases/listAttendanceId";
import listAttendancesPatientId from "../../../../modules/attendance/useCases/listAttendancesPatientId";
import { ensureAuthenticatedAll } from "../../middlewares/ensureAuthenticate";
import { ensureDoctor, ensureSecretary } from "../../middlewares/ensureRoutes";

const attendanceRoutes = Router();

attendanceRoutes.post(
    "/",
    ensureAuthenticatedAll,
    ensureDoctor,
    (request, response) => {
        return createAttendanceController().handle(request, response);
    }
);

attendanceRoutes.get(
    "/patients/:patient_id",
    ensureAuthenticatedAll,
    (request, response) => {
        return listAttendancesPatientId().handle(request, response);
    }
);

attendanceRoutes.get(
    "/doctors/:doctor_id",
    ensureAuthenticatedAll,
    (request, response) => {
        return listAtendencesDoctorId().handle(request, response);
    }
);

attendanceRoutes.get(
    "/clinic/:clinic_name",
    ensureAuthenticatedAll,
    (request, response) => {
        return listAttendanceClinicName().handle(request, response);
    }
);

attendanceRoutes.get("/a/:id", ensureAuthenticatedAll, (request, response) => {
    return listAttendanceId().handle(request, response);
});

attendanceRoutes.delete(
    "/:id",
    ensureAuthenticatedAll,
    ensureSecretary,
    (request, response) => {
        return deleteAttendance().handle(request, response);
    }
);
attendanceRoutes.put(
    "/:id",
    ensureAuthenticatedAll,
    ensureSecretary,
    (request, response) => {
        return editAttendance().handle(request, response);
    }
);

export { attendanceRoutes };
