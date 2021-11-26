import { ICreateAttendanceDTO } from "../dtos/ICreateAttendanceDTO";

interface IAttendancesRepository {
    create(data: ICreateAttendanceDTO): Promise<void>;
}

export { IAttendancesRepository };
