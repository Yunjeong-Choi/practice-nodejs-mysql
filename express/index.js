console.log("Hello World!");

const express = require("express");
const routes = require("./app/routes/users.routes");

const app = express();

// req가 routes에 넘어가기 전에 이 처리를 해줘야 함
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("port", process.env.PORT || 3030); // 포트 설정
// app.set("host", process.env.HOST || "0.0.0.0"); // 아이피 설정

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});

routes(app);

// // Step 1. db 연결 확인하기
// connection.connect();

// connection.query("SELECT * from Users", (error, rows, fields) => {
//   if (error) throw error;

//   console.log("User info is: ", rows);
// });

// connection.end();

// // etc.

// // 루트 접속시 아이피 출력
// app.get("/", function (req, res) {
//   res.send("접속된 아이피: " + req.ip);
// });

// // model, controllers, routes 로 분리하지 않으면 이런 모양
// app.get("/users", (req, res) => {
//   connection.query("select * from Users", (error, rows) => {
//     if (error) throw error;

//     res.send(rows);
//   });
// });

// // 서버 동작중인 표시
// app.listen(app.get("port"), app.get("host"), () =>
//   console.log(
//     "Server is running on : " + app.get("host") + ":" + app.get("port"),
//   ),
// );
