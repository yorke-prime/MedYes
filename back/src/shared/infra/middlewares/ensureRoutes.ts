import { NextFunction, Request, Response } from "express";

import { DoctorRepository } from "../../../modules/doctor/repositories/DoctorRepository";
import { PatientsRepository } from "../../../modules/patient/repositories/PatientsRepository";
import { SecretariesRepository } from "../../../modules/secretary/repositories/SecretariesRepository";
import { AppError } from "../../errors/AppError";

async function ensureAdmin(
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> {
    const { id } = request.user;

    const doctorRepository = new DoctorRepository();
    const userDoctor = await doctorRepository.findById(id);

    try {
        if (userDoctor.profile === "admin") {
            next();
        }
    } catch (err) {
        throw new AppError("Esse usuario não e um administrador!", 400);
    }
}

async function ensureDoctor(
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> {
    const { id } = request.user;

    const doctorRepository = new DoctorRepository();
    const userDoctor = await doctorRepository.findById(id);

    try {
        if (userDoctor.profile === "admin" || userDoctor.profile === "doctor") {
            next();
        }
    } catch (err) {
        throw new AppError("User isn't admin!", 400);
    }
}

async function ensureSecretary(
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> {
    const { id } = request.user;

    const doctorRepository = new DoctorRepository();
    const userDoctor = await doctorRepository.findById(id);
    const secretariesRepository = new SecretariesRepository();
    const userSecretary = await secretariesRepository.findById(id);

    try {
        if (
            userDoctor.profile === "admin" ||
            userDoctor.profile === "doctor" ||
            userSecretary.profile === "secretary"
        ) {
            next();
        }
    } catch (err) {
        throw new AppError("Você não tem acesso!", 400);
    }
}

async function ensurePatient(
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> {
    const { id } = request.user;

    const doctorRepository = new DoctorRepository();
    const userDoctor = await doctorRepository.findById(id);
    const secretariesRepository = new SecretariesRepository();
    const userSecretary = await secretariesRepository.findById(id);
    const patientsRepository = new PatientsRepository();
    const userPatient = await patientsRepository.findById(id);

    try {
        if (
            userDoctor.profile === "admin" ||
            userDoctor.profile === "doctor" ||
            userSecretary.profile === "secretary" ||
            userPatient.profile === "patient"
        ) {
            next();
        }
    } catch (err) {
        throw new AppError("Você não tem acesso!", 400);
    }
}

export { ensureAdmin, ensureDoctor, ensureSecretary, ensurePatient };
