const dotenv = require("dotenv").config();

if (process.env.NODE_ENV !== "prod") {
  const configFile = `./.env.${process.env.NODE_ENV}`;
} else {
    dotenv.config();
}

module.exports = {
    PORT : process.env.PORT,
    DB_URL: process.env.MONGODB_URI,
}