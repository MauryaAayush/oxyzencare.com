import { PassportStatic } from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { UserModel } from "@models/user.model";
import { UserAttributes } from "@interfaces/users";
import AuthUtils from "@utils/authUtils";

class PassportConfig {
	constructor(private passport: PassportStatic) {
		this.configureLocalStrategy();
		this.configureRegisterStrategy();
		this.serializeUser();
		this.deserializeUser();
	}

	// Configuring the local strategy for login
	private configureLocalStrategy() {
		this.passport.use(
			"local",
			new LocalStrategy(
				{
					usernameField: "email",
					passwordField: "password",
				},
				async (email: string, password: string, done) => {
					try {
						// Check if the user exists in the database
						const foundUser = await UserModel.findOne({
							where: { email: email },
						});

						console.log(foundUser);

						if (foundUser) {
							// Compare the entered password with the stored password
							const isPasswordMatch =
								await AuthUtils.comparePasswords(
									password,
									foundUser.dataValues.password,
								);

							if (isPasswordMatch) {
								// Remove the password from the user object before serializing
								delete foundUser.dataValues.password;
								return done(null, foundUser.dataValues);
							} else {
								return done("Incorrect password", false);
							}
						}
					} catch (error) {
						return done("User not found", false);
					}
				},
			),
		);
	}

	// Configuring the local strategy for user registration
	private configureRegisterStrategy() {
		this.passport.use(
			"local-register",
			new LocalStrategy(
				{
					usernameField: "email",
					passwordField: "password",
					passReqToCallback: true, // Pass the entire request to the callback
				},
				async (req, email: string, password: string, done) => {
					const {name,phone_number,avatar,role,reset_token,reset_token_expiration} = req.body;
					console.log(req.body,"-------------------------------")

					try {
						// Check if the user with the given email already exists
						const existingUser = await UserModel.findOne({
							where: { email: email },
						});

						if (existingUser) {
							return done(
								"User with this email already exists",
								false,
							);
						}

						// Create a new user with hashed password
						const newUser = await UserModel.create({
							email: email,
							password: await AuthUtils.hashPassword(password),
							name: name,
							phone_number: phone_number,
							avatar: avatar,
							role: role,
							reset_token: reset_token,
							reset_token_expiration:reset_token_expiration
						});
                        
						// Retrieve the newly created user for serialization
						const createdUser = await UserModel.findByPk(
							newUser.id,
						);
						// Remove the password from the user object before serializing
						if (createdUser) {
							delete createdUser.dataValues.password;
							return done(null, createdUser.dataValues);
						}
						
					} catch (error) {
						return done(error, false);
					}
				},
			),
		);
	}

	// Serialize user to store in the session
	private serializeUser() {
		this.passport.serializeUser(function (user: UserAttributes, done) {
			done(null, user.id);
		});
	}

	// Deserialize user from the stored session data
	private deserializeUser() {
		this.passport.deserializeUser(async function (id: string, done) {
			try {
				// Retrieve user from the database using the stored id
				const user = await UserModel.findByPk(id);
				// Return the user data for deserialization
				done(null, user);
			} catch (error) {
				done(error);
			}
		});
	}
}

export default PassportConfig;
