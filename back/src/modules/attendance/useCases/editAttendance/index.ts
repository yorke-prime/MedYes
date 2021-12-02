import { AttendancesRepository } from "../../repositories/AttendanceRepository";
import { EditAttendanceController } from "./EditAttendanceController";
import { EditAttendanceUseCase } from "./EditAttendanceUseCase";

export default (): EditAttendanceController => {
    const attendancesRepository = new AttendancesRepository();
    const editAttendanceUseCase = new EditAttendanceUseCase(
        attendancesRepository
    );
    const editAttendanceController = new EditAttendanceController(
        editAttendanceUseCase
    );

    return editAttendanceController;
};
