import {Router} from "express"
import db from "../db.js"
import cors from "cors"
import multer from "multer"

var router = Router();

import uploader, {
  updater,
  deletefunction,
  getbyid,
  getbyparam,
} from "./uploadhandler.js";
const upload = multer({ dest: "../uploads/" });

router.get("/signin", function (req, res) {
  res.send("/signin");
});
router.get("/", function (req, res) {
  db.query(
    "CREATE TABLE IF NOT EXISTS page( id int NOT NULL AUTO_INCREMENT PRIMARY KEY ," +
      " type varchar(400), entry1 varchar(1000), entry2 varchar(1000), entry3 varchar(1000)," +
      " entry4 varchar(1000), entry5 varchar(1000), entry6 varchar(1000)," +
      " text1 LONGTEXT, text2 LONGTEXT,text3 LONGTEXT," +
      "text4 LONGTEXT);",
    function (err, result, fields) {
      db.close();
      if (err) {
        res.send("error happened");
        res.end();
        console.log(err);
        return;
      }

      res.send("db created");
      res.end();
    }
  );
});

router.post("/delete", cors(), (req, res) => {
  console.log(req.query);
  res.send("hello");
  res.end();
});

router.post("/create", upload.array("file"), (req, res) => {
  console.log(req.body);
  uploader(req,res,req.body.data)
 
});
router.post("/update", upload.array("file"), (req, res) => {
  const metadata = req.body.metadata;
  const data = req.body.data;
  updater(req, res, metadata, data);
});

router.post("/delete", upload.array("file"), (req, res) => {
  const data = req.body.data;
  deletefunction(data, res);
});

router.post("/getbyid", upload.array("file"), (req, res) => {
  const data = req.body.data;
  getbyid(data, res);
});

router.post("/getbyparam", upload.array("file"), (req, res) => {

  const data = req.body.data;
  console.log(data)
  getbyparam(JSON.parse(data), res);
});

export default router
