import { Router } from "express";

import { doctorRoutes } from "./doctor.routes";
import { patientRoutes } from "./patient.routes";

const router = Router();

router.use("/patients", patientRoutes);
router.use("/doctors", doctorRoutes);

export { router };
