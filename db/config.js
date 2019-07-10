const baseConfig = {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    dialect: 'postgresql',
};

module.exports = {
    development: {...baseConfig},
    production: {...baseConfig}
};
