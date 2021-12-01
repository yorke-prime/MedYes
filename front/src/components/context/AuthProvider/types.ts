export interface IUser {
    email?: string;
    token?: string;
    profile?: string;
    id?: string;
    admin_id?: string;
    clinic_name?: string;
}

export interface IContext extends IUser {
    authenticate: (email: string, password: string, path: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}