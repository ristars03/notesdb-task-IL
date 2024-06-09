const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

const db = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

const testConnection = async () => {
    try {
        await db.getConnection();
        console.log("Hore Bisa Konek");
    }
    catch (error) {
        console.log(error);
    }
};

module.exports = { db, testConnection};