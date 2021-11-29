import { Router } from "express";

import authenticateDoctorController from "../../../../modules/doctor/useCases/authenticatedDoctor";
import createDoctorController from "../../../../modules/doctor/useCases/CreateDoctor";
import { ensureAuthenticatedDoctor } from "../../middlewares/ensureAuthenticate";
import { ensureAdmin } from "../../middlewares/ensureRoutes";

const doctorRoutes = Router();

doctorRoutes.post(
    "/",
    ensureAuthenticatedDoctor,
    ensureAdmin,
    (request, response) => {
        return createDoctorController().handle(request, response);
    }
);

doctorRoutes.post("/session", (request, response) => {
    return authenticateDoctorController().handle(request, response);
});

export { doctorRoutes };
