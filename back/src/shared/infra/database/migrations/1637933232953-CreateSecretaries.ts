import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSecretaries1637933232953 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "secretaries",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "admission",
                        type: "timestamp",
                    },
                    {
                        name: "admin_id",
                        type: "uuid",
                    },
                    {
                        name: "clinic_name",
                        type: "varchar",
                    },
                    {
                        name: "password",
                        type: "varchar",
                    },
                    {
                        name: "profile",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKDoctorSecretary",
                        referencedTableName: "doctors",
                        referencedColumnNames: ["id"],
                        columnNames: ["admin_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("secretaries");
    }
}
