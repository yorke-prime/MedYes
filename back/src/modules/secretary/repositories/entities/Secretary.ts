import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { Doctor } from "../../../doctor/repositories/entities/Doctor";

@Entity("secretaries")
class Secretary {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @ManyToOne(() => Doctor)
    @JoinColumn({ name: "admin_id" })
    admin: Doctor;

    @Column()
    admin_id: string;

    @Column()
    admission: Date;

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
            this.profile = "secretary";
        }
    }
}

export { Secretary };
