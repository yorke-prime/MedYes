import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAttendance1637942729320 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "attendances",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "doctor_id",
                        type: "uuid",
                    },
                    {
                        name: "patient_id",
                        type: "uuid",
                    },
                    {
                        name: "entry_date",
                        type: "timestamp",
                    },
                    {
                        name: "departure_date",
                        type: "timestamp",
                        isNullable: true,
                    },
                    {
                        name: "notes",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKDoctorAttendance",
                        referencedTableName: "doctors",
                        referencedColumnNames: ["id"],
                        columnNames: ["doctor_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKPatientAttendance",
                        referencedTableName: "doctors",
                        referencedColumnNames: ["id"],
                        columnNames: ["patient_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("attendances");
    }
}
