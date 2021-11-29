import { Router } from "express";

import authenticatedPatient from "../../../../modules/patient/useCases/authenticatedPatient";
import createPatientController from "../../../../modules/patient/useCases/createPatient";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticate";

const patientRoutes = Router();

patientRoutes.post("/", ensureAuthenticated, (request, response) => {
    return createPatientController().handle(request, response);
});

patientRoutes.post("/session", (request, response) => {
    return authenticatedPatient().handle(request, response);
});

export { patientRoutes };
