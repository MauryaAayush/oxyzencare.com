import { config } from "dotenv";
import { cleanEnv, port, str } from "envalid";

// Function to validate and clean environment variables
const validateEnv = () => {
	// Load environment variables from the specified file
	const env = config({
		path: `.env.${process.env.NODE_ENV}.local`,
	}).parsed;

	// Clean and validate the loaded environment variables
	const cleanedEnv = cleanEnv(env, {
		NODE_ENV: str(),
		PORT: port(),
		OPENAI_API_KEY: str(),
		COOKIE_DOMAIN: str(),
		SESSION_SECRET: str(),
		AUTH_COOKIE_NAME: str(),
		CORS_ORIGINS: str(),
		DATABASE_NAME: str(),
		DATABASE_USERNAME: str(),
		DATABASE_PASSWORD: str(),
		DATABASE_HOST: str(),
		COOKIE_SECRET: str(),
		JWT_SECRET: str(),
		LOG_DIR: str(),
		AWS_REGION: str(),
		SES_AWS_REGION: str(),
		AWS_ACCESS_KEY_ID: str(),
		AWS_SECRET_ACCESS_KEY: str(),
		FROM_EMAIL: str(),
		AWS_BUCKET_NAME: str(),
	});

	// Return the cleaned and validated environment variables
	return cleanedEnv;
};

// Log the start of environment validation
console.log("Validating env...");

// Validate and clean the environment variables
const env = validateEnv();

// Log the successful validation of environment variables
console.log("Validated env: It's all good!");

// Export the cleaned and validated environment variables
export default env;
