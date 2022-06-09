import db from "../db.js";
const uploader = (req, res, data) => {
  console.log(data);
  switch (data.type) {
    case "slider":
      db.query(
        `INSERT INTO page (type,entry1,entry2,entry3) VALUES('slider', '${req.files[0].originalname}', '${data["Heading"]}', '${data["Sub Heading"]}');`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: err,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          res.end();
          return;
        }
      );
      break;
    case "introduction":
      break;
    case "services":
      db.query(
        `INSERT INTO page (type,entry1,entry2,text1) VALUES('services', '${req.files[0].originalname}', '${data.name}', '${data.description}')`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: err,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          res.end();
          return;
        }
      );
      break;
    case "job_categories":
      db.query(
        `INSERT INTO page (type,entry1, entry2,text1) VALUES('job_categories', '${req.files[0].originalname}', '${data["category name"]}', '${data.description}')`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: err,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          res.end();
          return;
        }
      );
      break;
    case "countries_we_serve":
      db.query(
        `INSERT INTO page (type,entry1,entry2) VALUES('countries_we_serve', '${req.files[0].originalname}', '${data["Country Name"]}')`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: err,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          res.end();
          return;
        }
      );
      break;
    case "jobs_available":
      db.query(
        `INSERT INTO page (type,entry1,entry2,entry3,entry4,text1) VALUES('jobs_available', '${req.files[0].originalname}', '${data["job name"]}', '${data.job_category}', '${data["country name"]}', '${data.description}')`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: err,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          res.end();
          return;
        }
      );
      break;
    case "ourteam":
      db.query(
        `INSERT INTO page (type,entry1,entry2,entry3,entry4,entry5) VALUES('ourteam', '${req.files[0].originalname}', '${data.name}', '${data.post}', '${data.phone}', '${data.email}')`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: err,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          res.end();
          return;
        }
      );
      break;
    case "clients":
      db.query(
        `INSERT INTO page (type,entry1) VALUES('clients', '${req.files[0].originalname}')`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: err,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          res.end();
          return;
        }
      );
      break;
    case "global":
      db.query(
        `INSERT INTO page (type,entry1) VALUES('global', '${req.files[0].originalname}')`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: err,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          res.end();
          return;
        }
      );
      break;
    case "menuitem":
      db.query(
        `INSERT INTO page (type,entry1,entry2,entry3,entry4,text1) VALUES('menuitem', '${
          req.files[0].originalname
        }',${req.files[1] != null ? req.files[1].originalname : ""}' , '${
          data.name
        }',${data.caption}',${data.description} )`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: err,
            });
            res.end();
            return;
          }

          res.json({ result });
          res.end();
          return;
        }
      );
    default:
      break;
  }
};

export default uploader;

const updater = (req, res, data) => {
  switch (data.type) {
    case "slider":
      db.query(
        `UPDATE page  SET ${
          req.files.length > 0
            ? "entry1 = '" + req.files[0].originalname + "',"
            : ""
        } text1 = '${data["Heading"]}', text2 = '${
          data["Sub Heading"]
        }' WHERE id = ${data.id};`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: err,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          res.end();
          return;
        }
      );

      break;

    case "services":
      db.query(
        `UPDATE page  SET ${
          req.files.length > 0
            ? "entry1 = '" + req.files[0].originalname + "',"
            : ""
        } entry2 = '${data.name}', text1 = '${data.description}' WHERE id = ${
          data.id
        };`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: err,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          res.end();
          return;
        }
      );

      break;
    case "job_categories":
      db.query(
        `UPDATE page  SET ${
          req.files.length > 0
            ? "entry1 = '" + req.files[0].originalname + "',"
            : ""
        } entry2 = '${data["category name"]}', text1 = '${
          data.description
        }' WHERE id = ${data.id};`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: err,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          res.end();
          return;
        }
      );

      break;
    case "countries_we_serve":
      db.query(
        `UPDATE page  SET ${
          req.files.length > 0
            ? "entry1 = '" + req.files[0].originalname + "',"
            : ""
        } entry2 = '${data["Country Name"]}' WHERE id = ${data.id};`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: err,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          res.end();
          return;
        }
      );
      break;
    case "jobs_available":
      db.query(
        `UPDATE page  SET ${
          req.files.length > 0
            ? "entry1 = '" + req.files[0].originalname + "',"
            : ""
        } entry2 = '${data["job name"]}',  entry3 = '${
          data.job_category
        }',  entry4 = '${data["country name"]}',
        text1 = '${data.description} WHERE id = ${data.id};`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: err,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          res.end();
          return;
        }
      );
      break;
    case "ourteam":
      db.query(
        `UPDATE page  SET ${
          req.files.length > 0
            ? "entry1 = '" + req.files[0].originalname + "',"
            : ""
        } entry2 = '${data.name}', entry3 = '${data.post}' , entry4 = '${
          data.phone
        }' , entry5 = '${data.email}' WHERE id = ${data.id};`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: err,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          res.end();
          return;
        }
      );
      break;
    case "global":
      db.query(
        `UPDATE page  SET ${
          req.files.length > 0
            ? "entry1 = '" + req.files[0].originalname + "',"
            : ""
        } text1 = '${JSON.stringify(data)}' WHERE type = 'global';`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: err,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          res.end();
          return;
        }
      );
      break;
    case "menuitem":
      db.query(
        `UPDATE  page SET ${
          req.files.length > 0
            ? "entry1 = '" + req.files[0].originalname + "',"
            : ""
        } ${
          req.files.length > 1
            ? "entry2 = '" + req.files[1].originalname + "',"
            : ""
        }',entry3='${data.name}',entry4='${data.caption}',text1='${
          data.description
        }' WHERE = id= ${data.id}`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: err,
            });
            res.end();
            return;
          }

          res.json({ result });
          res.end();
          return;
        }
      );
      break;
    case "menu":
      db.query(
        `UPDATE  page SET text1='${data}' WHERE type= 'menu';`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: err,
            });
            res.end();
            return;
          }

          res.json({ result });
          res.end();
          return;
        }
      );
    default:
      break;
  }
};

const deletefunction = (data, res) => {
  db.query(`DELETE FROM page WHERE id = ${data.id}`, (err, result, fields) => {
    if (err) {
      res.json({
        success: err,
      });
      res.end();
      return;
    }

    res.json({ success: true });
    return;
  });
};

const getbyid = (data, res) => {
  db.query(
    `Select *  FROM page WHERE id = ${data.id}`,
    (err, result, fields) => {
      if (err) {
        res.json({
          success: err,
        });
        res.end();
        return;
      }

      res.json({ success: true, result: result });
      return;
    }
  );
};

const getbyparam = (data, res) => {
  db.query(
    `Select *  FROM page WHERE ${data.key} = '${data.value}'`,
    (err, result, fields) => {
      if (err) {
        res.json({
          success: err,
        });
        res.end();
        return;
      }

      res.json({ success: true, result: result });
      res.end();
      return;
    }
  );
};

export { updater, deletefunction, getbyid, getbyparam };
