import { Router } from "express";

import authenticatedSecretary from "../../../../modules/secretary/useCases/authenticatedSecretary";
import createSecretaryController from "../../../../modules/secretary/useCases/createSecretary";
import deleteSecretary from "../../../../modules/secretary/useCases/deleteSecretary";
import listAllSecretaries from "../../../../modules/secretary/useCases/listAllSecretaries";
import {
    ensureAuthenticatedDoctor,
    ensureAuthenticatedSecretary,
} from "../../middlewares/ensureAuthenticate";
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

secretaryRoutes.get(
    "/:admin_id",
    ensureAuthenticatedDoctor,
    ensureAdmin,
    (request, response) => {
        return listAllSecretaries().handle(request, response);
    }
);

secretaryRoutes.delete(
    "/:id",
    ensureAuthenticatedDoctor,
    ensureAdmin,
    (request, response) => {
        return deleteSecretary().handle(request, response);
    }
);

export { secretaryRoutes };
