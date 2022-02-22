require("dotenv").config();
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io", { rememberTransport: false })(server);
const port = process.env.PORT || 7002;
const cors = require("cors");
const router = require("./routes")(io);
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  console.log("masul");
  return res
    .send({
      message: "Hello this is api multiserver hostingnya zilog",
    })
    .status(200);
});
app.use("/multiserver/v1/zilog/", router);

server.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
