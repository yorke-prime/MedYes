import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("doctors")
class Doctor {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    clinic_name: string;

    @Column()
    register: string;

    @Column()
    password: string;

    @Column()
    profile: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
        if (!this.profile) {
            this.profile = "doctor";
        }
    }
}

export { Doctor };
