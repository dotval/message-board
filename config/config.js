require('dotenv').config();
module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "message_board_development",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": "0"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "message_board_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": "0"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "storage": process.env.DB_URI,
    "dialect": process.env.DB_DIALECT,
    "operatorsAliases": "0"
  }
}
