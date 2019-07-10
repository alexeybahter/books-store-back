import * as bcrypt from "bcryptjs";
import { DataTypes, Model, Sequelize } from "sequelize";

export class User extends Model {

  public static findOneUser(id) {
    return User.findOne({
      where: { id },
      attributes: ["id", "email", "first_name", "last_name"]
    });
  }

  public id!: number;
  public first_name?: string;
  public last_name?: string;
  public email: string;
  public encryptedPassword?: string;
}

const attributes = {
  first_name: { type: new DataTypes.STRING(), allowNull: true },
  last_name: { type: new DataTypes.STRING(), allowNull: true },
  email: { type: new DataTypes.STRING(), allowNull: false },
  encryptedPassword: { type: new DataTypes.STRING(), allowNull: true },
};

export function initUser(sequelize: Sequelize) {
  User.init(attributes, { sequelize });
}

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}
