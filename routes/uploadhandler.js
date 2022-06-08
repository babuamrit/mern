const db = require("../db.js");
const uploader = (req, res, metadata, data) => {
  switch (metadata.type) {
    case "slider":
      db.query(
        `INSERT INTO page (type,entry1,text1,text2) VALUES(slider, ${req.files[0].originalname}, ${data.text1}, ${data.text2}});`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: false,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          return;
        }
      );
      break;
    case "introduction":
      break;
    case "services":
      db.query(
        `INSERT INTO page (type,entry1,entry2,text1) VALUES(services, ${req.files[0].originalname}, ${data.name}, ${data.service_description};})`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: false,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          return;
        }
      );
      break;
    case "job_categories":
      db.query(
        `INSERT INTO page (type,entry1, entry2,text2) VALUES(jobs_categories, ${req.files[0].originalname}, ${data.category_name}, ${data.category_description};})`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: false,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          return;
        }
      );
      break;
    case "countries_we_serve":
      db.query(
        `INSERT INTO page (type,entry1,entry2) VALUES(countries_we_serve, ${req.files[0].originalname}, ${data.name};})`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: false,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          return;
        }
      );
      break;
    case "jobs_available":
      db.query(
        `INSERT INTO page (type,entry1,entry2,entry3,entry4,text1) VALUES(jobs_available, ${req.files[0].originalname}, ${data.job_name}, ${data.job_category}, ${data.country}, ${data.job_description};})`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: false,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          return;
        }
      );
      break;
    case "ourteam":
      db.query(
        `INSERT INTO page (type,entry1,entry2,entry3,entry4,entry5) VALUES(ourteam, ${req.files[0].originalname}, ${data.name}, ${data.post}, ${data.phone}, ${data.email};})`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: false,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          return;
        }
      );
      break;
    case "clients":
      db.query(
        `INSERT INTO page (type,entry1) VALUES(clients, ${req.files[0].originalname};})`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: false,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          return;
        }
      );
      break;
    default:
      break;
  }
};

export default uploader;

const updater = (req, res, metadata, data) => {
  switch (metadata.type) {
    case "slider":
      db.query(
        `UPDATE page  SET ${
          req.files.length > 0
            ? "entry1 = '" + req.files[0].originalname + "'"
            : "'" + data.image_src + "'"
        }, text1 = '${data.text1}', text2 = '${data.text2}' WHERE id = ${
          data.id
        };})`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: false,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          return;
        }
      );

      break;

    case "services":
      db.query(
        `UPDATE page  SET ${
          req.files.length > 0
            ? "entry1 = '" + req.files[0].originalname + "'"
            : "'" + data.image_src + "'"
        }, entry2 = '${data.name}', text1 = '${
          data.service_description
        }' WHERE id = ${data.id};})`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: false,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          return;
        }
      );

      break;
    case "job_categories":
      db.query(
        `UPDATE page  SET ${
          req.files.length > 0
            ? "entry1 = '" + req.files[0].originalname + "'"
            : "'" + data.image_src + "'"
        }, entry2 = '${data.category_name}', text1 = '${
          data.category_description
        }' WHERE id = ${data.id};})`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: false,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          return;
        }
      );

      break;
    case "countries_we_serve":
      db.query(
        `UPDATE page  SET ${
          req.files.length > 0
            ? "entry1 = '" + req.files[0].originalname + "'"
            : "'" + data.image_src + "'"
        }, entry2 = '${data.name}' WHERE id = ${data.id};})`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: false,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          return;
        }
      );
      break;
    case "jobs_available":
      db.query(
        `UPDATE page  SET ${
          req.files.length > 0
            ? "entry1 = '" + req.files[0].originalname + "'"
            : "'" + data.image_src + "'"
        }, entry2 = '${data.category_name}', text1 = '${
          data.category_description
        }' WHERE id = ${data.id};})`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: false,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          return;
        }
      );
      break;
    case "ourteam":
      db.query(
        `UPDATE page  SET ${
          req.files.length > 0
            ? "entry1 = '" + req.files[0].originalname + "'"
            : "'" + data.image_src + "'"
        }, entry2 = '${data.name}', entry3 = '${data.post}' , entry4 = '${
          data.phone
        }' , entry5 = '${data.email}' WHERE id = ${data.id};})`,
        (err, result, fields) => {
          if (err) {
            res.json({
              success: false,
            });
            res.end();
            return;
          }

          res.json({ success: true });
          return;
        }
      );
      break;
    default:
      break;
  }
};

const deletefunction = (data, res) => {
  db.query(`DELETE FROM pages WHERE id = ${data.id}`, (err, result, fields) => {
    if (err) {
      res.json({
        success: false,
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
    `Select *  FROM pages WHERE id = ${data.id}`,
    (err, result, fields) => {
      if (err) {
        res.json({
          success: false,
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
    `Select *  FROM pages WHERE ${data.key} = ${data.value}`,
    (err, result, fields) => {
      if (err) {
        res.json({
          success: false,
        });
        res.end();
        return;
      }

      res.json({ success: true, result: result });
      return;
    }
  );
};

export { updater, deletefunction, getbyid, getbyparam };
