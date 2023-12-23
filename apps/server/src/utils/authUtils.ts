import crypto from "crypto";
import bcrypt from "bcrypt";

class AuthUtils {
	// Compare entered password with stored hashed password
	public static async comparePasswords(
		inputPassword: string,
		storedPassword: string,
	): Promise<boolean> {
		return new Promise((resolve, reject) => {
			bcrypt.compare(inputPassword, storedPassword, (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		});
	}

	// Generate a random reset token
	public static async generateResetToken(): Promise<string> {
		return crypto.randomBytes(20).toString("hex");
	}

	// Hash the given password securely
	public static async hashPassword(password: string): Promise<string> {
		// Use bcrypt to securely hash passwords
		const saltRounds = 10;
		return bcrypt.hash(password, saltRounds);
	}
}

export default AuthUtils;
