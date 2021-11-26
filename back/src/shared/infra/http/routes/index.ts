import { Router } from "express";

import { attendanceRoutes } from "./attendance.routes";
import { doctorRoutes } from "./doctor.routes";
import { patientRoutes } from "./patient.routes";
import { secretaryRoutes } from "./secretary.routes";

const router = Router();

router.use("/patients", patientRoutes);
router.use("/doctors", doctorRoutes);
router.use("/secretaries", secretaryRoutes);
router.use("/attendances", attendanceRoutes);

export { router };
