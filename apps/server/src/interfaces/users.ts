export interface UserAttributes {
    id: number; // INT PRIMARY KEY
    name: string; // VARCHAR(255)
    email: string; // VARCHAR(255)
    phone_number: string; // VARCHAR(15) or appropriate length
    password: string;
    role: string; // VARCHAR(10) or appropriate length
    avatar:string;
    reset_token: string;
    reset_token_expiration: Date;
}
