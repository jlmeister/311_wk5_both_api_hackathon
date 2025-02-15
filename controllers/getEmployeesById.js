const mysql = require('mysql')
const db = require('../mysql/connection')
const sqlErrorHandler = require("../mysql/error");
const getEmployeesById = (req, res) => {
  // select all fields from emp table where emp # matches id query param
  let sql = 'SELECT * FROM ?? WHERE ?? = ?'
  const replacements = ['employees', 'emp_no', req.params.id]
  sql = mysql.format(sql, replacements)
  db.query(sql, (err, results) => {
    if (err) throw err;
    return res.json(results);
  })
}



module.exports = getEmployeesById;

