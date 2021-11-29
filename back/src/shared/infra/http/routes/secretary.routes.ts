import { Router } from "express";

import authenticatedSecretary from "../../../../modules/secretary/useCases/authenticatedSecretary";
import createSecretaryController from "../../../../modules/secretary/useCases/createSecretary";
import { ensureAuthenticatedSecretary } from "../../middlewares/ensureAuthenticate";
import { ensureAdmin } from "../../middlewares/ensureRoutes";

const secretaryRoutes = Router();

secretaryRoutes.post(
    "/",
    ensureAuthenticatedSecretary,
    ensureAdmin,
    (request, response) => {
        return createSecretaryController().handle(request, response);
    }
);

secretaryRoutes.post("/session", (request, response) => {
    return authenticatedSecretary().handle(request, response);
});

export { secretaryRoutes };
