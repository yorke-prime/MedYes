import { Router } from "express";

import authenticateDoctorController from "../../../../modules/doctor/useCases/authenticatedDoctor";
import createDoctorController from "../../../../modules/doctor/useCases/CreateDoctor";
import deleteDoctor from "../../../../modules/doctor/useCases/deleteDoctor";
import listAllDoctorsController from "../../../../modules/doctor/useCases/ListAllDoctors";
import {
    ensureAuthenticatedAll,
    ensureAuthenticatedDoctor,
} from "../../middlewares/ensureAuthenticate";
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

doctorRoutes.get(
    "/",
    ensureAuthenticatedAll,
    ensureAdmin,
    (request, response) => {
        return listAllDoctorsController().handle(request, response);
    }
);

doctorRoutes.delete(
    "/:id",
    ensureAuthenticatedAll,
    ensureAdmin,
    (request, response) => {
        return deleteDoctor().handle(request, response);
    }
);

export { doctorRoutes };
