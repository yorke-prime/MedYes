interface ICreateAttendanceDTO {
    doctor_id: string;
    patient_id: string;
    entry_date: Date;
    departure_date?: Date;
    notes: string;
    updated_at?: Date;
}

export { ICreateAttendanceDTO };
