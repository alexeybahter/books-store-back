const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const db = process.env.POSTGRES_DB;
const host = process.env.POSTGRES_HOST;
const db_port = process.env.POSTGRES_PORT;
export const postgresUrl = `postgres://${user}:${password}@${host}:${db_port}/${db}`;
