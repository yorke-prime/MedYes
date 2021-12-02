import { AttendancesRepository } from "../../repositories/AttendanceRepository";
import { ListAttendanceClinicNameController } from "./ListAttendanceClinicNameController";
import { ListAttendanceClinicName } from "./ListAttendanceClinicNameUseCase";

export default (): ListAttendanceClinicNameController => {
    const attendancesRepository = new AttendancesRepository();
    const listAttendanceClinicName = new ListAttendanceClinicName(
        attendancesRepository
    );
    const listAttendanceClinicNameController =
        new ListAttendanceClinicNameController(listAttendanceClinicName);

    return listAttendanceClinicNameController;
};
