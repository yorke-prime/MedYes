import { AttendancesRepository } from "../../repositories/AttendanceRepository";
import { ListAttendancesDoctorIdController } from "./ListAttendancesDoctorIdController";
import { ListAttendencesDoctorIdUseCase } from "./ListAttendancesDoctorIdUseCase";

export default (): ListAttendancesDoctorIdController => {
    const attendancesRepository = new AttendancesRepository();
    const listAttendencesDoctorIdUseCase = new ListAttendencesDoctorIdUseCase(
        attendancesRepository
    );
    const listAttendancesDoctorIdController =
        new ListAttendancesDoctorIdController(listAttendencesDoctorIdUseCase);

    return listAttendancesDoctorIdController;
};
