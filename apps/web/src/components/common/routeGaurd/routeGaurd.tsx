import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { PUBLIC, PRIVATE } from "../../../constant/routeTypes";
import { Role } from "../../../constant/role";

/**
 * RouteGuard component ensures proper navigation based on user authentication and role.
 *
 * @param children - ReactNode representing the child components of the guard.
 * @param role - Role required for private routes. Optional for other types.
 * @param type - Type of route (PUBLIC or PRIVATE).
 */
interface RouteGuardProps {
	children: ReactNode;
	role?: Role | null;
	type: string;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children, role, type }) => {
	// Get user information from the Redux store
	const user = useSelector((state: RootState) => state.auth.user);

	// If the route type is PUBLIC, allow access to the children components
	if (type === PUBLIC) {
		return children;
	}

	// If the user is not authenticated, redirect to the login page
	else if (!user) {
		return <Navigate to={"/auth/login"} />;
	}

	// For PRIVATE routes, check user role for access
	else if (type === PRIVATE) {
		// If a specific role is required and matches the user's role, allow access
		if (role && user.role === role) {
			return children;
		}

		// Redirect to the admin dashboard if the user is an admin
		else if (role === Role.Admin) {
			return <Navigate to={"/admin/home"} />;
		}

		// Redirect to the doctor dashboard if the user is a doctor
		else if (role === Role.Doctor) {
			return <Navigate to={"/doctor/home"} />;
		}

		// Redirect to the default route for other cases
		else {
			return <Navigate to={"/"} />;
		}
	}

	// For any other route types, redirect to the default route
	else {
		return <Navigate to={"/"} />;
	}
};

export default RouteGuard;
