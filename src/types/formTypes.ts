// src/types/formTypes.ts
export interface FormData {
    name: string;
    email: string;
    phone: string;
}

export interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
}