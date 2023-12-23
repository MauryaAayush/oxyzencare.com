// Import environment configuration
import env from "@configs/env";
import { NextFunction, Request, Response } from "express";
import passport from "passport";
import "@configs/passport";

// Controller handling authentication-related actions
class AuthController {
	// Handle user registration
	public register = async (
		req: Request,
		res: Response,
		next: NextFunction,
	) => {
		passport.authenticate("local-register", async function (err, user) {
			console.log(user,"---------------------------------")
			try {
				if (err) {
					// Return error response for registration failure
					return res.status(400).json({
						message: err,
						error: true,
					});
				}

				// Log in the user after successful registration
				req.logIn(user, function (err) {
					if (err) {
						return next(err);
					}

					// Return success response for registration
					return res.status(201).json({
						message: "Registration successful!",
						error: false,
						user: req.user,
					});
				});
			} catch (error) {
				// Return error response for unexpected errors during registration
				return res.status(500).json({
					message: "Error during registration",
					error: true,
				});
			}
		})(req, res, next);
	};

	// Handle user login
	public login = async (req: Request, res: Response, next: NextFunction) => {
		passport.authenticate("local", function (err, user) {
			if (err || !user) {
				// Return error response for login failure
				return res.json({
					message: err,
				});
			}
			req.logIn(user, function (err) {
				if (err) {
					return next(err);
				}

				// Return success response for login
				return res.status(200).json({
					message: "Sign in successful!",
					error: false,
					user: req.user,
				});
			});
		})(req, res, next);
	};

	// Handle user logout
	public logout = async (req: Request, res: Response, next: NextFunction) => {
		req.logout(function (err) {
			if (err) return next(err);
			res.status(200).clearCookie(env.AUTH_COOKIE_NAME, {
				domain: env.COOKIE_DOMAIN,
			});
			req.session.destroy(function (err) {
				if (err) return next(err);
				// Return success response for logout
				return res
					.status(200)
					.send({ message: "Logged out successfully", error: false });
			});
		});
	};
}

// Export the AuthController class
export default AuthController;
