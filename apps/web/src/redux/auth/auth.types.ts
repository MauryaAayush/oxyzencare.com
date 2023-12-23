export interface LoginAction  {
	type: string ;
	payload?: {} |string | null;
};

export interface UserData {
	name?: string;
	email: string;
	phone_number?: string;
	password: string;
	role?: string;
	avatar?: string;
	reset_token?: string;
    reset_token_expiration?: string;
}

export interface AuthState {
    loading: boolean;
    error: string |null;
    user: UserData|null;
    
}