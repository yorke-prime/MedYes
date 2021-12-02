import { hash } from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

import createConnection from "../index";

async function create() {
    const connection = await createConnection("localhost");

    const id = uuidv4();
    const password = await hash("admin", 8);

    await connection.query(
        `INSERT INTO DOCTORS(id, name, clinic_name, email, password, "profile", register, created_at)
      values('${id}', 'Administrador', 'admin_clinic', 'admin@admin.com', '${password}', 'admin', 'admin2030','now()')
    `
    );

    await connection.close();
}

create().then(() => console.log("User admin created!!!"));
