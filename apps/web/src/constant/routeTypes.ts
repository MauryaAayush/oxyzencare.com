import { ReactNode } from "react";
import { Role } from "../constant/role";
export const PUBLIC: string = "PUBLIC";
export const PRIVATE: string = "PRIVATE";
export interface Route {
	path: string;
	element: ReactNode;
	role?: Role | null;
	type: typeof PUBLIC | typeof PRIVATE;
}
