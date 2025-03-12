const User = require("../models/users.models");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const user = new User({
    id: req.body.id,
    password: req.body.password,
    nickname: req.body.nickname,
  });

  User.create(user, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating a user.",
      });
    } else {
      res.send(data);
    }
  });
};

exports.getAll = (req, res) => {
  User.getAll((err, data) => {
    // 조회한 결과를 처리하는 역할
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    } else {
      res.send(data);
    }
  });
};
