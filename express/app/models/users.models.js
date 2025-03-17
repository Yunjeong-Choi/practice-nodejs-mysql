const connection = require("./db");

// Q. 객체가 하나 생성이 된건가?
// A. 놉. 생성자 함수가 User라는 변수에 할당된것
// https://ko.javascript.info/constructor-new
// TODO: repository와 비슷한 구조, Users라고 부르는 것이 더 역할에 적합
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

/* insert into users (password, nickname) values (?, ?)
?를 왜 사용할까?
sql injection 공격
${id}이렇게 사용하면 유저가 로그인 할때 id에 쿼리문을 넣을 수 있음 (공격)

*/
