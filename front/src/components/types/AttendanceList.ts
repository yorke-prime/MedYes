export type Attendance = {
    id: string;
    doctor_id: string;
    patient_id: string;
    entry_date: string;
    departure_date: string;
    notes: string;
    clinic_name: string;
    created_at: string;
    base?: string;
}