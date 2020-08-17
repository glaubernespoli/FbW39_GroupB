const express = require("express");
const server = express();
server.use(
  express.static("/home/oem/Documents/Glauber_Team_Project/public/html")
);
const port = 5000;
server.listen(port);
