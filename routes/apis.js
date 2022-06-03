const express = require("express");
var router = express.Router();
router.post("/signin", function (req, res) {
  // loging to perform user signin
});
router.get("/", function (req, res) {
  res.send("from modifies express server");
  // fetches all messages of given user
});
module.exports.routes = router;
