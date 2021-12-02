interface ICreatePatientDTO {
    name: string;
    rg: number;
    password: string;
    email: string;
    profile?: string;
    id?: string;
}

export { ICreatePatientDTO };
