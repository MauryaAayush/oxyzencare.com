export enum Role {
	Admin = "admin",
	Doctor = "doctor",
	Patient = "patient",
}

export type Routes = {
	admin: string[];
	doctor: string[];
	patient: string[];
};

export const routes: Routes = {
	admin: ["/dashboard", "/users", "/settings"],
	doctor: ["/patients", "/appointments", "/records"],
	patient: ["/profile", "/appointments", "/medications"],
};
