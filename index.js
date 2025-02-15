const express = require('express');
const app = express();
const employeesRouter = require('./routes/employees');
const departmentsRouter = require('./routes/departments');
const salariesRouter = require('./routes/salaries');
const port = process.env.PORT || 4001


app.use('/salaries', salariesRouter);
app.use('/employees', employeesRouter);
app.use('/departments', departmentsRouter);

app.get('/', (req, res) => res.send('Welcome to GOLD TABLErs'))
app.listen(port, () => {
  console.log('app is listening on:', port)
})

