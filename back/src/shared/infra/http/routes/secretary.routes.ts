import { Router } from "express";

import createPatientController from "../../../../modules/patient/useCases/createPatient";

const secretaryRoutes = Router();

secretaryRoutes.post("/", (request, response) => {
    return createPatientController().handle(request, response);
});

export { secretaryRoutes };
