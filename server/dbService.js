const mysql = require("mysql");
let instance = null;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "timetracking",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.log(err.message);
  }
  console.log("db " + connection.state);
});

class DbService {
  static getDbServiceInstance() {
    return instance ? instance : new DbService();
  }

  async getAllEmployees() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM employees;";

        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (error) {
      console.log("error in read", error);
    }
  }

  async getEmployeeByEid(eid) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = `SELECT * FROM employees WHERE eid=${eid};`;

        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (error) {
      console.log("error in read", error);
    }
  }

  async getEmployeeWork(eid, start, end) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = `SELECT SUM(time) as hours FROM worklog WHERE eid='${eid}' AND date >='${start}' AND date <='${end}';`;

        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (error) {
      console.log("error in read", error);
    }
  }
}

module.exports = DbService;