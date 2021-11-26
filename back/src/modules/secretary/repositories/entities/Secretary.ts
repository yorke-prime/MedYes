import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("doctors")
class Secretary {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

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
