export interface UsersData{
    id: number;
    name: string;
    email: string;
}

interface Links{
    url: string;
    lable: string;
    activate: boolean;
}

export interface TableData{
    current_page: number;
    data: Array<UsersData>;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Array<Links>;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export interface PagingData{
    current_page: number;
    last_page: number;
}

export interface PutPostUsersData{
    id?: number;
    name: string;
    email: string;
    password: string;
}

export interface Routes{
    name: string;
    link: string;
}