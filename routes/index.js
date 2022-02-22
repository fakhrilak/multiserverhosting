const { Dayjs } = require("dayjs");
const dayjs = require("dayjs");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
let ClientConnect = [];
module.exports = function (io) {
  io.on("connection", (socket) => {
    socket.on("onConnect", (data) => {
      socket.emit("res-onConnect", "connected dub");
    });
  });

  router.get("/", (req, res) => {
    return res.status(200).send({
      message: "Hello this is from routes",
    });
  });
  return router;
};
