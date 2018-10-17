module.exports = {
    db : {
        name: 'db',
        connector: 'memory'
    },
    mysqlDs: {
      connector: 'mysql',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      name: 'mysqlDs'
    }
  };