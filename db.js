import mysql from "mysql2"

const conn = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "test",
  password: "root",
});

export default conn