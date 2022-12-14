const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Monamij1000',
    database: 'company_db',
 });
  
 //mysql server & database
  connection.connect( (err) =>{
    if (err) throw err,
    //run the start funtion
    firstPrompt();
  });

//Prompts the user
function firstPrompt() {

  inquirer
    .prompt({
        type: "list",
        name: "task",
        message: "What will you like to do?",
        choices: [
             "View Employees",
             "View Employees by Department",
             "View Employees by Manager",
             "Add Employee",
          "Remove Employees",
          "Update Employee Role",
          "Add Role","View Roles",
          "Add Department",
          "View Departments",
          "End"]
      })

    .then(response => {
        switch (response.menu) {
        case 'View all departments':
          viewDepartment();
          break;
          case 'view all jobs':
            viewJobs();
            break;
        case 'View employees ':
            viewEmployees();
          break;
        case 'Add a department':
          addDepartment();
          break;
          case "Add a job":
          addJob();
          break;
          case "Add an Employee":
            addEmployee();
            break;
          case "Update employee job":
            updateEmployee();
          break;
        case "Exit":
          connection.end();
          
        }
    });
};

    const viewDepartment = () => {
        connection.query('SELECT * FROM department', function (err, res) {
          if (err) throw err;
          console.table(res);
          startMenu();
        });
      };
      
      const viewJobs = () => {
        connection.query('SELECT * FROM job', function (err, res) {
          if (err) throw err;
          console.table(res);
          startMenu();
        });
      };
      
      const viewEmployees = () => {
        connection.query(
          'SELECT employee.id, first_name, last_name, title, salary, dept_name, manager_id FROM ((department JOIN job ON department.id = job.department_id) JOIN employee ON job.id = employee.job_id);',
          function (err, res) {
            if (err) throw err;
            console.table(res);
            startMenu();
          }
        );
      };
      
      const addDepartment = () => {
        inquirer.prompt([
            {
              name: 'department',
              type: 'input',
              message: 'What is the department name?',
            },
          ])
          .then(answer => {
            connection.query(
              'INSERT INTO department (dept_name) VALUES (?)',
              [answer.department],
              function (err, res) {
                if (err) throw err;
                console.log('Department added!');
                startMenu();
              }
            );
          });
      };
      
      const addJob = () => {
        inquirer.prompt([
            {
              name: 'jobTitle',
              type: 'input',
              message: 'What is the job title?',
            },
            {
              name: 'salary',
              type: 'input',
              message: 'What is the salary for this job?',
            },
            {
              name: 'deptId',
              type: 'input',
              message: 'What is the department ID number?',
            },
          ])
          .then(answer => {
            connection.query(
              'INSERT INTO job (title, salary, department_id) VALUES (?, ?, ?)',
              [answer.jobTitle, answer.salary, answer.deptId],
              function (err, res) {
                if (err) throw err;
                console.log('Job added!');
                startMenu();
              }
            );
          });
      };
      
      const addEmployee = () => {
        inquirer.prompt([
            {
              name: 'nameFirst',
              type: 'input',
              message: "What is the employee's first name?",
            },
            {
              name: 'nameLast',
              type: 'input',
              message: "What is the employee's last name?",
            },
            {
              name: 'jobId',
              type: 'input',
              message: "What is the employee's job id?",
            },
            {
              name: 'managerId',
              type: 'input',
              message: 'What is the manager Id?',
            },
          ])
          .then(answer => {
            connection.query(
              'INSERT INTO employee (first_name, last_name, job_id, manager_id) VALUES (?, ?, ?, ?)',
              [answer.nameFirst, answer.nameLast, answer.jobId, answer.managerId],
              function (err, res) {
                if (err) throw err;
                console.log('Employee added!');
                startMenu();
              }
            );
          });
      };
      
      const updateEmployee = () => {
        inquirer
          .prompt([
            {
              name: 'id',
              type: 'input',
              message: 'Enter employee id',
            },
            {
              name: 'jobId',
              type: 'input',
              message: 'Enter new job id',
            },
          ])
          .then(answer => {
            connection.query(
              'UPDATE employee SET job_id=? WHERE id=?',
              [answer.jobId, answer.id],
              function (err, res) {
                if (err) throw err;
                console.log('Employee updated!');
                startMenu();
              }
            );
          });
      };

    // create an if statement
    //.then((output) => {
    //  console.log(output);
     // if (output.action === "view all employees"){
        
    //  }else if(output.action === "add employee"){

    //  }
   // });
//}; const inquirer = require("inquirer");




//const menu = () => {
 // return inquirer
 //   .prompt([
     // {
      //  type: "list",
     //   name: "action",
    //    message: "what would you like to do",
      //  choices: ["view all employees","add employee","update employee","view all roles", "add role", "view all departments", "add department"]
     // },
    //])

    //// create an if statement
    //.then((output) => {
   //   console.log(output);
    //  if (output.action === "view all employees"){
        
    //  }else if(output.action === "add employee"){

   //   }
   // });
//};