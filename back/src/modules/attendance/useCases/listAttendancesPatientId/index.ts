import { AttendancesRepository } from "../../repositories/AttendanceRepository";
import { ListAttendancesPatientIdController } from "./ListAttendancePatientIdController";
import { ListAttendancesPatientIdUseCase } from "./ListAttendancesPatientIdUseCase";

export default (): ListAttendancesPatientIdController => {
    const attendancesRepository = new AttendancesRepository();
    const listAttendancesPatientIdUseCase = new ListAttendancesPatientIdUseCase(
        attendancesRepository
    );
    const listAttendancesPatientIdController =
        new ListAttendancesPatientIdController(listAttendancesPatientIdUseCase);

    return listAttendancesPatientIdController;
};
