import { Response, Request, NextFunction } from "express";
import { CustomRequest } from "@interfaces/CustomRequest";
import { UserModel } from "@models/user.model";
import UserService from "@services/auth.service";

class UserController {
	public userService = new UserService();

	// Forgot Password functionality
	public forgotPassword = async (
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> => {
		try {
			const { email } = req.body;
			await this.userService.requestForgotPassword(email);
			res.status(200).json({
				message: "Password reset email sent successfully",
			});
		} catch (error) {
			next(error);
		}
	};

	// Reset Password functionality
	public resetPassword = async (
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> => {
		try {
			const { resetToken, newPassword } = req.body;
			await this.userService.resetPassword(resetToken, newPassword);
			res.status(200).json({ message: "Password reset successfully" });
		} catch (error) {
			next(error);
		}
	};

	// Change Password functionality
	public changePassword = async (
		req: CustomRequest,
		res: Response,
		next: NextFunction,
	): Promise<void> => {
		try {
			const { oldPassword, newPassword } = req.body;
			const email = req.user.email;

			// Validate presence of oldPassword and newPassword
			if (!oldPassword || !newPassword) {
				res.status(400).json({
					error: "Both oldPassword and newPassword are required.",
				});
				return;
			}

			// Update user password
			await this.userService.changePassword(
				email,
				oldPassword,
				newPassword,
			);
			res.status(200).json({ message: "Password updated successfully" });
		} catch (error) {
			next(error);
		}
	};

	// Get User Details functionality
	public getUserDetails = async (
		req: CustomRequest,
		res: Response,
		next: NextFunction,
	): Promise<void> => {
		const id = Number(req.user.id);

		try {
			// Retrieve user details
			const user = await UserModel.findOne({ where: { id: id } });

			// Return user details in the response
			res.status(200).json({
				success: true,
				error: false,
				user: user.dataValues,
			});
		} catch (error) {
			next(error);
		}
	};
}

export default UserController;
