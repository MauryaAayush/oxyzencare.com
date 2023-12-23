import { Sequelize } from "sequelize";
import env from "./env";
import session from "express-session";
import SequelizeStore from "connect-session-sequelize";

// Create a new Sequelize instance for database connection
const sequelize = new Sequelize(
	env.DATABASE_NAME,
	env.DATABASE_USERNAME,
	env.DATABASE_PASSWORD,
	{
		host: env.DATABASE_HOST,
		dialect: "mysql",
	},
);

// Create a Sequelize session store using the express-session store
export const SequelizeSessionStore = SequelizeStore(session.Store);

// Export the configured Sequelize instance
export default sequelize;
