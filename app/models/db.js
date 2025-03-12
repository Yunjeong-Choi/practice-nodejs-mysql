const mysql = require("mysql2");
const dbconfig = require("../config/db.config");

const connection = mysql.createConnection(dbconfig);

// // MySQL connection 실행
// connection.connect(error=>{
//     if(error) throw error;
//     console.log("Successfully connected to the database. ");
// })

module.exports = connection;
