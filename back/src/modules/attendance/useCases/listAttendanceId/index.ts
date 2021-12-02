import { AttendancesRepository } from "../../repositories/AttendanceRepository";
import { ListAttendanceIdController } from "./ListAttendanceIdController";
import { ListAttendanceIdUseCase } from "./ListAttendanceIdUseCase";

export default (): ListAttendanceIdController => {
    const attendancesRepository = new AttendancesRepository();
    const listAttendanceIdUseCase = new ListAttendanceIdUseCase(
        attendancesRepository
    );
    const listAttendanceIdController = new ListAttendanceIdController(
        listAttendanceIdUseCase
    );

    return listAttendanceIdController;
};
