import { AttendancesRepository } from "../../repositories/AttendanceRepository";
import { DeleteAttendanceController } from "./DeleteAttendanceController";
import { DeleteAttendanceUseCase } from "./DeleteAttendanceUseCase";

export default (): DeleteAttendanceController => {
    const attendancesRepository = new AttendancesRepository();
    const deleteAttendanceUseCase = new DeleteAttendanceUseCase(
        attendancesRepository
    );
    const deleteAttendanceController = new DeleteAttendanceController(
        deleteAttendanceUseCase
    );

    return deleteAttendanceController;
};
