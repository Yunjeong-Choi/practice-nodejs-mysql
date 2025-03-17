const mysql = require("mysql2");
const dbconfig = require("../config/db.config");

// TODO: connect 실패 처리하는 곳 없음!
// 이렇게 안쪽에 있으면 코드를 읽을때 db 연결의 시점을 직관적으로 확인하기 어렵다.
// 태성님은 connect 함수로 빼서 시점을 명확하게 표시
const connection = mysql.createConnection(dbconfig);

// // MySQL connection 실행
// connection.connect(error=>{
//     if(error) throw error;
//     console.log("Successfully connected to the database. ");
// })

module.exports = connection;
