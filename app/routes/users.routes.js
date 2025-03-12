const users = require("../controllers/users.controllers.js");

// route를 정의하는 곳
const routes = (app) => {
  app.get("/users", users.getAll);
  app.post("/user", users.create);
  // app.put("/users",users.update);
};

module.exports = routes;
