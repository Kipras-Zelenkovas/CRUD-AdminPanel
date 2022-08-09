export interface UsersData{
    id: number;
    name: string;
    email: string;
}

export interface UsersChangeableData{
    name: string;
    email: string;
    password: string;
}

export interface Routes{
    name: string;
    link: string;
}