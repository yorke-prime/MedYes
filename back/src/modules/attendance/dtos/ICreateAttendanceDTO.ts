interface ICreateAttendanceDTO {
    doctor_id: string;
    patient_id: string;
    entry_date: Date;
    departure_date?: Date;
    notes: string;
    updated_at?: Date;
    clinic_name: string;
}

interface IEditAttendanceDTO {
    id: string;
    entry_date?: Date;
    departure_date?: Date;
    notes?: string;
    clinic_name?: string;
}

export { ICreateAttendanceDTO, IEditAttendanceDTO };
