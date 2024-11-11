export interface I_Profile {
    id?: string;
    email?: string;
    name?: string;
    city?: string;
    phone?: string;
    country?: string;
    address?: string;
}

export interface I_ProfileSchema {
    profile?: I_Profile;
    form?: I_Profile;
}
