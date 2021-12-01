import { Router } from "express";

import authenticatedPatient from "../../../../modules/patient/useCases/authenticatedPatient";
import createPatientController from "../../../../modules/patient/useCases/createPatient";
import lisAllPatient from "../../../../modules/patient/useCases/lisAllPatient";
import { ensureAuthenticatedAll } from "../../middlewares/ensureAuthenticate";

const patientRoutes = Router();

patientRoutes.post("/", (request, response) => {
    return createPatientController().handle(request, response);
});

patientRoutes.post("/session", (request, response) => {
    return authenticatedPatient().handle(request, response);
});

patientRoutes.get("/", ensureAuthenticatedAll, (request, response) => {
    return lisAllPatient().handle(request, response);
});

export { patientRoutes };
