import { Router } from "express";
import db from "../db.js";
import cors from "cors";
import multer from "multer";

var router = Router();

import uploader, {
  updater,
  deletefunction,
  getbyid,
  getbyparam,
} from "./uploadhandler.js";
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

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
router.get("/iniglobal", function (req, res) {
  db.query(
    "INSERT INTO page (type) VALUES('global');",
    function (err, result, fields) {

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

router.get("/inimenu", function (req, res) {
  db.query(
    `INSERT INTO page (type,text1) VALUES('menu','${JSON.stringify([])}');`,
    function (err, result, fields) {

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

router.post("/create", upload.array("file"), (req, res) => {
  const data = JSON.parse(JSON.stringify(req.body));
  console.log(data);
  uploader(req, res, JSON.parse(data.data));
  // res.json({ ok: "ok" });
  // res.end();
});
router.post("/update", upload.array("file"), (req, res) => {
  const data = JSON.parse(JSON.stringify(req.body)).data;
  console.log(data);
  updater(req, res, JSON.parse(data));
});

router.post("/delete", upload.array("file"), (req, res) => {
  const data = JSON.parse(JSON.stringify(req.body)).data;
  console.log(data);
  deletefunction(JSON.parse(data), res);
});

router.post("/getbyid", upload.array("file"), (req, res) => {
  const data = req.body.data;
  getbyid(JSON.parse(data), res);
});

router.post("/getbyparam", upload.array("file"), (req, res) => {
  const data = JSON.parse(JSON.stringify(req.body)).data;
  console.log(data);
  getbyparam(JSON.parse(data), res);
});

router.get("/getglobal",  (req, res) => {

  getbyparam({key:"type",value:"global"}, res);
});
router.get("/getmenu",  (req, res) => {

  getbyparam({key:"type",value:"menu"}, res);
});
export default router;
