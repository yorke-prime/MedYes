import { Router } from "express";

import { doctorRoutes } from "./doctor.routes";
import { patientRoutes } from "./patient.routes";
import { secretaryRoutes } from "./secretary.routes";

const router = Router();

router.use("/patients", patientRoutes);
router.use("/doctors", doctorRoutes);
router.use("/secretary", secretaryRoutes);

export { router };
