const connection = require("./db");

// TODO: 객체가 하나 생성이 된건가?
const User = function (user) {
  this.id = user.id;
  this.password = user.password;
  this.nickname = user.nickname;
};

User.create = (newUser, resultFn) => {
  connection.query("insert into Users set ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      resultFn(err, null);
      return;
    }

    console.log("Created user: ", res);
    resultFn(null, { res });
  });
};

User.getAll = (resultFn) => {
  // 결과 조회만 해서 controller에 전달하는 역할
  connection.query("select * from Users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      resultFn(err, null);
      return;
    }

    console.log("users: ", res);
    resultFn(null, res);
  });
};

module.exports = User;
