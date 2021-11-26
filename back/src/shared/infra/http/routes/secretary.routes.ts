import { Router } from "express";

import createSecretaryController from "../../../../modules/secretary/useCases/createSecretary";

const secretaryRoutes = Router();

secretaryRoutes.post("/", (request, response) => {
    return createSecretaryController().handle(request, response);
});

export { secretaryRoutes };
