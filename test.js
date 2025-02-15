let employeesController = require("./controllers/employees");
let departmentsController = require('./controllers/departments')
let salariesController = require('./controllers/salaries')
let mockResponse = {
  json: (body) => {
    console.log(body);
    return mockResponse;
  },
  send: (body) => {
    console.log(body)
    return mockResponse;
  },
  status: (code) => {
    console.log(code)
    return mockResponse;
  }
}
let mockRequest = {
  params: { id: 10050, first_name: 'Karsten' },
  body: { first_name: "bogus", last_name: "user" }
}

//UNCOMMENT WHATEVER YOU ARE TRYING TO TEST
// employeesController.getEmployees(mockRequest, mockResponse);
// employeesController.getEmployeesByFirstName(mockRequest, mockResponse);
// employeesController.getEmployeesById(mockRequest, mockResponse);

// departmentsController.getDepartments(mockRequest, mockResponse);
// departmentsController.getDepartmentManagers(mockRequest, mockResponse);
// departmentsController.getDepartmentEmployeeCount(mockRequest, mockResponse);


// salariesController.getSalaries(mockRequest, mockResponse);
// salariesController.getSalariesById(mockRequest, mockResponse);
// salariesController.sumOfSalaries(mockRequest, mockResponse);
