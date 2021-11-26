import { Router } from "express";

import createDoctorController from "../../../../modules/doctor/useCases/CreateDoctor";

const doctorRoutes = Router();

doctorRoutes.post("/", (request, response) => {
    return createDoctorController().handle(request, response);
});

export { doctorRoutes };
