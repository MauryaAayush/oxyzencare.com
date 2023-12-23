
import { UserModel } from '@models/user.model';
import AuthUtils from '@utils/authUtils';
import MailSender from '@utils/mailSender';

class UserService {
	private userModel = UserModel;

	public register = async (
		email: string,
		password: string,
	): Promise<UserModel> => {
		try {
			// Check if the user with the given email already exists
			const existingUser = await this.userModel.findOne({
				where: { email: email },
			});

			if (existingUser) {
				throw new Error("User with this email already exists");
			}

			const hashedPassword = await AuthUtils.hashPassword(password);

			const newUser = await this.userModel.create({
				email: email,
				password: hashedPassword,
				
			});

  
      return newUser;
		} catch (error) {
			throw new Error("Error during user registration: " + error.message);
		}
	};

	// "Forgot Password" functionality
	public requestForgotPassword = async (email: string): Promise<void> => {
		try {
			const existingUser = await this.userModel.findOne({
				where: { email: email },
			});

			if (existingUser) {
				const resetToken = await AuthUtils.generateResetToken();
				const resetTokenExpiration = new Date(Date.now() + 600000);
				console.log("Reset Token:", resetToken);
				console.log("Reset Token Expiration:", resetTokenExpiration);

				await this.userModel.update(
					{
						resetToken: resetToken,
						resetTokenExpiration: resetTokenExpiration,
					},
					{ where: { email: email } },
				);

				await MailSender.sendPasswordResetEmail(email, resetToken);
				return;
			}
		} catch (error) {
			throw new Error(
				"Error during forgot password request: " + error.message,
			);
		}
	};

	public resetPassword = async (
		resetToken: string,
		newPassword: string,
	): Promise<void> => {
		try {
			const user = await this.userModel.findOne({
				where: {
					resetToken: resetToken,
				},
			});
			const date = new Date(user.dataValues.resetTokenExpiration);
			console.log(user.dataValues.resetTokenExpiration);
			const miliseconds = date.getTime();
			console.log(miliseconds);
			console.log(Date.now());
			if (!user) {
				throw new Error("Invalid or expired reset token");
			} else {
				if (miliseconds >= Date.now()) {
					await this.userModel.update(
						{ password: newPassword },
						{ where: { resetToken: resetToken } },
					);
				} else {
					throw new Error("expired reset token ");
				}
			}
		} catch (error) {
			throw new Error("Error during password reset: " + error.message);
		}
	};

	public changePassword = async (
		email: string,
		oldPassword: string,
		newPassword: string,
	): Promise<void> => {
		try {
			const existingUser = await this.userModel.findOne({
				where: { email: email },
			});

			if (!existingUser) {
				throw new Error("User not found");
			}
			const isPasswordMatch = await AuthUtils.comparePasswords(
				oldPassword,
				existingUser.dataValues.password,
			);

			if (isPasswordMatch) {
				await this.userModel.update(
					{ password: newPassword },
					{ where: { email: email } },
				);

				console.log("Password updated successfully");
			} else {
				throw new Error("Incorrect password");
			}
		} catch (error) {
			console.error(error);
			throw new Error(error.message);
		}
	};
}

export default UserService;
