import { Router } from "express";

import createPatientController from "../../../../modules/patient/useCases/createPatient";

const patientRoutes = Router();

patientRoutes.post("/", (request, response) => {
    return createPatientController().handle(request, response);
});

export { patientRoutes };
