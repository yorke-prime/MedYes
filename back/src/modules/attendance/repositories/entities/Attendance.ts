import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { Doctor } from "../../../doctor/repositories/entities/Doctor";
import { Patient } from "../../../patient/repositories/entities/Patients";

@Entity("attendances")
class Attendance {
    @PrimaryColumn()
    id: string;

    @ManyToOne(() => Doctor)
    @JoinColumn({ name: "patient_id", referencedColumnName: "id" })
    doctor: Doctor;

    @Column()
    doctor_id: string;

    @ManyToOne(() => Patient)
    @JoinColumn({ name: "patient_id", referencedColumnName: "id" })
    patient: Patient;

    @Column()
    patient_id: string;

    @Column()
    entry_date: Date;

    @Column()
    departure_date: Date;

    @Column()
    notes: string;

    @Column()
    clinic_name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Attendance };
