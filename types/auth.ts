export type ILogin = {
    dial_code: string;
    number: string;
    code: string;
}

export type ILoginResponse = {
    user: IUser;
    token: string;
}


export type IUser = {
    id: number;
    name: string;
    dial_code: string;
    code: string
}