import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("patients")
class Patient {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    rg: number;

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
            this.profile = "patient";
        }
    }
}

export { Patient };
