import { Sequelize } from "sequelize";
import { postgresUrl } from "../config/postgres";
import { initUser, User } from "./user";
import { initBook, Book } from "./book";
export { User } from "./user";
export { Book } from "./book";

const sequelize = new Sequelize(postgresUrl, {
  dialect: "postgres",
  logging: false,
  define: { underscored: true }
});

export const db = sequelize;
initUser(sequelize);
initBook(sequelize);
