import { DoctorRepository } from "../../../doctor/repositories/DoctorRepository";
import { PatientsRepository } from "../../../patient/repositories/PatientsRepository";
import { AttendancesRepository } from "../../repositories/AttendanceRepository";
import { CreateAttendanceController } from "./CreateAttendanceController";
import { CreateAttendanceUseCase } from "./CreateAttendanceUseCase";

export default (): CreateAttendanceController => {
    const attendancesRepository = new AttendancesRepository();
    const doctorsRepository = new DoctorRepository();
    const patientsRepository = new PatientsRepository();
    const createAttendanceUseCase = new CreateAttendanceUseCase(
        attendancesRepository,
        doctorsRepository,
        patientsRepository
    );
    const createAttendanceController = new CreateAttendanceController(
        createAttendanceUseCase
    );

    return createAttendanceController;
};
