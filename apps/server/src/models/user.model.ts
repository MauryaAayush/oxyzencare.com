import sequelize from '@configs/db';
import { UserAttributes } from '@interfaces/users';
import { Model, DataTypes } from 'sequelize';

class UserModel extends Model<UserAttributes> implements UserAttributes {
	public id!: number;
	public name!: string;
	public email!: string;
	public phone_number!: string;
	public password!: string;
	public role!: string;
	public reset_token!: string;
	public avatar: string;
	public reset_token_expiration!: Date;
}

UserModel.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		phone_number: {
			type: DataTypes.STRING(15),
		},
		password: {
			type: DataTypes.STRING(255),
		},
		role: {
			type: DataTypes.STRING(255),
		},
		avatar: {
			type: DataTypes.STRING(255),
		},
		reset_token: {
			type: DataTypes.STRING(255),
		},
		reset_token_expiration: {
			type: DataTypes.DATE,
			allowNull: true,
		}
	},
	{
		sequelize,
		modelName: 'user',
		tableName: 'users',
		timestamps: false,
	}
);

export { sequelize, UserModel };
