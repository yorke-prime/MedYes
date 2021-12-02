import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { DoctorRepository } from "../../../modules/doctor/repositories/DoctorRepository";
import { PatientsRepository } from "../../../modules/patient/repositories/PatientsRepository";
import { SecretariesRepository } from "../../../modules/secretary/repositories/SecretariesRepository";
import { AppError } from "../../errors/AppError";

interface IPayload {
    sub: string;
}

async function ensureAuthenticatedAll(
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 400);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            "f3efb6112f4f7fc32ce1fda45b37cfd2"
        ) as IPayload;

        const database = (user_id: string) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            let base: any;
            const patientsRepository = new PatientsRepository();
            const patient = patientsRepository.findById(user_id);
            if (patient) {
                base = patientsRepository;
            }
            const secretariesRepository = new SecretariesRepository();
            const secretary = secretariesRepository.findById(user_id);
            if (secretary) {
                base = secretariesRepository;
            }
            const doctorRepository = new DoctorRepository();
            const doctor = doctorRepository.findById(user_id);
            if (doctor) {
                base = doctorRepository;
            }

            return base;
        };
        const atorizatio = database(user_id);
        const user = atorizatio.findById(user_id);

        if (!user) {
            throw new AppError("Paciente não existe", 400);
        }

        request.user = {
            id: user_id,
        };

        next();
    } catch {
        throw new AppError("Token invalid", 400);
    }
}

async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 400);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            "f3efb6112f4f7fc32ce1fda45b37cfd2"
        ) as IPayload;

        const patientsRepository = new PatientsRepository();

        const patient = patientsRepository.findById(user_id);

        if (!patient) {
            throw new AppError("Paciente não existe", 400);
        }

        request.user = {
            id: user_id,
        };

        next();
    } catch {
        throw new AppError("Token invalid", 400);
    }
}

async function ensureAuthenticatedSecretary(
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> {
    const authHeader = request.headers.authorization;
    console.log(authHeader);

    if (!authHeader) {
        throw new AppError("Token missing", 400);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            "f3efb6112f4f7fc32ce1fda45b37cfd2"
        ) as IPayload;

        const secretariesRepository = new SecretariesRepository();

        const secretary = secretariesRepository.findById(user_id);

        if (!secretary) {
            throw new AppError("Secretaria não existente!", 400);
        }

        request.user = {
            id: user_id,
        };

        next();
    } catch {
        throw new AppError("Token invalid", 400);
    }
}

async function ensureAuthenticatedDoctor(
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 400);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            "f3efb6112f4f7fc32ce1fda45b37cfd2"
        ) as IPayload;

        const doctorRepository = new DoctorRepository();

        const doctor = doctorRepository.findById(user_id);

        if (!doctor) {
            throw new AppError("Conta não existente!");
        }

        request.user = {
            id: user_id,
        };

        next();
    } catch {
        throw new AppError("Token invalid");
    }
}

export {
    ensureAuthenticated,
    ensureAuthenticatedSecretary,
    ensureAuthenticatedDoctor,
    ensureAuthenticatedAll,
};
